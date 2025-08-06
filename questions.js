const questions = [
    {
        question: "The meeting _____ scheduled for tomorrow has been postponed.",
        options: ["is", "was", "has", "had"],
        correct: 1,
        explanation: "過去分詞の「scheduled」が後ろから「meeting」を修飾しているため、関係代名詞が省略されています。"
    },
    {
        question: "Please ensure that all documents _____ submitted by the deadline.",
        options: ["are", "will", "have", "is"],
        correct: 0,
        explanation: "受動態の文章で、documentsが複数形なので「are」が正解です。"
    },
    {
        question: "The new policy will take _____ next month.",
        options: ["affect", "effect", "effective", "effectively"],
        correct: 1,
        explanation: "「take effect」は「効力を発する」という熟語です。"
    },
    {
        question: "Neither the manager _____ the employees were aware of the changes.",
        options: ["or", "nor", "and", "but"],
        correct: 1,
        explanation: "「Neither A nor B」の構文で、「AもBも〜ない」という意味になります。"
    },
    {
        question: "The report must be completed _____ the end of the week.",
        options: ["by", "until", "to", "at"],
        correct: 0,
        explanation: "期限を表す場合は「by」を使います。「〜までに」という意味です。"
    },
    {
        question: "_____ the weather improves, the event will be canceled.",
        options: ["If", "Unless", "When", "While"],
        correct: 1,
        explanation: "「Unless」は「〜しない限り」という意味で、条件を表します。"
    },
    {
        question: "The company has been _____ business for over 50 years.",
        options: ["in", "on", "at", "for"],
        correct: 0,
        explanation: "「in business」は「営業している」という熟語です。"
    },
    {
        question: "All employees are required _____ the safety training.",
        options: ["attend", "to attend", "attending", "attended"],
        correct: 1,
        explanation: "「be required to do」で「〜することを要求される」という意味です。"
    },
    {
        question: "The project was completed _____ schedule and under budget.",
        options: ["ahead of", "in front of", "before of", "forward of"],
        correct: 0,
        explanation: "「ahead of schedule」は「予定より早く」という意味の熟語です。"
    },
    {
        question: "We look forward _____ from you soon.",
        options: ["hear", "to hear", "to hearing", "hearing"],
        correct: 2,
        explanation: "「look forward to」の後は動名詞（-ing形）が来ます。"
    },
    {
        question: "The presentation was _____ informative and engaging.",
        options: ["both", "either", "neither", "whether"],
        correct: 0,
        explanation: "「both A and B」で「AもBも両方」という意味になります。"
    },
    {
        question: "Please _____ me know if you need any assistance.",
        options: ["let", "make", "have", "get"],
        correct: 0,
        explanation: "「let me know」は「私に知らせてください」という慣用表現です。"
    },
    {
        question: "The new software is _____ with all operating systems.",
        options: ["compatible", "comparable", "competent", "competitive"],
        correct: 0,
        explanation: "「compatible with」は「〜と互換性がある」という意味です。"
    },
    {
        question: "_____ his experience, he was not selected for the position.",
        options: ["Despite", "Although", "Because", "Since"],
        correct: 0,
        explanation: "「Despite」は前置詞で、名詞（his experience）を直接取ります。"
    },
    {
        question: "The conference will be held _____ Tokyo and Osaka.",
        options: ["between", "among", "within", "through"],
        correct: 0,
        explanation: "2つのものの間は「between」、3つ以上の間は「among」を使います。"
    },
    {
        question: "I would appreciate it if you _____ send me the report by Friday.",
        options: ["can", "could", "will", "would"],
        correct: 1,
        explanation: "仮定法を使った丁寧な依頼文では「could」を使います。"
    },
    {
        question: "The manager insisted that everyone _____ on time.",
        options: ["arrives", "arrive", "arrived", "arriving"],
        correct: 1,
        explanation: "「insist that」の後の節では仮定法現在（動詞の原形）を使います。"
    },
    {
        question: "Sales have increased _____ 20% this quarter.",
        options: ["by", "to", "at", "in"],
        correct: 0,
        explanation: "増加の幅を表す場合は「by」を使います。"
    },
    {
        question: "The decision was made _____ careful consideration.",
        options: ["after", "before", "during", "while"],
        correct: 0,
        explanation: "「after careful consideration」は「慎重に検討した後」という意味です。"
    },
    {
        question: "_____ you have any questions, please contact us.",
        options: ["Should", "Would", "Could", "Must"],
        correct: 0,
        explanation: "「Should you have」は「If you should have」の倒置形で、丁寧な条件文です。"
    }
];