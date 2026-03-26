// =============================================================================
// PCEIA QUIZ DATA — 87 Questions across 12 Chapters
// Correct answer index: 0=A, 1=B, 2=C, 3=D
// Source: PCEIA Q&A (Perspectives on Insurance & Risk Management textbook)
// =============================================================================

const CATEGORIES = [
  { id: 1,  label: "Ch.1 · Perspectives on Insurance & Risk Management" },
  { id: 2,  label: "Ch.2 · Fundamental Principles of Insurance" },
  { id: 3,  label: "Ch.3 · Legislation and Consumer Protection" },
  { id: 4,  label: "Ch.4 · The Insurance Contract" },
  { id: 5,  label: "Ch.5 · Law of Agency" },
  { id: 6,  label: "Ch.6 · Medical & Health Insurance / Takaful (MHIT)" },
  { id: 11, label: "Ch.11 · Legal Provisions — Life Insurance Policies" },
  { id: 12, label: "Ch.12 · Life Insurance Products" },
  { id: 13, label: "Ch.13 · Life Insurance Premium Rating" },
  { id: 14, label: "Ch.14 · Life Insurance Underwriting and Documents" },
  { id: 15, label: "Ch.15 · Life Insurance Claims" },
  { id: 16, label: "Ch.16 · Code of Practice for Life Insurance Agents" },
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
  }

]; // end quizData
