// =============================================================================
// PCEIA & CEILLI Quiz App — Main Application Logic
// =============================================================================

const PASS_THRESHOLD = 0.75;  // 75% to pass (standard for PCEIA)
const HIGH_SCORE_KEY  = 'pceia_highscore';
const SETTINGS_KEY    = 'pceia_settings';

// ─────────────────────────────────────────────────────────────────────────────
// State
// ─────────────────────────────────────────────────────────────────────────────
let state = {
  questions:       [],   // active question pool (filtered + possibly shuffled)
  current:         0,    // current question index
  selectedOption:  null, // index of currently selected option (null = none)
  answerMap:       {},   // { [questionIndex]: { questionId, chapter, selected, correct, isRight, timeLeft } }
  answers:         [],   // built from answerMap when showing results/review
  score:           0,
  timerInterval:   null,
  timeLeft:        30,
  answered:        false,
  quizStarted:     false,
  reviewMode:      false,
  reviewIndex:     0,

  settings: {
    shuffle:        false,
    timerEnabled:   true,
    timerDuration:  30,
    feedback:       true,         // show green/red immediately after answer
    selectedChapters: [],         // empty = all chapters
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// DOM helpers
// ─────────────────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const show = el => el.classList.remove('hidden');
const hide = el => el.classList.add('hidden');

// ─────────────────────────────────────────────────────────────────────────────
// Initialise
// ─────────────────────────────────────────────────────────────────────────────
function init() {
  loadSettings();
  renderCategoryCheckboxes();
  renderHighScore();
  attachStartListeners();
  showScreen('start-screen');
}

// ─────────────────────────────────────────────────────────────────────────────
// Settings persistence
// ─────────────────────────────────────────────────────────────────────────────
function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    if (saved) Object.assign(state.settings, saved);
  } catch (_) {}
  applySettingsToUI();
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function applySettingsToUI() {
  $('toggle-shuffle').checked       = state.settings.shuffle;
  $('toggle-feedback').checked      = state.settings.feedback;
  $('toggle-timer').checked         = state.settings.timerEnabled;
  $('timer-duration').value         = state.settings.timerDuration;
  $('timer-duration-display').textContent = state.settings.timerDuration + 's';
  $('timer-row').style.display      = state.settings.timerEnabled ? 'flex' : 'none';
}

// ─────────────────────────────────────────────────────────────────────────────
// Category checkboxes (grouped by exam)
// ─────────────────────────────────────────────────────────────────────────────
function renderCategoryCheckboxes() {
  const container = $('category-list');
  container.innerHTML = '';

  ['pceia', 'ceilli'].forEach(source => {
    // Section divider
    const divider = document.createElement('div');
    divider.className = 'exam-section-header';
    divider.textContent = source === 'pceia'
      ? '📋 PCEIA — Pre-Contract Examination for Insurance Agents'
      : '📈 CEILLI — Certificate Examination in Investment-Linked Life Insurance';
    container.appendChild(divider);

    const cats = CATEGORIES.filter(c => c.source === source);
    cats.forEach(cat => {
      const count = quizData.filter(q => q.chapter === cat.id).length;
      const isChecked = state.settings.selectedChapters.length === 0 ||
                        state.settings.selectedChapters.includes(cat.id);

      const label = document.createElement('label');
      label.className = 'cat-chip' + (isChecked ? ' active' : '');
      label.innerHTML = `
        <input type="checkbox" value="${cat.id}" ${isChecked ? 'checked' : ''}>
        <span>${cat.label}</span>
        <em>${count}Q</em>`;
      label.querySelector('input').addEventListener('change', onCategoryChange);
      container.appendChild(label);
    });
  });

  updateSelectedCount();
}

function onCategoryChange() {
  const checked = [...document.querySelectorAll('#category-list input:checked')]
                    .map(el => parseInt(el.value));
  state.settings.selectedChapters = (checked.length === CATEGORIES.length) ? [] : checked;
  document.querySelectorAll('.cat-chip').forEach(chip => {
    chip.classList.toggle('active', chip.querySelector('input').checked);
  });
  updateSelectedCount();
  saveSettings();
}

function updateSelectedCount() {
  const pool = getQuestionPool();
  $('selected-count').textContent = `${pool.length} question${pool.length !== 1 ? 's' : ''} selected`;
}

function selectAll() {
  document.querySelectorAll('#category-list input').forEach(cb => cb.checked = true);
  state.settings.selectedChapters = [];
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.add('active'));
  updateSelectedCount();
  saveSettings();
}

function selectNone() {
  document.querySelectorAll('#category-list input').forEach(cb => cb.checked = false);
  state.settings.selectedChapters = [];
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
  updateSelectedCount();
  saveSettings();
}

function selectExam(source) {
  const ids = CATEGORIES.filter(c => c.source === source).map(c => c.id);
  document.querySelectorAll('#category-list input').forEach(cb => {
    cb.checked = ids.includes(parseInt(cb.value));
  });
  document.querySelectorAll('.cat-chip').forEach(chip => {
    const v = parseInt(chip.querySelector('input').value);
    chip.classList.toggle('active', ids.includes(v));
  });
  state.settings.selectedChapters = ids;
  updateSelectedCount();
  saveSettings();
}

// ─────────────────────────────────────────────────────────────────────────────
// Question pool
// ─────────────────────────────────────────────────────────────────────────────
function getQuestionPool() {
  const sel = state.settings.selectedChapters;
  let pool = sel.length === 0 ? [...quizData] : quizData.filter(q => sel.includes(q.chapter));
  if (state.settings.shuffle) pool = shuffleArray(pool);
  return pool;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─────────────────────────────────────────────────────────────────────────────
// Event listeners (start screen)
// ─────────────────────────────────────────────────────────────────────────────
function attachStartListeners() {
  $('btn-start').addEventListener('click', startQuiz);
  $('btn-select-all').addEventListener('click', selectAll);
  $('btn-select-none').addEventListener('click', selectNone);
  $('btn-select-pceia').addEventListener('click', () => selectExam('pceia'));
  $('btn-select-ceilli').addEventListener('click', () => selectExam('ceilli'));

  $('toggle-shuffle').addEventListener('change', e => {
    state.settings.shuffle = e.target.checked;
    saveSettings();
  });
  $('toggle-feedback').addEventListener('change', e => {
    state.settings.feedback = e.target.checked;
    saveSettings();
  });
  $('toggle-timer').addEventListener('change', e => {
    state.settings.timerEnabled = e.target.checked;
    $('timer-row').style.display = e.target.checked ? 'flex' : 'none';
    saveSettings();
  });
  $('timer-duration').addEventListener('input', e => {
    state.settings.timerDuration = parseInt(e.target.value);
    $('timer-duration-display').textContent = e.target.value + 's';
    saveSettings();
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Start quiz
// ─────────────────────────────────────────────────────────────────────────────
function startQuiz() {
  const pool = getQuestionPool();
  if (pool.length === 0) {
    alert('Please select at least one chapter to begin.');
    return;
  }

  state.questions      = pool;
  state.current        = 0;
  state.score          = 0;
  state.answerMap      = {};
  state.answers        = [];
  state.selectedOption = null;
  state.answered       = false;
  state.quizStarted    = true;

  showScreen('quiz-screen');
  renderQuestion();
}

// ─────────────────────────────────────────────────────────────────────────────
// Render question
// ─────────────────────────────────────────────────────────────────────────────
function renderQuestion() {
  const q    = state.questions[state.current];
  const total = state.questions.length;
  const pct  = (state.current / total) * 100;

  // Progress
  $('progress-bar').style.width = pct + '%';
  $('progress-text').textContent = `Question ${state.current + 1} of ${total}`;
  $('live-score').textContent    = `Score: ${state.score}`;

  // Chapter badge
  const cat = CATEGORIES.find(c => c.id === q.chapter);
  $('chapter-badge').textContent = cat ? cat.label : `Chapter ${q.chapter}`;

  // Question text (preserve newlines for Roman numeral lists)
  $('question-text').innerHTML = q.question.replace(/\n/g, '<br>');

  // Options
  const container = $('options-container');
  container.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className  = 'option-btn';
    btn.dataset.index = i;
    btn.innerHTML  = `<span class="option-label">${labels[i]}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener('click', () => selectOption(i));
    container.appendChild(btn);
  });

  // Restore state if this question was already answered
  const existingAnswer = state.answerMap[state.current];
  if (existingAnswer !== undefined) {
    // Show in read-only answered state
    state.selectedOption = existingAnswer.selected;
    state.answered       = true;
    stopTimer();
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct)                                      btn.classList.add('correct');
      if (i === existingAnswer.selected && !existingAnswer.isRight) btn.classList.add('wrong');
      if (i === existingAnswer.selected)                        btn.classList.add('selected');
    });
    $('btn-next').disabled = false;
  } else {
    // Fresh unanswered question
    state.selectedOption = null;
    state.answered       = false;
    $('btn-next').disabled = true;
    resetTimer();
    if (state.settings.timerEnabled) startTimer();
  }

  // Next / Finish label
  $('btn-next').textContent = (state.current === total - 1) ? 'Finish Quiz' : 'Next Question →';

  // Prev button — enabled once past Q1
  $('btn-prev').disabled = (state.current === 0);

  // Animate in
  $('question-card').classList.remove('slide-in');
  void $('question-card').offsetWidth; // reflow
  $('question-card').classList.add('slide-in');
}

// ─────────────────────────────────────────────────────────────────────────────
// Select option
// ─────────────────────────────────────────────────────────────────────────────
function selectOption(index) {
  if (state.answered) return; // locked after submission

  state.selectedOption = index;
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  document.querySelectorAll('.option-btn')[index].classList.add('selected');
  $('btn-next').disabled = false;

  // If feedback is ON, reveal answer immediately on selection
  if (state.settings.feedback) {
    submitAnswer();
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Submit / reveal answer
// ─────────────────────────────────────────────────────────────────────────────
function submitAnswer() {
  if (state.answered) return;
  state.answered = true;

  const q       = state.questions[state.current];
  const chosen  = state.selectedOption;
  const isRight = chosen === q.correct;

  if (isRight) state.score++;

  // Record answer keyed by question index (enables back-navigation)
  state.answerMap[state.current] = {
    questionId: q.id,
    chapter:    q.chapter,
    selected:   chosen,
    correct:    q.correct,
    isRight,
    timeLeft:   state.timeLeft
  };

  // Highlight options
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct)      btn.classList.add('correct');
    if (i === chosen && !isRight) btn.classList.add('wrong');
  });

  // Update live score
  $('live-score').textContent = `Score: ${state.score}`;

  stopTimer();
  $('btn-next').disabled = false;
}

// ─────────────────────────────────────────────────────────────────────────────
// Next question / finish
// ─────────────────────────────────────────────────────────────────────────────
function nextQuestion() {
  // Already answered (fresh submit or revisiting a previous question) → just move forward
  if (state.answered) {
    advance();
    return;
  }
  // Unanswered — need to submit first
  if (state.selectedOption === null) return;
  submitAnswer();
  if (state.settings.feedback) {
    // Feedback was shown instantly on selection; advance immediately
    advance();
  } else {
    // Brief pause so user sees the correct/wrong highlight before moving on
    setTimeout(advance, 600);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Previous question
// ─────────────────────────────────────────────────────────────────────────────
function prevQuestion() {
  if (state.current === 0) return;
  stopTimer();
  state.current--;
  renderQuestion();
}

// ─────────────────────────────────────────────────────────────────────────────
// Exit quiz → return to home
// ─────────────────────────────────────────────────────────────────────────────
function exitQuiz() {
  if (confirm('Exit quiz? Your current progress will be lost.')) {
    stopTimer();
    showScreen('start-screen');
    renderHighScore();
  }
}

function advance() {
  state.current++;
  if (state.current >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Timer
// ─────────────────────────────────────────────────────────────────────────────
function resetTimer() {
  stopTimer();
  state.timeLeft = state.settings.timerDuration;
  updateTimerUI();
}

function startTimer() {
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      stopTimer();
      // Auto-submit as wrong (no answer selected)
      if (!state.answered) {
        if (state.selectedOption === null) {
          // Force submit with -1 (timeout) → mark as wrong
          state.selectedOption = -1;
        }
        submitAnswer();
        // Mark all options to show correct answer
        const q = state.questions[state.current];
        document.querySelectorAll('.option-btn').forEach((btn, i) => {
          if (i === q.correct) btn.classList.add('correct');
        });
        $('timer-display').classList.add('timeout');
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
}

function updateTimerUI() {
  const el   = $('timer-display');
  const pct  = (state.timeLeft / state.settings.timerDuration) * 100;

  el.textContent = state.timeLeft;
  el.className   = 'timer-display';
  if (!state.settings.timerEnabled) { hide(el.parentElement); return; }
  show(el.parentElement);

  if (state.timeLeft <= 5)       el.classList.add('danger');
  else if (state.timeLeft <= 10) el.classList.add('warning');

  // SVG circle
  const circle = document.querySelector('.timer-circle .progress-ring');
  if (circle) {
    const r    = 28;
    const circ = 2 * Math.PI * r;
    circle.style.strokeDasharray  = circ;
    circle.style.strokeDashoffset = circ * (1 - pct / 100);
    circle.style.stroke = state.timeLeft <= 5 ? '#ef4444' :
                          state.timeLeft <= 10 ? '#f59e0b' : '#3b82f6';
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Results screen
// ─────────────────────────────────────────────────────────────────────────────
function showResults() {
  stopTimer();
  showScreen('results-screen');

  // Build ordered answers array from answerMap for review screen
  state.answers = Object.entries(state.answerMap)
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .map(([, v]) => v);

  const total   = state.questions.length;
  const correct = Object.values(state.answerMap).filter(a => a.isRight).length;
  const wrong   = Object.keys(state.answerMap).length - correct;
  const pct     = Math.round((correct / total) * 100);
  const passed  = pct >= PASS_THRESHOLD * 100;

  // Score ring animation
  animateScoreRing(pct);
  $('result-percentage').textContent = pct + '%';
  $('result-score-text').textContent = `${correct} / ${total}`;
  $('result-correct').textContent    = correct;
  $('result-wrong').textContent      = wrong;
  $('result-total').textContent      = total;

  // Pass/fail badge
  const badge = $('pass-fail-badge');
  badge.textContent  = passed ? '✓ PASS' : '✗ FAIL';
  badge.className    = 'pass-fail-badge ' + (passed ? 'pass' : 'fail');

  // High score
  updateHighScore(pct);
  renderHighScore();

  // Category breakdown
  renderCategoryBreakdown();

  // Review / restart buttons (re-attach each time results screen is shown)
  const btnReview  = $('btn-review');
  const btnRestart = $('btn-restart');
  btnReview._handler  && btnReview.removeEventListener('click',  btnReview._handler);
  btnRestart._handler && btnRestart.removeEventListener('click', btnRestart._handler);
  btnReview._handler  = () => showReview();
  btnRestart._handler = () => { showScreen('start-screen'); renderHighScore(); };
  btnReview.addEventListener('click',  btnReview._handler);
  btnRestart.addEventListener('click', btnRestart._handler);
}

function animateScoreRing(pct) {
  const circle = document.querySelector('.results-ring .score-arc');
  if (!circle) return;
  const r    = 70;
  const circ = 2 * Math.PI * r;
  circle.style.strokeDasharray  = circ;
  circle.style.strokeDashoffset = circ; // start empty

  // Animate after a tick
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      circle.style.transition       = 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)';
      circle.style.strokeDashoffset = circ * (1 - pct / 100);
      circle.style.stroke = pct >= 75 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Category breakdown table
// ─────────────────────────────────────────────────────────────────────────────
function renderCategoryBreakdown() {
  const tbody = $('breakdown-body');
  tbody.innerHTML = '';

  // Gather stats per chapter from answerMap
  const chapterMap = {};
  Object.values(state.answerMap).forEach(a => {
    if (!chapterMap[a.chapter]) chapterMap[a.chapter] = { correct: 0, total: 0 };
    chapterMap[a.chapter].total++;
    if (a.isRight) chapterMap[a.chapter].correct++;
  });

  const chapters = Object.keys(chapterMap).sort((a, b) => a - b);
  if (chapters.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--muted)">No data</td></tr>';
    return;
  }

  chapters.forEach(ch => {
    const cat   = CATEGORIES.find(c => c.id === parseInt(ch));
    const data  = chapterMap[ch];
    const pct   = Math.round((data.correct / data.total) * 100);
    const color = pct >= 75 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cat-name">${cat ? cat.label : 'Ch. ' + ch}</td>
      <td>${data.correct} / ${data.total}</td>
      <td style="color:${color};font-weight:600">${pct}%</td>
      <td>
        <div class="mini-bar">
          <div class="mini-fill" style="width:${pct}%;background:${color}"></div>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// High score
// ─────────────────────────────────────────────────────────────────────────────
function updateHighScore(pct) {
  const prev = parseInt(localStorage.getItem(HIGH_SCORE_KEY) || '0');
  if (pct > prev) localStorage.setItem(HIGH_SCORE_KEY, pct);
}

function renderHighScore() {
  const hs  = parseInt(localStorage.getItem(HIGH_SCORE_KEY) || '0');
  const els = document.querySelectorAll('.high-score-value');
  els.forEach(el => el.textContent = hs + '%');
}

// ─────────────────────────────────────────────────────────────────────────────
// Review mode (see all answers)
// ─────────────────────────────────────────────────────────────────────────────
function showReview() {
  showScreen('review-screen');
  state.reviewIndex = 0;
  renderReview();

  // Use onclick to avoid stacking duplicate listeners on re-entry
  $('btn-review-prev').onclick = () => {
    if (state.reviewIndex > 0) { state.reviewIndex--; renderReview(); }
  };
  $('btn-review-next').onclick = () => {
    if (state.reviewIndex < state.answers.length - 1) { state.reviewIndex++; renderReview(); }
  };
  $('btn-review-back').onclick = () => showScreen('results-screen');
}

function renderReview() {
  const ans    = state.answers[state.reviewIndex];
  const q      = quizData.find(item => item.id === ans.questionId);
  const total  = state.answers.length;
  const labels = ['A', 'B', 'C', 'D'];
  const cat    = CATEGORIES.find(c => c.id === q.chapter);

  $('review-progress').textContent    = `${state.reviewIndex + 1} / ${total}`;
  $('review-chapter-badge').textContent = cat ? cat.label : `Chapter ${q.chapter}`;
  $('review-status').textContent     = ans.isRight ? '✓ Correct' : '✗ Incorrect';
  $('review-status').className       = 'review-status ' + (ans.isRight ? 'correct' : 'wrong');
  $('review-question').innerHTML     = q.question.replace(/\n/g, '<br>');

  const container = $('review-options');
  container.innerHTML = '';
  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'review-option';
    if (i === q.correct)           div.classList.add('correct');
    if (i === ans.selected && !ans.isRight) div.classList.add('wrong');
    if (i === ans.selected && ans.isRight)  div.classList.add('correct');
    div.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt}</span>`;
    container.appendChild(div);
  });

  $('btn-review-prev').disabled = state.reviewIndex === 0;
  $('btn-review-next').disabled = state.reviewIndex === total - 1;

  // Animate
  $('review-card').classList.remove('slide-in');
  void $('review-card').offsetWidth;
  $('review-card').classList.add('slide-in');
}

// ─────────────────────────────────────────────────────────────────────────────
// Screen switching
// ─────────────────────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

// ─────────────────────────────────────────────────────────────────────────────
// Wire up quiz screen button (must happen after DOM loaded)
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  $('btn-next').addEventListener('click', nextQuestion);
  $('btn-prev').addEventListener('click', prevQuestion);
  $('btn-exit').addEventListener('click', exitQuiz);

  // Keyboard support
  document.addEventListener('keydown', e => {
    const screenActive = document.querySelector('.screen.active');
    if (!screenActive) return;

    if (screenActive.id === 'quiz-screen') {
      if (['1','2','3','4'].includes(e.key)) selectOption(parseInt(e.key) - 1);
      if (['a','b','c','d'].includes(e.key.toLowerCase())) {
        selectOption(['a','b','c','d'].indexOf(e.key.toLowerCase()));
      }
      if ((e.key === 'Enter' || e.key === 'ArrowRight') && !$('btn-next').disabled) {
        nextQuestion();
      }
      if ((e.key === 'Backspace' || e.key === 'ArrowLeft') && !$('btn-prev').disabled) {
        prevQuestion();
      }
    }
    if (screenActive.id === 'review-screen') {
      if (e.key === 'ArrowLeft')  $('btn-review-prev').click();
      if (e.key === 'ArrowRight') $('btn-review-next').click();
    }
  });

  init();
});
