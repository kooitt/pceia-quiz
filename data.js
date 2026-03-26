// =============================================================================
// QUIZ DATA — PCEIA (87 Q) + CEILLI (82 Q) = 169 Questions
// Correct answer index: 0=A, 1=B, 2=C, 3=D
// =============================================================================

const CATEGORIES = [
  // ── PCEIA ──────────────────────────────────────────────────────────────────
  { id: 1,  source: 'pceia', label: "Ch.1 · Perspectives on Insurance & Risk Management" },
  { id: 2,  source: 'pceia', label: "Ch.2 · Fundamental Principles of Insurance" },
  { id: 3,  source: 'pceia', label: "Ch.3 · Legislation and Consumer Protection" },
  { id: 4,  source: 'pceia', label: "Ch.4 · The Insurance Contract" },
  { id: 5,  source: 'pceia', label: "Ch.5 · Law of Agency" },
  { id: 6,  source: 'pceia', label: "Ch.6 · Medical & Health Insurance / Takaful (MHIT)" },
  { id: 11, source: 'pceia', label: "Ch.11 · Legal Provisions — Life Insurance Policies" },
  { id: 12, source: 'pceia', label: "Ch.12 · Life Insurance Products" },
  { id: 13, source: 'pceia', label: "Ch.13 · Life Insurance Premium Rating" },
  { id: 14, source: 'pceia', label: "Ch.14 · Life Insurance Underwriting and Documents" },
  { id: 15, source: 'pceia', label: "Ch.15 · Life Insurance Claims" },
  { id: 16, source: 'pceia', label: "Ch.16 · Code of Practice for Life Insurance Agents" },
  // ── CEILLI ─────────────────────────────────────────────────────────────────
  { id: 101, source: 'ceilli', label: "CEILLI Ch.1 · Introduction to Investment-Linked Insurance" },
  { id: 102, source: 'ceilli', label: "CEILLI Ch.2 · Mechanisms & Features of Regular Premium ILP" },
  { id: 103, source: 'ceilli', label: "CEILLI Ch.3 · Disclosure Requirement" },
  { id: 104, source: 'ceilli', label: "CEILLI Ch.4 · Mechanisms & Features of Single Premium ILP" },
  { id: 105, source: 'ceilli', label: "CEILLI Ch.5 · Considerations for Purchasing ILP" },
  { id: 106, source: 'ceilli', label: "CEILLI Ch.6 · Investment Considerations" },
  { id: 107, source: 'ceilli', label: "CEILLI Ch.7 · Investment Vehicles & Potential Risks" },
  { id: 108, source: 'ceilli', label: "CEILLI Ch.8 · Common Types of ILFs & Fund Management" },
  { id: 109, source: 'ceilli', label: "CEILLI Ch.9 · Pertinent Guidelines on ILP Business" },
];

const quizData = [

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 1 — Perspectives on Insurance & Risk Management
  // Answers: 1-a, 2-c, 3-b, 4-c, 5-d
  // ═══════════════════════════════════════════════════════════════
  {
    id: 1, chapter: 1,
    question: "What is the correct definition of a pure risk?",
    options: [
      "A risk where there is only the possibility of a loss outcome.",
      "A risk that only affects individuals as opposed to society as a whole.",
      "A risk that cannot be measured in financial terms.",
      "A risk where there is a possibility of financial gain."
    ],
    correct: 0
  },
  {
    id: 2, chapter: 1,
    question: "Which of the following is NOT a characteristic of an insurable risk?",
    options: [
      "It should not be against public policy.",
      "It must be fortuitous or accidental in nature.",
      "It must be a speculative risk.",
      "Homogenous exposures with the same expectation of loss."
    ],
    correct: 2
  },
  {
    id: 3, chapter: 1,
    question: "What risk method involves shifting financial responsibility for potential losses to another party, such as an insurance company?",
    options: [
      "Avoiding the risk.",
      "Transferring the risk.",
      "Retaining the risk.",
      "Controlling the risk."
    ],
    correct: 1
  },
  {
    id: 4, chapter: 1,
    question: "For insurance purposes, fire damage is classified as",
    options: [
      "A speculative risk.",
      "A fundamental risk.",
      "A pure risk.",
      "A physical hazard."
    ],
    correct: 2
  },
  {
    id: 5, chapter: 1,
    question: "Which of the following descriptions is INCORRECT?",
    options: [
      "Peril is the prime cause of a loss.",
      "Hazard will increase the likelihood of a loss.",
      "Uncertainty regarding loss is often termed as risk.",
      "Moral hazard is identified by the physical characteristics of the risk."
    ],
    correct: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 2 — Fundamental Principles of Insurance
  // Answers: 1-a, 2-b, 3-c, 4-c, 5-a, 6-b, 7-d, 8-a, 9-d, 10-d
  // ═══════════════════════════════════════════════════════════════
  {
    id: 6, chapter: 2,
    question: "The proximate cause of a loss is always",
    options: [
      "the dominant cause.",
      "the cause nearest the loss in time.",
      "the cause nearest the loss in distance.",
      "an insured peril."
    ],
    correct: 0
  },
  {
    id: 7, chapter: 2,
    question: "What is the purpose of inserting a subrogation clause in an insurance policy?",
    options: [
      "To give insurers the right to recover losses from a responsible third party after paying the claim.",
      "To allow insurers to initiate recovery proceedings before compensating the insured.",
      "To enable insurers to recover losses in their own name.",
      "To prevent the insured from being compensated twice for the same loss."
    ],
    correct: 1
  },
  {
    id: 8, chapter: 2,
    question: "Which insurance principle ensures insurers share a loss proportionally when multiple policies cover the same risk?",
    options: [
      "Proximate cause.",
      "Subrogation.",
      "Contribution.",
      "Insurable interest."
    ],
    correct: 2
  },
  {
    id: 9, chapter: 2,
    question: "How is indemnity commonly measured under property insurance policies?",
    options: [
      "According to a formula.",
      "On agreed value basis.",
      "On a reinstatement basis.",
      "On a first loss basis."
    ],
    correct: 2
  },
  {
    id: 10, chapter: 2,
    question: "For a life insurance policy to be valid, when must insurable interest exist?",
    options: [
      "At the inception of the policy only.",
      "At the time of a claim.",
      "At the inception of the policy and at the time of a claim.",
      "At the inception of the policy or at the time of a claim."
    ],
    correct: 0
  },
  {
    id: 11, chapter: 2,
    question: "How does Schedule 9 of the FSA 2013 define a \"consumer insurance contract\"?",
    options: [
      "A contract for life and general insurance purposes.",
      "A contract for personal purposes, unrelated to trade, business, or profession.",
      "A contract entered into by a homeowner for their property.",
      "Insurance policies purchased by individuals for any purpose."
    ],
    correct: 1
  },
  {
    id: 12, chapter: 2,
    question: "What distinguishes an uninsured peril from an excluded peril?",
    options: [
      "An uninsured peril is not covered because it is excluded from the policy.",
      "An uninsured peril is always less risky than an excluded peril.",
      "An excluded peril cannot be covered by any policies at all, while an uninsured peril can be covered under different policies.",
      "An excluded peril cannot be covered, while an uninsured peril can be added by paying an additional premium."
    ],
    correct: 3
  },
  {
    id: 13, chapter: 2,
    question: "When does the right of an insurer to repudiate liability arise in the event that a prospective policy owner failed to disclose relevant information that would affect the decision to accept or reject the risk?",
    options: [
      "At pre-contractual stage.",
      "During the currency of the policy.",
      "At the time of a claim.",
      "When material misrepresentation is discovered."
    ],
    correct: 0
  },
  {
    id: 14, chapter: 2,
    question: "Which remedy is NOT available to the insurer in the event of a fraudulent breach of good faith by the insured?",
    options: [
      "Avoid the policy as a whole.",
      "Avoid the policy and keep the premium.",
      "Ignore the breach and allow the policy to stand.",
      "Refuse a particular claim but allow the policy to stand."
    ],
    correct: 3
  },
  {
    id: 15, chapter: 2,
    question: "Which one of the following has NO insurable interest in the life of another?",
    options: [
      "A child on a parent's life.",
      "An employer on an employee's life.",
      "A dependent on their caregiver's life.",
      "A landlord on a tenant's life."
    ],
    correct: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 3 — Legislation and Consumer Protection
  // Answers: 1-a, 2-b, 3-c, 4-a, 5-c, 6-b
  // ═══════════════════════════════════════════════════════════════
  {
    id: 16, chapter: 3,
    question: "Which of the following is NOT a function of Bank Negara Malaysia?",
    options: [
      "Enhance professional standards and business conduct of the agency force.",
      "Foster fair, responsible and professional business conduct of insurance companies.",
      "Strive to protect the rights and interests of financial consumers.",
      "Keep a close watch on solvency and market conduct of the insurance industry."
    ],
    correct: 0
  },
  {
    id: 17, chapter: 3,
    question: "Which new legislation replaced the Insurance Act of 1996?",
    options: [
      "Islamic Financial Services Act 2013.",
      "Financial Services Act 2013.",
      "Insurance Act 2013.",
      "Financial Services Authority 2013."
    ],
    correct: 1
  },
  {
    id: 18, chapter: 3,
    question: "The Consumer Education Programme (CEP) is designed to enhance financial literacy. Which are the key objectives?\n\nI. Enable consumers to make well-informed decisions when purchasing insurance.\nII. Assist consumers to select products that best meet their needs.\nIII. Understand their rights and responsibilities as consumers.\nIV. Maximise profit and returns from buying insurance products.",
    options: [
      "I and II",
      "I and III",
      "I, II and III",
      "II, III and IV"
    ],
    correct: 2
  },
  {
    id: 19, chapter: 3,
    question: "Which of these is an Alternative Dispute Resolution channel for financial consumers?",
    options: [
      "Ombudsman for Financial Services (OFS)",
      "Complaints unit of an insurance company",
      "Malaysia Competition Commission (MyCC)",
      "Companies Commission of Malaysia (CCM)"
    ],
    correct: 0
  },
  {
    id: 20, chapter: 3,
    question: "On whom is Customer Due Diligence to be conducted as required by the AML/CFT/CPF/TFS guidelines?",
    options: [
      "Insurance intermediary or agent",
      "Financial adviser",
      "Customer or beneficial owner",
      "Financial service provider"
    ],
    correct: 2
  },
  {
    id: 21, chapter: 3,
    question: "Which of the following is NOT considered 'personal data' by the Personal Data Protection Act 2010?",
    options: [
      "Any personal information in respect of commercial transactions.",
      "Personal information posted on social media.",
      "Sensitive personal data e.g., physical or mental health, political opinions, religious beliefs.",
      "Expression of opinion about the data subject."
    ],
    correct: 1
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 4 — The Insurance Contract
  // Answers: 1-d, 2-b, 3-d, 4-b, 5-b, 6-c, 7-d, 8-b, 9-b, 10-c
  // ═══════════════════════════════════════════════════════════════
  {
    id: 22, chapter: 4,
    question: "What are the essentials for the formation of a valid contract?\n\ni. There must be an agreement by offer and acceptance.\nii. There must be an intention to create legal relationships.\niii. The parties must have capacity to contract.\niv. The agreement must be in the form required by law.\nv. There must be consideration.",
    options: [
      "i, ii, iii and iv",
      "ii, iii, iv and v",
      "i and iii",
      "i, ii, iii, iv and v"
    ],
    correct: 3
  },
  {
    id: 23, chapter: 4,
    question: "What is the operative clause of an insurance policy?",
    options: [
      "The clause that describes what the insured must do in the event of a claim.",
      "The clause that describes or refers to the cover provided by the insurers.",
      "The clause that describes the risks excluded from the policy cover.",
      "The operating clause that refers to the proposal, the parties and the premium."
    ],
    correct: 1
  },
  {
    id: 24, chapter: 4,
    question: "Which of the following does NOT make an insurance contract void?",
    options: [
      "No insurable interest at the time of effecting the policy.",
      "No consensus or a fundamental mistake or disagreement from the start.",
      "Fraudulent misrepresentation or concealment at the pre-contractual stage.",
      "Innocent misrepresentation at the time of filling up the proposal form."
    ],
    correct: 3
  },
  {
    id: 25, chapter: 4,
    question: "A key characteristic for a contract to be considered legally binding is:",
    options: [
      "Freedom to contract by all parties.",
      "Intention to create a legal relationship.",
      "Mutual agreement arising out of goodwill.",
      "Seal and stamp on the written document."
    ],
    correct: 1
  },
  {
    id: 26, chapter: 4,
    question: "The 'Operative Clause' of an insurance policy describes the:",
    options: [
      "Insured's particulars.",
      "Scope of cover.",
      "Excluded perils.",
      "Policy conditions."
    ],
    correct: 1
  },
  {
    id: 27, chapter: 4,
    question: "What is a voidable contract?",
    options: [
      "A breach of contract by one or both parties.",
      "A fundamental mistake rendering the contract void.",
      "A contract which is binding but either party has the right to set it aside.",
      "One party's legal incapacity to enter a contract."
    ],
    correct: 2
  },
  {
    id: 28, chapter: 4,
    question: "Which of the following is NOT normally found in the Schedule of a policy?",
    options: [
      "Name and address of the insured.",
      "Period of insurance.",
      "Amount of premium.",
      "Exclusions."
    ],
    correct: 3
  },
  {
    id: 29, chapter: 4,
    question: "Which of the following best describes an unenforceable contract?",
    options: [
      "Legally binding even if one party refuses to keep to the agreement.",
      "A valid contract but cannot be enforced in a court.",
      "A valid contract which is not illegal.",
      "A legal contract which is not binding."
    ],
    correct: 1
  },
  {
    id: 30, chapter: 4,
    question: "What is meant by \"consideration\" in relation to an insurance contract?",
    options: [
      "Cover note in return for proposal for insurance.",
      "Premium payable in return for cover provided.",
      "Payment of claim in return for premium paid.",
      "A promise to pay the sum assured."
    ],
    correct: 1
  },
  {
    id: 31, chapter: 4,
    question: "Which rule of law governs contracts in Malaysia?",
    options: [
      "Sale of Goods Act 1965.",
      "Financial Services Act 2013.",
      "Contracts Act 1950.",
      "Insurance Act 1996."
    ],
    correct: 2
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 5 — Law of Agency
  // Answers: 1-c, 2-d, 3-c, 4-d, 5-c, 6-d
  // ═══════════════════════════════════════════════════════════════
  {
    id: 32, chapter: 5,
    question: "Which of the following is NOT true about the role of an insurance agent?",
    options: [
      "Responsible for the sales of insurance products and services.",
      "Considered to be the agent of the insurer and bound to the insurer he represents.",
      "Represents many insurers and shops for an insured.",
      "Assists the insured in submitting covered claims for payment."
    ],
    correct: 2
  },
  {
    id: 33, chapter: 5,
    question: "Under which circumstances can the agency be terminated?\n\nI. By completion of the transaction where authority was given for that transaction only.\nII. By expiration of the period stipulated in the contract of agency.\nIII. By mutual agreement.\nIV. By death, lunacy or bankruptcy of the principal or the agent.\nV. By operation of any law which renders the contract of an agent illegal.",
    options: [
      "I, II and III.",
      "II, IV and V.",
      "II, III and IV.",
      "All the above."
    ],
    correct: 3
  },
  {
    id: 34, chapter: 5,
    question: "Under what circumstances, if any, can an agent delegate a task to someone else?",
    options: [
      "Under no circumstances. An agent must always perform his duties and tasks personally.",
      "Where the agent has the status of a del credere agent.",
      "Where the work delegated is purely clerical.",
      "Where the sub-agent has himself acted as an agent for the principal in a previous transaction."
    ],
    correct: 2
  },
  {
    id: 35, chapter: 5,
    question: "How is the relationship between an insurer and an agent created in Malaysia?\n\nI. By agreement or consent\nII. By ratification\nIII. By necessity",
    options: [
      "I only.",
      "I and II.",
      "II and III.",
      "All of the above."
    ],
    correct: 3
  },
  {
    id: 36, chapter: 5,
    question: "Which of the following statements describes an agent's right to indemnity?",
    options: [
      "If an agent does what is asked of him under the agreement, he has the right to be paid for his services.",
      "If an agent arranges an insurance contract on behalf of his principal, both agent and principal are entitled to indemnity under the contract.",
      "If an agent expends money in the course of his duties, he is entitled to be reimbursed by his principal.",
      "If an agent commits the principal to expenditure under the contract, the agent is liable if the principal fails to pay."
    ],
    correct: 2
  },
  {
    id: 37, chapter: 5,
    question: "Which of the following are prohibited business conducts?\n\nI. Engaging in conduct that is misleading or deceptive.\nII. Exert undue pressure or coerce a financial consumer to buy a product.\nIII. Disclose confidential information obtained in the course of his duties as an agent to parties other than his principal.\nIV. Demand payments from a financial consumer for unsolicited financial services or products.",
    options: [
      "I and II.",
      "I, II and IV.",
      "III and IV.",
      "All of the above."
    ],
    correct: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 6 — Medical & Health Insurance / Takaful Products (MHIT)
  // Answers: 1-a, 2-d, 3-b, 4-c, 5-a, 6-a
  // ═══════════════════════════════════════════════════════════════
  {
    id: 38, chapter: 6,
    question: "Which of the following events does NOT automatically terminate a medical and health insurance policy?",
    options: [
      "Exhaustion of the annual limit or lifetime limit stipulated in the policy.",
      "The anniversary date following the insured's maximum eligibility age.",
      "Breach of a policy condition.",
      "The death of an insured person."
    ],
    correct: 0
  },
  {
    id: 39, chapter: 6,
    question: "What are the various methods used by insurers to contain medical claims cost and inflated claims?\n\nI. Inner limits.\nII. Schedule of surgical procedures.\nIII. Maximum period of compensation.\nIV. Time frame.\nV. Deductible or Cost-Sharing option.",
    options: [
      "I and II.",
      "II, III and IV.",
      "I, II, III and IV.",
      "I, II, III, IV and V."
    ],
    correct: 3
  },
  {
    id: 40, chapter: 6,
    question: "What benefits are payable under a hospital income insurance policy?",
    options: [
      "Income stream to replace a portion of the pre-disability income if insured is not able to work due to illness.",
      "Fixed allowance on a daily basis due to hospitalisation caused by illness or injury.",
      "Reimbursement of medical expenses due to hospitalisation caused by illness or injury.",
      "Lump sum payment of sum insured upon diagnosis of any Advanced Stage Dread diseases."
    ],
    correct: 1
  },
  {
    id: 41, chapter: 6,
    question: "What is the main purpose of the revised Guidelines on Medical and Health Insurance Business?",
    options: [
      "To increase premium rates on higher-risk individuals.",
      "To reduce escalating claim costs.",
      "To prescribe minimum standards to be observed by life and general insurers.",
      "To introduce new limitations on core benefits."
    ],
    correct: 2
  },
  {
    id: 42, chapter: 6,
    question: "Under which type of MHIT policy/takaful certificate is the renewability at the option of the licensed ITO?",
    options: [
      "Yearly Renewable MHIT Policy/Takaful Certificate.",
      "Guaranteed Yearly Renewable MHIT Policy/Takaful Certificate.",
      "Non-renewable MHIT Policy/Takaful Certificate.",
      "Fixed-term MHIT Policy/Takaful Certificate."
    ],
    correct: 0
  },
  {
    id: 43, chapter: 6,
    question: "What factors are considered when determining the group premium for Medical & Health Insurance?",
    options: [
      "Who will be covered, age profile, scale of cover, method of payment.",
      "The group's claims experience, method of payment, occupation of the members.",
      "Who will be covered, scale of cover, group's past claims experience.",
      "Age profile, group's past claims experience, method of payment."
    ],
    correct: 0
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 11 — Legal Provisions Relating to Life Insurance Policies
  // Answers: 1-a, 2-b, 3-d, 4-b, 5-b, 6-b
  // ═══════════════════════════════════════════════════════════════
  {
    id: 44, chapter: 11,
    question: "When does a life insurance policy acquire a surrender value?",
    options: [
      "Any time after policy inception",
      "After three years of premium payment",
      "On the third anniversary of premium due date",
      "Two years after policy inception"
    ],
    correct: 0
  },
  {
    id: 45, chapter: 11,
    question: "When does a minor possess the capacity to insure?\n\nI. A minor who has attained the age of ten years on his own life\nII. A minor who has attained the age of ten years on the life of another in which he has insurable interest with the consent of his parent or guardian\nIII. A minor who has attained the age of sixteen years on his own life\nIV. A minor who has attained the age of sixteen years on the life of another in which he has insurable interest",
    options: [
      "II, III and IV",
      "I, II, III and IV",
      "II and IV",
      "I and II"
    ],
    correct: 1
  },
  {
    id: 46, chapter: 11,
    question: "Which of the following statements is NOT true about insurable interest in life insurance?",
    options: [
      "A person has insurable interest in his own life to an unlimited extent.",
      "A life policy shall be void unless the person has insurable interest in that life insured.",
      "Insurable interest must exist at the inception of the life policy.",
      "Insurable interest means payment of moneys on the person's death or survival."
    ],
    correct: 3
  },
  {
    id: 47, chapter: 11,
    question: "When an agent invites any person to make an offer or proposal to enter into a contract of insurance, the agent should disclose:\n\nI. the name of the licensed insurer.\nII. his relationship with the insurer.\nIII. the premium charged by the licensed insurer.\nIV. the benefit of taking up the offer with him.",
    options: [
      "I, II, III and IV",
      "I, II and III",
      "II and IV",
      "I and II"
    ],
    correct: 1
  },
  {
    id: 48, chapter: 11,
    question: "A person is said to have insurable interest in relation to another person who is:\n\nI. his spouse.\nII. his child or ward being under the age of majority at the time the insurance is effected.\nIII. his employee.\nIV. a person on whom he is wholly or partly dependent for maintenance or education.\nV. his debtor to the amount of outstanding debt.",
    options: [
      "I, II and III",
      "I, II, III, IV and V",
      "I and II",
      "I, II, III and IV"
    ],
    correct: 1
  },
  {
    id: 49, chapter: 11,
    question: "What is the meaning of 'non-contestability' in a life insurance contract?",
    options: [
      "A life insurer is not allowed to contest the validity of the contract on the grounds of fraud.",
      "A life insurer is not allowed to contest the validity of the contract for misrepresentation after the policy has been in force for more than 2 years.",
      "A life insured is not allowed to contest the decision of the life insurer not to accept his proposal.",
      "A life insurer is not allowed to void the contract when false statements were made by the insured."
    ],
    correct: 1
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 12 — Life Insurance Products
  // Answers: 1-c, 2-d, 3-c, 4-d, 5-a, 6-c, 7-c, 8-a, 9-c, 10-d
  // ═══════════════════════════════════════════════════════════════
  {
    id: 50, chapter: 12,
    question: "The major objective of buying life insurance is",
    options: [
      "to supplement retirement income.",
      "to reduce the financial burden of the insured.",
      "to protect the dependents in the case of premature death of the breadwinner.",
      "to maximise savings."
    ],
    correct: 2
  },
  {
    id: 51, chapter: 12,
    question: "A retirement annuity is particularly attractive to someone who has",
    options: [
      "a large family.",
      "a severe illness.",
      "low longevity risk.",
      "high longevity risk."
    ],
    correct: 3
  },
  {
    id: 52, chapter: 12,
    question: "Which of the following policies has no savings element in it?",
    options: [
      "Whole life",
      "Endowment",
      "Term",
      "None of the above"
    ],
    correct: 2
  },
  {
    id: 53, chapter: 12,
    question: "A whole life policy differs from a term policy in that",
    options: [
      "premium on a whole life policy increases each year.",
      "no premiums are required when the insured turns 65.",
      "the rate on a whole life policy is always lower than that charged on a term policy.",
      "a whole life policy accumulates cash value, whereas a term policy does not."
    ],
    correct: 3
  },
  {
    id: 54, chapter: 12,
    question: "When the assets of the life insurance fund exceed the liabilities, there is/are",
    options: [
      "a surplus.",
      "profits.",
      "cash dividends.",
      "a bonus."
    ],
    correct: 0
  },
  {
    id: 55, chapter: 12,
    question: "When must insurable interest exist for a life insurance contract?",
    options: [
      "At the time of claim",
      "At the time of surrender",
      "At inception of insurance",
      "At the time of changing the beneficiary"
    ],
    correct: 2
  },
  {
    id: 56, chapter: 12,
    question: "An option to convert a term to permanent insurance without proof of insurability but with premium adjustment is known as",
    options: [
      "guaranteed suitability option.",
      "guaranteed insurability option.",
      "guaranteed convertibility option.",
      "guaranteed permanent option."
    ],
    correct: 2
  },
  {
    id: 57, chapter: 12,
    question: "Which of the following is NOT true with regards to a whole life policy?",
    options: [
      "The sum assured of the policy will never be greater than the accumulated cash value.",
      "Towards the end of its period, more premium is allocated for cash value accumulation than the protection element.",
      "When the insured dies, the beneficiary will receive the sum assured and any accumulated cash value.",
      "A whole life policy may be thought of as a forced method of saving."
    ],
    correct: 0
  },
  {
    id: 58, chapter: 12,
    question: "What is the \"waiver of premium\" provision in a life insurance policy?",
    options: [
      "It waives the suicide clause.",
      "It allows the person to purchase additional insurance at no extra cost.",
      "It pays future premiums in the event of a permanent disability.",
      "It allows an insurance agent to pay premiums for the policyholder."
    ],
    correct: 2
  },
  {
    id: 59, chapter: 12,
    question: "Life insurance policyholders have a right to share in the divisible surplus of the insurer's life insurance fund only if",
    options: [
      "the company earns a specified amount of profit.",
      "the policy is issued by a takaful company.",
      "the policy is from specific life insurance companies.",
      "they own a participating policy."
    ],
    correct: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 13 — Life Insurance Premium Rating
  // Answers: 1-d, 2-b, 3-d, 4-c, 5-d, 6-d
  // ═══════════════════════════════════════════════════════════════
  {
    id: 60, chapter: 13,
    question: "Which of the following statements is NOT true concerning life insurance premiums?",
    options: [
      "Premium rating tables are designed in accordance with age and term of insurance.",
      "Net premium is pure risk premium for mortality plus an element of interest added to it.",
      "Gross premium is the net premium plus a loading for management expenses and profit.",
      "Participating life insurance policies will not be charged extra premium or loading."
    ],
    correct: 3
  },
  {
    id: 61, chapter: 13,
    question: "What is the method of charging a uniform premium throughout the duration of a life insurance policy despite the rate of death increasing with age?",
    options: [
      "Level payment system",
      "Level premium system",
      "Increasing premium system",
      "Decreasing term assurance"
    ],
    correct: 1
  },
  {
    id: 62, chapter: 13,
    question: "The expenses of running an insurance business can be categorised into three types EXCEPT",
    options: [
      "initial expenses.",
      "renewal expenses.",
      "termination expenses.",
      "procurement expenses."
    ],
    correct: 3
  },
  {
    id: 63, chapter: 13,
    question: "Which of the following is NOT a major factor influencing mortality?",
    options: [
      "Age",
      "Gender",
      "Ethnicity",
      "Occupation"
    ],
    correct: 2
  },
  {
    id: 64, chapter: 13,
    question: "What is the factor that does affect the cost of risk?\n\nI. Mortality table\nII. Interest and time value of money\nIII. Management Expenses\nIV. Agent's Commission",
    options: [
      "I and II",
      "I, II and III",
      "I, III and IV",
      "All of the above"
    ],
    correct: 3
  },
  {
    id: 65, chapter: 13,
    question: "What are the main factors which an actuary would use in pricing life insurance premiums?\n\nI. Mortality\nII. Morbidity\nIII. Investment returns\nIV. Management expenses",
    options: [
      "I, III and IV",
      "I, II and III",
      "I and II",
      "I, II, III and IV"
    ],
    correct: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 14 — Life Insurance Underwriting and Documents
  // Answers: 1-c, 2-d, 3-b, 4-c, 5-c, 6-d, 7-a, 8-d, 9-a, 10-b
  // ═══════════════════════════════════════════════════════════════
  {
    id: 66, chapter: 14,
    question: "An underwriter is best described as an insurance professional who does the following EXCEPT:",
    options: [
      "accepts or rejects risks.",
      "implements an insurer's strategic plan.",
      "invests the capital of an insurer's shareholders.",
      "decides on premium pricing."
    ],
    correct: 2
  },
  {
    id: 67, chapter: 14,
    question: "Which of the following method is NOT used by Insurers when dealing with adverse risk?",
    options: [
      "Charging an extra premium",
      "Recommending an alternative insurance plan",
      "Reducing the benefits",
      "Providing a premium discount"
    ],
    correct: 3
  },
  {
    id: 68, chapter: 14,
    question: "A sub-standard or below average risk is best described as",
    options: [
      "an acceptable risk on standard terms and premium rates.",
      "a risk with health or occupational hazards accepted on special terms.",
      "not acceptable on any account.",
      "an uninsurable risk, such as a person with terminal illness."
    ],
    correct: 1
  },
  {
    id: 69, chapter: 14,
    question: "Which of the following is NOT part of the underwriting process?",
    options: [
      "Establishing policy coverage terms and conditions",
      "Evaluating, assessing, and selecting of risks for insurance",
      "Establishing claim procedure and documentation",
      "Pricing of insurance to charge premium commensurate with risk"
    ],
    correct: 2
  },
  {
    id: 70, chapter: 14,
    question: "Which of the following underwriting factors is NOT associated with physical hazard?",
    options: [
      "Height and weight",
      "Family medical history",
      "Earning capacity",
      "Lifestyle"
    ],
    correct: 2
  },
  {
    id: 71, chapter: 14,
    question: "What is the purpose of financial underwriting in life insurance?",
    options: [
      "To evaluate the physical hazard of an applicant for life insurance",
      "To assess the moral hazard attached to a potential customer",
      "To select customers of sound financial status to pay premiums",
      "To ensure the purchaser has insurable interest in the life insured"
    ],
    correct: 3
  },
  {
    id: 72, chapter: 14,
    question: "Which of the following documents is a major source of information for underwriting life insurance?",
    options: [
      "Proposal form",
      "Financial report",
      "Agent's report",
      "Sales illustration"
    ],
    correct: 0
  },
  {
    id: 73, chapter: 14,
    question: "What is the role of the insurance agent in the underwriting process?",
    options: [
      "Assists the underwriter in calculating the premium payable",
      "Offers financial advice to potential customers",
      "Assists in filling up the proposal form for the customer",
      "Ensures all material facts are disclosed so that both customer and underwriter make an informed decision"
    ],
    correct: 3
  },
  {
    id: 74, chapter: 14,
    question: "When can a life insurer assume a risk for life insurance?",
    options: [
      "On receipt of the first premium after a letter of acceptance is issued",
      "On receipt of a completed proposal form",
      "After the underwriter has assessed the information in the proposal form",
      "After the policy is issued and/or delivered to the policy owner"
    ],
    correct: 0
  },
  {
    id: 75, chapter: 14,
    question: "What is meant by 'cooling-off' or 'free-look' period?",
    options: [
      "It allows a policyholder to cancel the life policy after 15 days of free cover.",
      "It allows a policyholder to return the life policy within 15 days for a full refund.",
      "It allows a policyholder to reject the life policy after 15 days of free cover.",
      "It allows a policyholder to cancel the life policy not later than 15 days after its delivery."
    ],
    correct: 1
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 15 — Life Insurance Claims
  // Answers: 1-b, 2-d, 3-d, 4-c, 5-d, 6-b
  // ═══════════════════════════════════════════════════════════════
  {
    id: 76, chapter: 15,
    question: "A life claim can arise under any of the following situations, EXCEPT:",
    options: [
      "death of the insured.",
      "death of the beneficiary.",
      "maturity of the life policy.",
      "critical illness."
    ],
    correct: 1
  },
  {
    id: 77, chapter: 15,
    question: "In the case of a missing person, what is the time lapse before a statutory presumption of death can be issued by a court?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "7 years"
    ],
    correct: 3
  },
  {
    id: 78, chapter: 15,
    question: "What are the supporting documents required for a death claim?\n\nI. Death certificate\nII. Post-mortem report\nIII. Statutory presumption of death (for missing persons)\nIV. Burial certificate",
    options: [
      "I and IV",
      "I, II and III",
      "I, II and IV",
      "I, II, III and IV"
    ],
    correct: 3
  },
  {
    id: 79, chapter: 15,
    question: "A death claim must be paid within ____ days of receipt of notification of the claim; otherwise, the law requires compound interest to be charged on the amount payable.",
    options: [
      "15 days",
      "30 days",
      "60 days",
      "7 days"
    ],
    correct: 2
  },
  {
    id: 80, chapter: 15,
    question: "What types of claims are handled in the insurance claims department?\n\nI. Death claim\nII. Total and permanent disability benefit\nIII. Critical illness\nIV. Personal accident rider",
    options: [
      "I and II only",
      "I, II and III",
      "II and IV",
      "All of the above"
    ],
    correct: 3
  },
  {
    id: 81, chapter: 15,
    question: "Before a maturity claim under endowment insurance is paid, the life insurer requires proof of the following EXCEPT",
    options: [
      "Proof of age of the life assured.",
      "Proof of death of the life assured.",
      "Identity of the person entitled to the policy monies.",
      "Proof of survival of the life assured."
    ],
    correct: 1
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 16 — Code of Practice for Life Insurance Agents
  // Answers: 1-d, 2-d, 3-c, 4-b, 5-c, 6-c
  // ═══════════════════════════════════════════════════════════════
  {
    id: 82, chapter: 16,
    question: "Which of the following is not a part of the Code of Ethics and Conduct for the life insurance sector in Malaysia?",
    options: [
      "Guidelines on the Code of Conduct",
      "Code of Ethics and Conduct for Life Insurance Selling",
      "Statement of Life Insurance Practice",
      "Guide to stock market investment"
    ],
    correct: 3
  },
  {
    id: 83, chapter: 16,
    question: "What is one of the key responsibilities of companies under the Code of Ethics and Conduct for the life insurance sector in Malaysia?",
    options: [
      "Submit a quarterly report to Bank Negara Malaysia on breaches observed.",
      "Donate a percentage of profits to charitable causes",
      "Ensure all employees hold a PhD degree.",
      "None of the above"
    ],
    correct: 3
  },
  {
    id: 84, chapter: 16,
    question: "Which of the following steps is NOT part of the \"Before Buying\" stage in the sales and service process according to the Service Guide?",
    options: [
      "Understanding client's insurance needs and financial goals",
      "Explaining product features, benefits, and exclusions.",
      "Assisting clients with policy applications.",
      "Providing Product Disclosure Sheets (PDS) and facilitating informed decisions."
    ],
    correct: 2
  },
  {
    id: 85, chapter: 16,
    question: "What is the primary objective of the \"Decide Buying\" stage in the sales and service process according to the Service Guide?",
    options: [
      "To understand the client's insurance needs and financial goals.",
      "To assist clients during the policy purchase and application process, ensuring they understand the policy terms and conditions.",
      "To provide continuous policy servicing and assistance during the claims process.",
      "None of the above"
    ],
    correct: 1
  },
  {
    id: 86, chapter: 16,
    question: "Which of the following is NOT a step an agent or sales intermediary should take during the policy term according to the Service Guide?",
    options: [
      "Assist clients in renewing their policies.",
      "Guide clients through the claims process",
      "Conduct a new comprehensive Customer Fact Find",
      "Manage agent transitions and arrange to appoint new agents to service clients, if necessary"
    ],
    correct: 2
  },
  {
    id: 87, chapter: 16,
    question: "What is one of the Key Performance Indicators (KPIs) that a licensed person should follow in the design of the Balanced Scorecard (BSC) Framework?",
    options: [
      "The agent's age",
      "The number of friends the agent has",
      "The completion rate of Customer Fact Find (CFF) form.",
      "The number of insurance policies the agent owns."
    ],
    correct: 2
  },

  // ===========================================================================
  // CEILLI — Certificate Examination in Investment-Linked Life Insurance
  // 82 Questions across 9 Chapters  (IDs 88–169, chapter IDs 101–109)
  // ===========================================================================

  // CHAPTER 101 — Introduction to Investment-Linked Life Insurance (5 Q)
  {
    id: 88, chapter: 101,
    question: "What are the factors that have contributed to the popularity of investment-linked insurance in Malaysia?<br><br>I. Young individuals who are just starting to explore insurance options<br>II. Consumers prefer traditional insurance products for stable coverage<br>III. Flexibility in terms of investment options<br>IV. Potential higher returns than traditional insurance policies",
    options: ["I and II", "II and III", "III and IV", "I and IV"],
    correct: 2
  },
  {
    id: 89, chapter: 101,
    question: "Which of the following is the correct description of an investment-linked life policy?",
    options: [
      "A participating policy offering lifetime coverage",
      "A capital guaranteed policy",
      "An endowment policy which provides minimum returns",
      "A policy offering protection and investment opportunities"
    ],
    correct: 3
  },
  {
    id: 90, chapter: 101,
    question: "An investment-linked life insurance is also known as the following in some parts of the world?<br><br>I. Mutual fund-linked insurance<br>II. Unit-linked life insurance<br>III. Variable life insurance<br>IV. Universal life insurance",
    options: ["I, II, III and IV", "I, II and III", "II, III and IV", "II and III"],
    correct: 3
  },
  {
    id: 91, chapter: 101,
    question: "Investment-linked funds are managed by:<br><br>I. The insurer's own professional manager in its internal investment department<br>II. Fund managers/fund houses appointed by the insurer through outsourcing<br>III. Outsourcing to the funds of unit trust companies since investment-linked funds are similar to unit trust funds<br>IV. The insurer's board of directors who can make special decisions on the types of investment vehicles to offer to policy owners",
    options: ["I and II", "II and III", "II and IV", "All the above"],
    correct: 0
  },
  {
    id: 92, chapter: 101,
    question: "What are the key advantages of Investment-Linked Products (ILP) for consumers?<br><br>I. ILP provides life insurance coverage<br>II. ILP offers investment opportunities with flexibility of investment funds selection<br>III. ILP can be customised to suit the policyholder's individual needs, level of coverage and investment funds options<br>IV. ILP can also be used as a tool for estate planning; investment value can be passed down to beneficiaries tax-free in the event of the policyholder's death",
    options: ["I and II", "II and III", "III and IV", "All the above"],
    correct: 3
  },

  // CHAPTER 102 — Mechanisms & Features of Regular Premium ILP (10 Q)
  {
    id: 93, chapter: 102,
    question: "Which of the following statements correctly describes single-premium investment-linked policies (ILPs) as compared to regular premium ILPs?",
    options: [
      "Single-premium ILPs require the policyholder to make regular, ongoing premium payments.",
      "Single-premium ILPs generally allocate a higher proportion of funds to insurance protection than regular premium ILPs.",
      "Single-premium ILPs involve a one-time lump sum payment and typically offer a higher proportion of funds for investment.",
      "Single-premium ILPs allow policyholders to adjust their insurance coverage level as their financial needs change over time."
    ],
    correct: 2
  },
  {
    id: 94, chapter: 102,
    question: "Which of the following statements correctly describes the dual pricing method for investment-linked policies in Malaysia?",
    options: [
      "Dual pricing uses a single calculated price but applies different transaction fees for buying and selling units.",
      "Dual pricing involves two separate prices for each unit: a bid price for buying back units and an offer price for selling units, typically with a 5% difference.",
      "Dual pricing allows insurers to calculate unit prices based on the Net Asset Value (NAV) but includes an additional cost for each transaction.",
      "Dual pricing was adopted by the insurance industry in Malaysia starting in 2006 to enhance transparency."
    ],
    correct: 1
  },
  {
    id: 95, chapter: 102,
    question: "A 30-year-old female has budgeted RM3,000 per year for a basic regular premium investment-linked plan, which includes a Unit-Deducting Hospitalisation Rider. Based on the SAM rule, how would you calculate the minimum sum assured required for her basic plan?",
    options: [
      "(RM3,000 - Notional Premium for Rider) × 50",
      "(RM3,000 + Notional Premium for Rider) × 50",
      "(RM3,000 - Notional Premium for Rider) × 60",
      "(RM3,000 + Notional Premium for Rider) × 60"
    ],
    correct: 0
  },
  {
    id: 96, chapter: 102,
    question: "In an investment-linked policy, what is the main purpose of the allocated premium?",
    options: [
      "To cover the insurer's administrative and management costs",
      "To pay commissions to agents and other distribution costs",
      "To guarantee a minimum return on investment for the policyholder",
      "To buy units in the investment funds selected by the policyholder"
    ],
    correct: 3
  },
  {
    id: 97, chapter: 102,
    question: "If a policyholder cancels an investment-linked policy during the free-look period, what will they typically receive as a refund?",
    options: [
      "The full premium paid, with no deductions",
      "The policy account value at the next valuation date, with no additional refunds",
      "The full premium paid, subject to a deduction for any expenses incurred for medical examinations",
      "Only the allocated premium amount, with the unallocated premium retained by the insurer"
    ],
    correct: 2
  },
  {
    id: 98, chapter: 102,
    question: "What is a key advantage of using Dollar Cost Averaging (DCA) in an investment-linked policy?",
    options: [
      "It minimises the need for further premium payments in the future",
      "It guarantees a profit over the investment period by buying at low prices",
      "It ensures a fixed rate of return regardless of market conditions",
      "It helps reduce the impact of market volatility by spreading investments over time"
    ],
    correct: 3
  },
  {
    id: 99, chapter: 102,
    question: "Based on the general conditions for the design of investment-linked products, which of the following statements are correct?<br><br>I. The name and design of an investment-linked product must clearly indicate it is an investment-linked product<br>II. Capital-guaranteed products must be backed by a licensed bank, investment bank, or Islamic bank<br>III. Investment-linked products must provide options and guarantees that ensure minimum returns<br>IV. Riders can be added to the policy and may involve unit deductions or require separate premium payments",
    options: ["I and II only", "I, II, and IV only", "II, III, and IV only", "I, III, and IV only"],
    correct: 1
  },
  {
    id: 100, chapter: 102,
    question: "Which statements below describe 'spread-out risk among varied assets' correctly?<br><br>I. Money is invested in a variety of different assets, such as stocks, bonds, and other securities, which helps to reduce the overall risk of your investment.<br>II. As long as the assets selected by the fund manager are sound and the fund manager exercises prudence, the fund price will definitely appreciate in the long run despite fluctuations.<br>III. Spreading investment across different assets helps to diversify an investor's portfolio and reduce the exposure to any one asset class.<br>IV. Spreading out risk among varied assets can help to minimise the impact of market volatility on the investment.",
    options: ["I and II", "I, II and III", "I, III and IV", "II, III and IV"],
    correct: 3
  },
  {
    id: 101, chapter: 102,
    question: "Which of the following statement(s) regarding Minimum Allocation Rate (MAR) are correct?<br><br>I. MAR is the average proportion of premiums payable by policy owner that is allocated in the unit fund(s) of choice before the deduction of any charges.<br>II. MAR is the minimum proportion of premiums payable by policy owner that is allocated in the unit fund(s) of choice before the deduction of any charges.<br>III. The prevailing MAR prescribed by Bank Negara Malaysia for Year 1 to Year 3 premium payment is 60%.<br>IV. The prevailing MAR prescribed by Bank Negara Malaysia for Year 7 to Year 10 premium payment is 100%.",
    options: ["I and II", "II and III", "I, III and IV", "II and IV"],
    correct: 1
  },
  {
    id: 102, chapter: 102,
    question: "Which of the following statement(s) regarding Fund Management Charge (FMC) are correct?<br><br>I. FMC is remuneration to insurers for managing the investment-linked funds for policy owners.<br>II. FMC is being charged to the fund using the unit single pricing method only.<br>III. FMC commensurates with the investment strategy used and cannot exceed 1% of NAV for money-market/fixed income funds, or 1.5% of NAV for other funds.<br>IV. Single pricing approach ensures that the same price applies to both buying and selling units of a given ILP fund.",
    options: ["I and II", "I, II and III", "II, III and IV", "I, III and IV"],
    correct: 3
  },

  // CHAPTER 103 — Disclosure Requirement (10 Q)
  {
    id: 103, chapter: 103,
    question: "What is the essential knowledge about Product Illustration that agents should know?<br><br>I. It is an educational tool that shows a prospective policyholder the essential information of an insurance product, including product name, term, features, benefits, premium, cash value, projected returns and product disclosure sheet.<br>II. Agents must refer to the insurer's approved product illustration for investment-linked products and explain to potential policyholders at the point of sales.<br>III. Product illustration is meant to illustrate the possible movements of cash flows of the investment-linked policy and the impact of fees and charges on cash values.<br>IV. A copy of the product illustration need not be included in the policy document.",
    options: ["I and II", "II and III", "I, II and III", "II, III and IV"],
    correct: 2
  },
  {
    id: 104, chapter: 103,
    question: "What do the Scenario X and Scenario Y rates for non-equity funds represent in a product illustration?",
    options: [
      "Represent the hypothetical rate of returns at 2% (X for low scenario) and 5% (Y for high scenario) for policy owners on the potential impact of different hypothetical investments on their account values",
      "Represent the best scenario to illustrate the rate of returns for all funds",
      "2% (X for low scenario) and 5% (Y for high scenario) for all funds",
      "Represent the 2 projected rate of returns for the fixed income funds"
    ],
    correct: 0
  },
  {
    id: 105, chapter: 103,
    question: "Which statements correctly describe product literature provided by insurers?<br><br>I. It is additional material to product illustration and Fund Fact Sheet to enhance information to potential clients.<br>II. It includes announcements, promotional materials, advertisements, and sales/marketing brochures provided before or at point of sales.<br>III. It is to be provided by the agents to prospective policyholders before or at point of sales.<br>IV. Agents may refer to their own designed product brochures to explain to prospective policyholders during point of sales.",
    options: ["I and II", "II and III", "III and IV", "I, II and III"],
    correct: 3
  },
  {
    id: 106, chapter: 103,
    question: "What are the agent's duties in relation to the fund performance report for policy owners?<br><br>I. Inform policy owners that they will receive the fund performance report at least once a year.<br>II. Assist policy owners in understanding the essential information in the fund performance report.<br>III. Address any questions or concerns that policy owners may have regarding the fund performance report.<br>IV. Help policy owners make informed decisions based on the information provided in the fund performance report.",
    options: ["All of the above", "I, II and III", "II, III and IV", "I, III and IV"],
    correct: 0
  },
  {
    id: 107, chapter: 103,
    question: "What is a fund fact sheet?",
    options: [
      "It is an annual statement from the insurer to its policy owners on the status of their investment-linked policy, showing all transactions or charges during the period.",
      "It is an overview of a fund including the fund's investment objective, risk level, costs, past performance, and holdings details.",
      "It is a fund performance report which is required to be sent to the policyholder annually.",
      "It is an analysis of the fund performance and report on the changes in the investment objectives, strategies, restrictions, and limitations of the fund during the year."
    ],
    correct: 1
  },
  {
    id: 108, chapter: 103,
    question: "As an agent, your duties related to the publication of unit price include:<br><br>I. Inform policy owners on the availability of daily publication of the latest NAV per unit of each investment-linked fund on the insurer's official website.<br>II. Assist policy owners in accessing the latest NAV per unit and guide them on how to use alternative methods (such as telephone hotlines) if they do not have internet access.<br>III. Help policy owners to access historical data of the NAV per unit for each investment-linked fund upon request.<br>IV. Recommend prospective policyholders to decide when to switch funds.",
    options: ["II and III", "I, II and III", "III and IV", "I and IV"],
    correct: 1
  },
  {
    id: 109, chapter: 103,
    question: "Which statement best describes Investment-Linked Products with extension to coverage term feature?",
    options: [
      "It refers to Investment-Linked Plans which will be automatically extended at the end of the initial coverage period, recurring usually every 5 or 10 years until age 100 without going through underwriting.",
      "It refers to Investment-Linked Plans which will be automatically extended in the middle of the initial coverage period, recurring usually every 5 or 10 years until age 100 without going through underwriting.",
      "It refers to Investment-Linked Plans which will be automatically extended at the end of the initial coverage period, recurring usually every 5 or 10 years until age 100 subject to underwriting.",
      "It refers to Investment-Linked Plans which will be automatically extended at the end of the initial coverage period, recurring usually every 5 or 10 years until age 100 subject to only medical underwriting."
    ],
    correct: 0
  },
  {
    id: 110, chapter: 103,
    question: "What are some of the key point-of-sale and post-sale disclosure requirements (mainly for insurers) for investment-linked products with extension to coverage term feature?<br><br>I. Explain features clearly in plain language and disclose limits that may impact the extension length.<br>II. Ensure that all disclosures to policy owners are clear, not misleading, and highlight limitations and potential variations.<br>III. Disclose features and mechanics of coverage extension, distinctions between initial and extended terms, premium required to fund the extension, procedures for exercising the option, and re-underwriting requirements.<br>IV. Disclose the amount needed for both the initial and extended periods, depending on whether pre-funding of the extension is in place or not.",
    options: ["I and II", "II and III", "II, III and IV", "I, II, III and IV"],
    correct: 3
  },
  {
    id: 111, chapter: 103,
    question: "Choose the following statements which are TRUE.<br><br>I. Product Literature — Agents are to communicate clearly to prospective policyholders that the investment-linked product is an insurance/takaful product tied to the performance of underlying assets, rather than a pure investment product like unit trusts.<br>II. Fund Fact Sheet — Agents are responsible to provide clients a Fund Fact Sheet for each of the investment-linked funds offered by insurers together with product illustration at the point of sales.<br>III. Product Illustration — Agents are to provide a copy of the product illustration, based on the actual premium rates subscribed, to the policy owners together with the investment-linked product policy document.<br>IV. Product Literature — Agents are to present the insurer's approved product literature which aligns with the product illustration and Fund Fact Sheet to prospective policyholders.",
    options: ["I and II", "II and III", "II, III and IV", "I, II, III and IV"],
    correct: 3
  },
  {
    id: 112, chapter: 103,
    question: "What are some of the key disclosure requirements that agents need to understand and adhere to when promoting investment-linked products to clients?<br><br>I. Provide accurate and transparent information.<br>II. Offer reasonable and verifiable opinions.<br>III. Present factual performance statements and avoid undue expectations.<br>IV. Clearly communicate guarantees and disclose third-party guarantee information.",
    options: ["II, III and IV", "I, II and III", "All of the above", "I, III and IV"],
    correct: 2
  },

  // CHAPTER 104 — Mechanisms & Features of Single Premium ILP (10 Q)
  {
    id: 113, chapter: 104,
    question: "In single premium investment-linked (SP-IL) life insurance, how are premium payments made?",
    options: [
      "Periodic payments throughout the policy term",
      "One-time lump sum payment upfront",
      "Payments spread over the first 10 years",
      "No premium payments required"
    ],
    correct: 1
  },
  {
    id: 114, chapter: 104,
    question: "What is the primary objective for policy owners of regular premium investment-linked (RP-IL) policies?",
    options: [
      "Maximize investment returns",
      "Obtain life insurance coverage",
      "Secure financial protection for dependents",
      "Accumulate wealth over time"
    ],
    correct: 2
  },
  {
    id: 115, chapter: 104,
    question: "What is the minimum basic single premium (SP) for SP-IL life insurance policies typically based on?",
    options: [
      "The policyholder's age and health status",
      "The target market of the insurance company",
      "The performance of the chosen investment funds",
      "The discretion of individual insurers"
    ],
    correct: 3
  },
  {
    id: 116, chapter: 104,
    question: "Which component of SP-IL policies is a one-time payment and typically should not exceed 5%?",
    options: [
      "Sum assured",
      "Upfront charge",
      "Cost of insurance deduction",
      "Minimum protection amount"
    ],
    correct: 1
  },
  {
    id: 117, chapter: 104,
    question: "What does the basic sum assured (BSA) represent in SP-IL policies?",
    options: [
      "The current value of investment units",
      "The minimum protection amounts",
      "The total premium paid",
      "The sum of allocated and unallocated premiums"
    ],
    correct: 1
  },
  {
    id: 118, chapter: 104,
    question: "The upfront charge for a single premium investment-linked (SP-IL) policy is 4% of the single premium paid. If the single premium is RM15,000, what is the amount of the upfront charge?",
    options: ["RM600", "RM1,500", "RM4,000", "RM5,000"],
    correct: 0
  },
  {
    id: 119, chapter: 104,
    question: "What is the purpose of the cost of insurance (COI) deduction in SP-IL policies?",
    options: [
      "To cover the investment management fees",
      "To increase the sum assured over time",
      "To reduce the risk of investment losses",
      "To cover the shortfall between account value and sum assured"
    ],
    correct: 3
  },
  {
    id: 120, chapter: 104,
    question: "When does the COI deduction cease in SP-IL policies?",
    options: [
      "When the account value reaches or exceeds the BSA",
      "After a specific number of years",
      "When the investment funds perform well",
      "When the policyholder requests it to stop"
    ],
    correct: 0
  },
  {
    id: 121, chapter: 104,
    question: "How does the COI deduction change as the account value increases in SP-IL policies?",
    options: [
      "It remains constant regardless of the account value",
      "It increases proportionally with the account value",
      "It decreases gradually as the account value increases",
      "It fluctuates based on market conditions"
    ],
    correct: 2
  },
  {
    id: 122, chapter: 104,
    question: "A policyholder's SP-IL policy has an account value of RM9,500 and a basic sum assured (BSA) of RM10,000. The cost of insurance (COI) deduction is RM150. What is the sum at risk (SAR) in this scenario?",
    options: ["RM500", "RM1,000", "RM9,350", "RM10,000"],
    correct: 0
  },

  // CHAPTER 105 — Considerations for Purchasing an ILP (10 Q)
  {
    id: 123, chapter: 105,
    question: "What is one of the benefits of an investment-linked insurance plan?",
    options: [
      "Provides only life insurance coverage",
      "Offers guaranteed investment returns",
      "Allows policyholders to access pooled and diversified investment funds",
      "Provides flexibility in changing coverage types"
    ],
    correct: 2
  },
  {
    id: 124, chapter: 105,
    question: "Which component of an investment-linked insurance plan is managed by professional fund managers?",
    options: ["Policy fees", "Insurance charges", "Sum assured", "Investment funds"],
    correct: 3
  },
  {
    id: 125, chapter: 105,
    question: "What is a key advantage of investment-linked policies in terms of expertise?",
    options: [
      "Policyholders have full control over investment decisions",
      "Policyholders have access to professional fund managers' investment expertise",
      "Policyholders can customize their own investment portfolios",
      "Policyholders can switch between investment funds at any time"
    ],
    correct: 1
  },
  {
    id: 126, chapter: 105,
    question: "During volatile stock market conditions, the account and maturity values of an investment-linked life insurance policy invested in an equity fund:",
    options: [
      "Remain stable",
      "Experience fluctuations",
      "Provide guaranteed returns",
      "Align with traditional whole life products"
    ],
    correct: 1
  },
  {
    id: 127, chapter: 105,
    question: "Which statement is true on the benefit of accessibility to investment-linked policy owners?",
    options: [
      "Access to knowledge and advice of fund managers on the recommended shares to purchase",
      "Access to well-diversified investment funds that are managed by professional and experienced investment managers",
      "Access to invest directly in the stock market",
      "Access to expert investment advice and tips"
    ],
    correct: 1
  },
  {
    id: 128, chapter: 105,
    question: "The benefits of an investment-linked policy are:<br><br>I. It provides access to a diversified investment portfolio — thus has better risk characteristics than a non-diversified portfolio.<br>II. It offers flexibility.<br>III. Fixed nominal charges are levied on the policy.<br>IV. The life insurer insulates the policy owner against market risks.",
    options: ["I and II", "II and IV", "I and III", "I, II, III and IV"],
    correct: 0
  },
  {
    id: 129, chapter: 105,
    question: "When an investment-linked policy reaches maturity, the maturity value will be:",
    options: [
      "The basic sum assured and the account value",
      "The account value",
      "The account value plus terminal/maturity bonus",
      "The basic sum assured and the account value plus terminal/maturity bonus"
    ],
    correct: 1
  },
  {
    id: 130, chapter: 105,
    question: "What are two similarities between a regular premium investment-linked plan and a whole life participating plan?<br><br>I. Both plans provide lifetime coverage up to a maximum age of 100.<br>II. Both plans allow the addition of riders without additional premium.<br>III. Both are entitled to the same income tax relief treatment for premiums paid.<br>IV. The minimum age for an individual to apply on own life is age 16 for both products.",
    options: ["I and II", "II and III", "I and III", "All of the above"],
    correct: 0
  },
  {
    id: 131, chapter: 105,
    question: "In an investment-linked life insurance policy, the value of units is tied to the performance of:",
    options: [
      "Guaranteed cash values",
      "Traditional whole life products",
      "The underlying assets",
      "Fixed insurance charges"
    ],
    correct: 2
  },
  {
    id: 132, chapter: 105,
    question: "The fees associated with an investment-linked life insurance policy, such as policy fee, insurance charge, and fund management fees:",
    options: [
      "Are guaranteed and fixed",
      "Are subject to frequent revisions",
      "Remain stable throughout the policy term",
      "Can be adjusted with prior notice to policyholders"
    ],
    correct: 3
  },

  // CHAPTER 106 — Investment Considerations (10 Q)
  {
    id: 133, chapter: 106,
    question: "What are the key considerations before investing in an investment-linked fund?",
    options: [
      "Investment objectives, risk tolerance, and taxation treatment",
      "Accessibility of funds, investment horizon, and risk profiling",
      "Funds available, investment performance, and risk-return tradeoff",
      "Income generation, growth objectives, and safety of investments"
    ],
    correct: 1
  },
  {
    id: 134, chapter: 106,
    question: "Which of the following investment objectives focuses on steady income streams?",
    options: ["Secured", "Income", "Growth", "Security"],
    correct: 1
  },
  {
    id: 135, chapter: 106,
    question: "What does risk profiling involve?",
    options: [
      "Assessing the client's financial resources",
      "Determining the investment horizon",
      "Analyzing the tax implications of investments",
      "Understanding the client's risk tolerance and preferences"
    ],
    correct: 3
  },
  {
    id: 136, chapter: 106,
    question: "How does the investment horizon influence the level of risk an investor should be willing to accept?",
    options: [
      "Longer investment horizons allow for greater risk-taking",
      "Shorter investment horizons require higher risk tolerance",
      "Investment horizon has no impact on risk tolerance",
      "Risk tolerance is solely determined by the client's age"
    ],
    correct: 0
  },
  {
    id: 137, chapter: 106,
    question: "What is the purpose of conducting cash flow and net worth analysis?",
    options: [
      "To evaluate the performance of investment-linked funds",
      "To determine the accessibility of funds in investment-linked insurance",
      "To assess the client's financial situation and available funds for investing",
      "To understand the tax implications associated with different investment options"
    ],
    correct: 2
  },
  {
    id: 138, chapter: 106,
    question: "How does taxation treatment affect the overall returns on an investment?",
    options: [
      "It has no impact on investment returns",
      "It can significantly reduce investment returns",
      "It increases investment returns",
      "It only affects specific types of investments"
    ],
    correct: 1
  },
  {
    id: 139, chapter: 106,
    question: "What is the relationship between risk and potential return in the risk-return tradeoff?",
    options: [
      "Higher risk is associated with higher potential return",
      "Higher risk leads to lower potential return",
      "Risk and potential return are unrelated",
      "Lower risk is associated with higher potential return"
    ],
    correct: 0
  },
  {
    id: 140, chapter: 106,
    question: "What are the main risk profiles corresponding to different investing styles?",
    options: [
      "Very Conservative, Conservative, Balanced, Aggressive and Very Aggressive",
      "Conservative, Aggressive, and Very Aggressive",
      "Conservative, Balanced, and Very Aggressive",
      "Very Conservative, Conservative, and Balanced"
    ],
    correct: 3
  },
  {
    id: 141, chapter: 106,
    question: "Which of the following factors are important to consider when conducting a risk profiling exercise for investment-linked plans?<br><br>I. Age, income, and financial stability<br>II. Family situation and current financial position<br>III. Investment experience and knowledge<br>IV. Risk tolerance and investment disposition",
    options: ["I and II", "I and III", "I, II and III", "All of the above"],
    correct: 0
  },
  {
    id: 142, chapter: 106,
    question: "Why is understanding an individual's investment horizon important?",
    options: [
      "It determines the accessibility of funds in investment-linked insurance",
      "It helps determine the level of risk an investor can comfortably assume",
      "It impacts the taxation treatment of investments",
      "It influences the historical performance of investment-linked funds"
    ],
    correct: 1
  },

  // CHAPTER 107 — Types of Investment Vehicles & Potential Risks (9 Q)
  {
    id: 143, chapter: 107,
    question: "Why do guidelines require insurance companies to invest funds from an investment-linked insurance policy according to the objectives in the Fund Fact Sheet?",
    options: [
      "To provide the insurer flexibility in managing the funds across multiple products",
      "To ensure the investments align with policyholders' expectations",
      "To allow the insurer to maximize returns for policyholders over time",
      "To reduce administrative costs for the insurer"
    ],
    correct: 1
  },
  {
    id: 144, chapter: 107,
    question: "What action must an insurance company take if it cannot achieve the minimum required fund size during the initial offer period?",
    options: [
      "Continue the offer period until the minimum fund size is met",
      "Refund all policyholder payments with any interest or investment profits earned",
      "Adjust the fund's investment strategy to attract more investors",
      "Reduce the minimum fund size to avoid refunding policyholder payments"
    ],
    correct: 1
  },
  {
    id: 145, chapter: 107,
    question: "Compared to government bond funds, corporate bond funds have:",
    options: [
      "Lower yields and lower risks",
      "Higher yields and higher risks",
      "More or less similar yield and risk ratios",
      "A longer tenure"
    ],
    correct: 1
  },
  {
    id: 146, chapter: 107,
    question: "Which of the following is a primary advantage of investing in money market instruments?",
    options: [
      "Protection against inflation risk",
      "High potential for capital appreciation",
      "Higher returns compared to equities and fixed income",
      "Stability with minimal fluctuations in value"
    ],
    correct: 3
  },
  {
    id: 147, chapter: 107,
    question: "Which of the following is a key benefit of investing in Real Estate Investment Trusts (REITs)?",
    options: [
      "High capital growth through reinvestment of income",
      "Diversification through exposure to the property market",
      "Immunity from interest rate fluctuations",
      "Minimal management fees compared to other investments"
    ],
    correct: 1
  },
  {
    id: 148, chapter: 107,
    question: "Which of the following accurately describes the similarities and differences between unit trusts and single premium investment-linked plans?<br><br>I. Both unit trusts and single premium investment-linked plans have a similar investment approach.<br>II. Unit trusts do not include life insurance protection, whereas single premium investment-linked plans do.<br>III. Only single premium investment-linked plans impose insurance costs and policy fees due to the life protection element.<br>IV. A trustee is required for unit trusts, but this is not mandatory for single premium investment-linked plans.",
    options: ["I, II and IV", "I, II and III", "II, III and IV", "I and III"],
    correct: 2
  },
  {
    id: 149, chapter: 107,
    question: "What are the advantages of investing in equities?<br><br>I. Potential to achieve capital growth through capital appreciation and steady stream of dividend income.<br>II. Provide diversification benefits as policyholders' monies are invested in a wide range of companies and sectors.<br>III. Provide liquidity to investors as investors can quickly convert their shares into cash if needed.<br>IV. Provide geographical exposure thus able to average market risk.",
    options: ["I and II", "I, II and III", "III and IV", "II, III and IV"],
    correct: 1
  },
  {
    id: 150, chapter: 107,
    question: "What are the characteristics of fixed-income securities?<br><br>I. They comprise of government and corporate bonds.<br>II. They provide a regular stream of interest income.<br>III. They have lower risk compared to equities.<br>IV. The interest payments are usually more predictable than dividend income from equities.",
    options: ["I and II", "II and III", "II, III and IV", "All of the above"],
    correct: 3
  },
  {
    id: 151, chapter: 107,
    question: "Please rank the sequence of the risk and return of the following investment vehicles from lower to higher.",
    options: [
      "Money Market Instruments, Fixed-Income Securities, Equities",
      "Equities, Fixed-Income Securities, Money Market Instruments",
      "Money Market Instruments, Equities and Fixed-Income Securities",
      "Fixed-Income Securities, Money Market Instruments, Equities"
    ],
    correct: 0
  },

  // CHAPTER 108 — Common Types of ILFs, Potential Risks & Fund Management (9 Q)
  {
    id: 152, chapter: 108,
    question: "Choose the correct statement(s):<br><br>I. Investment-linked plans offer various types of funds, such as equity funds, fixed income funds, balanced funds, and Shariah-compliant funds, among others.<br>II. Policy owners can choose to invest in one or more funds based on their investment objectives, risk tolerance, and financial goals.<br>III. The value of an investment-linked plan is directly linked to the performance of the funds selected by the policy owner.<br>IV. The insurers assume the investment risk, and the returns from the investment are not guaranteed.",
    options: ["II and III", "III and IV", "I, II and III", "II, III and IV"],
    correct: 2
  },
  {
    id: 153, chapter: 108,
    question: "Which of the following funds is considered the lowest-risk investment option?",
    options: ["Equity funds", "Fixed income funds", "Balanced funds", "Specialised funds"],
    correct: 1
  },
  {
    id: 154, chapter: 108,
    question: "What is the primary characteristic of index funds?",
    options: [
      "They offer the potential for higher returns",
      "They invest primarily in real estate properties",
      "They require active management by a fund manager",
      "They seek to replicate the performance of a specific market index"
    ],
    correct: 3
  },
  {
    id: 155, chapter: 108,
    question: "Which type of fund restricts investments to those that align with specific ethical and religious guidelines?",
    options: ["Equity funds", "Fixed income funds", "Shariah-compliant funds", "Global funds"],
    correct: 2
  },
  {
    id: 156, chapter: 108,
    question: "Which fund category is suitable for investors who prioritize capital preservation and income generation?",
    options: ["Equity funds", "Fixed income funds", "Shariah-compliant funds", "Balanced funds"],
    correct: 1
  },
  {
    id: 157, chapter: 108,
    question: "Which of the following statements is true regarding property funds and REITs?<br><br>I. Property funds invest in income-generating real estate properties.<br>II. Property funds invest in a wider range of property-related assets.<br>III. REITs are publicly traded on stock exchanges.<br>IV. REITs distribute 100% of their taxable income to investors in the form of dividends.",
    options: ["I and IV", "II only", "II and III", "I, III and IV"],
    correct: 2
  },
  {
    id: 158, chapter: 108,
    question: "Balanced funds aim to provide a balance between:",
    options: [
      "Capital growth and income generation",
      "High-risk and speculative investments",
      "Cash and liquid assets",
      "Short-term gains and high liquidity"
    ],
    correct: 0
  },
  {
    id: 159, chapter: 108,
    question: "Which of the following is NOT a risk factor typically associated with investment-linked funds?",
    options: [
      "Market fluctuations",
      "Liquidity limitations",
      "Credit defaults",
      "Potential for higher returns"
    ],
    correct: 3
  },
  {
    id: 160, chapter: 108,
    question: "Which statements describe global funds correctly?<br><br>I. Invest in securities around the world, including developed and emerging markets.<br>II. Invest in a variety of asset classes, including equities, bonds, and alternative investments such as real estate or commodities.<br>III. Carry risks associated with investing in different currencies, political instability in some regions, and other macroeconomic factors.<br>IV. Provide averagely higher rate of return than all other funds.",
    options: ["II and IV", "III and IV", "II, III and IV", "I, II and III"],
    correct: 3
  },

  // CHAPTER 109 — Pertinent Guidelines on Investment-Linked Business (9 Q)
  {
    id: 161, chapter: 109,
    question: "Why is it important for agents and sales intermediaries to pass the Certificate Examination in Investment-Linked Life Insurance (CEILLI) before they can market investment-linked products?",
    options: [
      "To ensure they can be productive in their sales career",
      "To increase their opportunity to upsell and cross-sell more products",
      "To be equipped with knowledge of ethical sales practices and needs analysis",
      "To ensure that only licensed persons with proper training can market these products"
    ],
    correct: 3
  },
  {
    id: 162, chapter: 109,
    question: "What is the objective of the Investment-Linked Guidelines issued by Bank Negara Malaysia?<br><br>I. To promote and maintain high corporate governance and professionalism.<br>II. To ensure professional and proper conduct in sales and marketing.<br>III. To maximize returns for policy owners/takaful participants.<br>IV. To enhance product transparency and disclosure to protect the interests of policy owners/takaful participants.",
    options: ["I and II", "I, II and III", "I, II and IV", "II, III and IV"],
    correct: 2
  },
  {
    id: 163, chapter: 109,
    question: "According to the Investment-Linked Guidelines, Bank Negara Malaysia, what are the objectives of the Minimum Allocation Rates (MAR) implementation?<br><br>I. To protect the account value of policy owners/takaful participants.<br>II. To prescribe the standards for sustainability tests to ensure proper management of long-term persistency of investment-linked policies.<br>III. To enhance the product illustration format.<br>IV. To optimise return for policy owners/takaful participants and profit for insurers.",
    options: ["II, III and IV", "I, III and IV", "I, II and IV", "I, II and III"],
    correct: 3
  },
  {
    id: 164, chapter: 109,
    question: "According to the Investment-Linked Guidelines, Bank Negara Malaysia, insurers offering investment-linked products must disclose information about the product's design, including:<br><br>I. The name of the product and funds must reflect the underlying investment strategy.<br>II. Any options and guarantees provided for the product.<br>III. Whether the product is whole life or term life insurance.<br>IV. The commission structure for agents selling the product.",
    options: ["I and III", "I and II", "I, II and III", "All of the above"],
    correct: 1
  },
  {
    id: 165, chapter: 109,
    question: "Insurers are required to provide policy owners with appropriate advice on managing the extension of coverage. What consent is required before deducting any charges for riders during a premium or takaful contribution holiday?",
    options: ["Verbal consent", "Written consent", "No consent is required", "Consent from the agent"],
    correct: 1
  },
  {
    id: 166, chapter: 109,
    question: "Insurers must disclose all fees and charges in sales and marketing materials and investment-linked policy documents. What is the duration of notice that must be given before revising existing fees and charges?",
    options: ["One month", "Two months", "Three months", "Six months"],
    correct: 2
  },
  {
    id: 167, chapter: 109,
    question: "Insurers must only charge expenses that are specifically incurred for the management of an investment-linked fund including:<br><br>I. Commissions, taxes, fees for auditors and valuers.<br>II. Custodian fees and hedging costs.<br>III. General overheads.<br>IV. Investment in systems to enhance company operations.",
    options: ["I and II", "III and IV", "I, II and III", "All the above"],
    correct: 0
  },
  {
    id: 168, chapter: 109,
    question: "How often must a licensed takaful operator value the assets of an investment-linked takaful fund?",
    options: ["Weekly", "Monthly", "Annually", "Daily"],
    correct: 3
  },
  {
    id: 169, chapter: 109,
    question: "What must an insurer consider when providing seed money to assist in the start-up of an investment-linked fund?",
    options: [
      "The insurer must ensure there is an exit strategy to manage its risk exposure.",
      "The insurer must provide liquidity for policyholders to withdraw funds.",
      "The insurer must limit investment in foreign assets.",
      "The insurer must ensure the fund maintains sufficient liquidity to support policyholder transactions."
    ],
    correct: 0
  }

]; // end quizData
