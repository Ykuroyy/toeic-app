const questions = [
    {
        question: "I _____ to school every day.",
        options: ["go", "goes", "going", "went"],
        correct: 0,
        explanation: "主語が「I」の時は動詞の原形「go」を使うんだよ！"
    },
    {
        question: "She _____ playing tennis.",
        options: ["like", "likes", "liking", "liked"],
        correct: 1,
        explanation: "主語が「She」（三人称単数）の時は動詞に「s」をつけて「likes」になるよ！"
    },
    {
        question: "They _____ happy yesterday.",
        options: ["is", "are", "was", "were"],
        correct: 3,
        explanation: "「yesterday」があるから過去形！「They」の過去形は「were」だよ！"
    },
    {
        question: "I have _____ apple in my bag.",
        options: ["a", "an", "the", "some"],
        correct: 1,
        explanation: "「apple」は母音で始まるから「an」を使うよ！"
    },
    {
        question: "Can you _____ me with my homework?",
        options: ["help", "helps", "helping", "helped"],
        correct: 0,
        explanation: "「Can」の後は動詞の原形「help」を使うよ！"
    },
    {
        question: "She is _____ than her sister.",
        options: ["tall", "taller", "tallest", "more tall"],
        correct: 1,
        explanation: "比較級！「～より」という時は「-er」をつけて「taller」にするよ！"
    },
    {
        question: "I _____ my homework now.",
        options: ["do", "does", "am doing", "did"],
        correct: 2,
        explanation: "「now」があるから現在進行形「am doing」を使うよ！"
    },
    {
        question: "_____ you like pizza?",
        options: ["Do", "Does", "Is", "Are"],
        correct: 0,
        explanation: "「you」の疑問文は「Do」で始めるよ！"
    },
    {
        question: "We went to the park _____ it was sunny.",
        options: ["but", "because", "so", "if"],
        correct: 1,
        explanation: "理由を表す時は「because」（〜なので）を使うよ！"
    },
    {
        question: "This is _____ book I've ever read!",
        options: ["good", "better", "the best", "best"],
        correct: 2,
        explanation: "最上級！「今まで読んだ中で一番」という時は「the best」だよ！"
    },
    {
        question: "I have lived here _____ five years.",
        options: ["for", "since", "at", "in"],
        correct: 0,
        explanation: "期間を表す時は「for」を使うよ！「5年間」という意味だね！"
    },
    {
        question: "Please turn _____ the light.",
        options: ["on", "in", "at", "to"],
        correct: 0,
        explanation: "「turn on」で「つける」という意味の熟語だよ！"
    },
    {
        question: "I _____ to Tokyo last summer.",
        options: ["go", "goes", "went", "going"],
        correct: 2,
        explanation: "「last summer」があるから過去形「went」を使うよ！"
    },
    {
        question: "She can _____ very fast.",
        options: ["run", "runs", "running", "ran"],
        correct: 0,
        explanation: "「can」の後は動詞の原形だから「run」だよ！"
    },
    {
        question: "_____ bag is this?",
        options: ["Who", "Whose", "What", "Which"],
        correct: 1,
        explanation: "「誰の」と聞く時は「Whose」を使うよ！"
    },
    {
        question: "I'm interested _____ music.",
        options: ["in", "on", "at", "for"],
        correct: 0,
        explanation: "「interested in」で「〜に興味がある」という熟語だよ！"
    },
    {
        question: "She _____ TV when I called her.",
        options: ["watch", "watches", "was watching", "watched"],
        correct: 2,
        explanation: "過去進行形！「電話した時〜していた」という状況だよ！"
    },
    {
        question: "I have _____ finished my lunch.",
        options: ["yet", "already", "still", "ever"],
        correct: 1,
        explanation: "肯定文で「もう」という意味は「already」を使うよ！"
    },
    {
        question: "_____ you speak English?",
        options: ["Can", "Are", "Is", "Do"],
        correct: 0,
        explanation: "能力を聞く時は「Can」を使うよ！"
    },
    {
        question: "There _____ many books on the shelf.",
        options: ["is", "are", "was", "be"],
        correct: 1,
        explanation: "「books」は複数形だから「are」を使うよ！"
    },
    {
        question: "I want _____ a doctor in the future.",
        options: ["become", "to become", "becoming", "became"],
        correct: 1,
        explanation: "「want to」で「〜したい」という意味だよ！"
    },
    {
        question: "She is good _____ playing the piano.",
        options: ["at", "in", "on", "for"],
        correct: 0,
        explanation: "「good at」で「〜が得意」という熟語だよ！"
    },
    {
        question: "_____ did you go yesterday?",
        options: ["What", "Where", "Who", "When"],
        correct: 1,
        explanation: "場所を聞く時は「Where」を使うよ！"
    },
    {
        question: "I'll call you _____ I get home.",
        options: ["when", "where", "what", "who"],
        correct: 0,
        explanation: "時を表す接続詞「when」（〜する時）を使うよ！"
    },
    {
        question: "This pizza is _____ delicious!",
        options: ["very", "much", "many", "lot"],
        correct: 0,
        explanation: "形容詞を強調する時は「very」を使うよ！"
    },
    {
        question: "I haven't seen him _____ Monday.",
        options: ["for", "since", "at", "on"],
        correct: 1,
        explanation: "特定の時点から「〜以来」は「since」を使うよ！"
    },
    {
        question: "_____ you like some tea?",
        options: ["Do", "Would", "Are", "Can"],
        correct: 1,
        explanation: "丁寧に勧める時は「Would you like」を使うよ！"
    },
    {
        question: "He runs _____ than me.",
        options: ["fast", "faster", "fastest", "more fast"],
        correct: 1,
        explanation: "比較級！「私より速い」は「faster」だよ！"
    },
    {
        question: "I _____ my room every Saturday.",
        options: ["clean", "cleans", "cleaning", "cleaned"],
        correct: 0,
        explanation: "習慣を表す現在形！主語が「I」だから「clean」だよ！"
    },
    {
        question: "There isn't _____ milk in the fridge.",
        options: ["some", "any", "many", "few"],
        correct: 1,
        explanation: "否定文では「any」を使うよ！"
    },
    {
        question: "Let's _____ to the movies!",
        options: ["go", "goes", "going", "went"],
        correct: 0,
        explanation: "「Let's」の後は動詞の原形「go」を使うよ！"
    },
    {
        question: "I'm looking _____ my keys.",
        options: ["at", "for", "in", "on"],
        correct: 1,
        explanation: "「look for」で「〜を探す」という熟語だよ！"
    },
    {
        question: "She _____ English for three years.",
        options: ["study", "studies", "has studied", "studying"],
        correct: 2,
        explanation: "「for three years」があるから現在完了形「has studied」だよ！"
    },
    {
        question: "_____ is your birthday?",
        options: ["What", "When", "Where", "Who"],
        correct: 1,
        explanation: "時を聞く時は「When」を使うよ！"
    },
    {
        question: "I need _____ help with this problem.",
        options: ["some", "any", "many", "few"],
        correct: 0,
        explanation: "肯定文で「いくらかの」は「some」を使うよ！"
    },
    {
        question: "She speaks English _____ well.",
        options: ["very", "much", "many", "lot"],
        correct: 0,
        explanation: "副詞「well」を強調する時も「very」を使うよ！"
    },
    {
        question: "_____ you busy now?",
        options: ["Is", "Are", "Do", "Does"],
        correct: 1,
        explanation: "「you」のbe動詞は「Are」だよ！"
    },
    {
        question: "I usually _____ up at 7 o'clock.",
        options: ["get", "gets", "getting", "got"],
        correct: 0,
        explanation: "習慣を表す現在形！「usually」があるから「get」だよ！"
    },
    {
        question: "This book belongs _____ me.",
        options: ["to", "for", "with", "at"],
        correct: 0,
        explanation: "「belong to」で「〜のものである」という熟語だよ！"
    },
    {
        question: "_____ beautiful flower!",
        options: ["What", "What a", "How", "How a"],
        correct: 1,
        explanation: "感嘆文！単数名詞の前は「What a」を使うよ！"
    },
    {
        question: "I have to _____ my homework before dinner.",
        options: ["finish", "finishes", "finishing", "finished"],
        correct: 0,
        explanation: "「have to」の後は動詞の原形「finish」だよ！"
    },
    {
        question: "She is _____ student in our class.",
        options: ["smart", "smarter", "smartest", "the smartest"],
        correct: 3,
        explanation: "最上級！「クラスで一番」は「the smartest」だよ！"
    },
    {
        question: "I'm tired _____ I stayed up late.",
        options: ["but", "because", "so", "if"],
        correct: 1,
        explanation: "理由を説明する時は「because」を使うよ！"
    },
    {
        question: "_____ does this cost?",
        options: ["How many", "How much", "How long", "How often"],
        correct: 1,
        explanation: "値段を聞く時は「How much」を使うよ！"
    },
    {
        question: "Please wait _____ me!",
        options: ["for", "to", "at", "on"],
        correct: 0,
        explanation: "「wait for」で「〜を待つ」という熟語だよ！"
    },
    {
        question: "I _____ swimming every Sunday.",
        options: ["go", "goes", "going", "went"],
        correct: 0,
        explanation: "習慣を表す現在形！「go swimming」で「泳ぎに行く」だよ！"
    },
    {
        question: "_____ pencil is longer?",
        options: ["What", "Which", "Who", "Where"],
        correct: 1,
        explanation: "選択肢から選ぶ時は「Which」を使うよ！"
    },
    {
        question: "She has lived in Japan _____ 2010.",
        options: ["for", "since", "at", "on"],
        correct: 1,
        explanation: "特定の年から「〜以来」は「since」を使うよ！"
    },
    {
        question: "I don't have _____ money.",
        options: ["many", "much", "few", "little"],
        correct: 1,
        explanation: "数えられない名詞「money」には「much」を使うよ！"
    },
    {
        question: "_____ are you from?",
        options: ["What", "Where", "When", "Who"],
        correct: 1,
        explanation: "出身地を聞く時は「Where」を使うよ！"
    },
    {
        question: "My mother _____ dinner now.",
        options: ["cook", "cooks", "is cooking", "cooked"],
        correct: 2,
        explanation: "「now」があるから現在進行形「is cooking」だよ！"
    },
    {
        question: "I enjoy _____ books.",
        options: ["read", "reads", "reading", "to read"],
        correct: 2,
        explanation: "「enjoy」の後は動名詞（-ing形）を使うよ！"
    },
    {
        question: "He is _____ boy in the team.",
        options: ["tall", "taller", "tallest", "the tallest"],
        correct: 3,
        explanation: "最上級！「チームで一番」は「the tallest」だよ！"
    },
    {
        question: "I'll help you _____ your homework.",
        options: ["with", "for", "to", "at"],
        correct: 0,
        explanation: "「help 人 with」で「〜を手伝う」という意味だよ！"
    },
    {
        question: "_____ you ever been to Tokyo?",
        options: ["Do", "Have", "Are", "Did"],
        correct: 1,
        explanation: "経験を聞く時は現在完了形「Have you ever」を使うよ！"
    },
    {
        question: "She went to bed early _____ she was tired.",
        options: ["but", "so", "because", "if"],
        correct: 2,
        explanation: "理由を表す「because」（〜なので）を使うよ！"
    },
    {
        question: "I'm afraid _____ dogs.",
        options: ["of", "to", "for", "at"],
        correct: 0,
        explanation: "「afraid of」で「〜が怖い」という熟語だよ！"
    },
    {
        question: "Please give this book _____ Tom.",
        options: ["for", "to", "at", "with"],
        correct: 1,
        explanation: "「give ～ to 人」で「人に～をあげる」という意味だよ！"
    },
    {
        question: "_____ time is it?",
        options: ["What", "Which", "When", "Where"],
        correct: 0,
        explanation: "時刻を聞く時は「What time」を使うよ！"
    },
    {
        question: "I have _____ friends at school.",
        options: ["much", "many", "lot", "few"],
        correct: 1,
        explanation: "数えられる名詞「friends」には「many」を使うよ！"
    },
    {
        question: "She can sing _____ than me.",
        options: ["good", "well", "better", "best"],
        correct: 2,
        explanation: "「well」の比較級は「better」だよ！"
    },
    {
        question: "I _____ to the library yesterday.",
        options: ["go", "goes", "went", "going"],
        correct: 2,
        explanation: "「yesterday」があるから過去形「went」を使うよ！"
    },
    {
        question: "_____ careful!",
        options: ["Be", "Is", "Are", "Do"],
        correct: 0,
        explanation: "命令文は動詞の原形で始めるから「Be」だよ！"
    },
    {
        question: "The cat is sleeping _____ the sofa.",
        options: ["in", "on", "at", "to"],
        correct: 1,
        explanation: "ソファの上は「on」を使うよ！"
    },
    {
        question: "I have known her _____ we were children.",
        options: ["for", "since", "when", "while"],
        correct: 1,
        explanation: "「〜以来」という継続は「since」を使うよ！"
    },
    {
        question: "_____ you like to come with us?",
        options: ["Do", "Would", "Are", "Can"],
        correct: 1,
        explanation: "丁寧に誘う時は「Would you like to」を使うよ！"
    },
    {
        question: "I'm sorry _____ being late.",
        options: ["for", "to", "at", "of"],
        correct: 0,
        explanation: "「sorry for」で「〜してごめんなさい」という意味だよ！"
    },
    {
        question: "She is _____ than her brother.",
        options: ["young", "younger", "youngest", "more young"],
        correct: 1,
        explanation: "比較級！「〜より若い」は「younger」だよ！"
    },
    {
        question: "_____ is your favorite subject?",
        options: ["What", "Which", "Who", "Where"],
        correct: 0,
        explanation: "「何が」好きか聞く時は「What」を使うよ！"
    },
    {
        question: "I need to _____ my teeth.",
        options: ["brush", "brushes", "brushing", "brushed"],
        correct: 0,
        explanation: "「need to」の後は動詞の原形「brush」だよ！"
    },
    {
        question: "The movie was _____ interesting!",
        options: ["so", "such", "very", "too"],
        correct: 0,
        explanation: "感嘆を表す時「so」を使って「とても」という意味だよ！"
    },
    {
        question: "I haven't eaten anything _____ morning.",
        options: ["for", "since", "at", "on"],
        correct: 1,
        explanation: "「朝から」という時点からは「since」を使うよ！"
    },
    {
        question: "Let me _____ you.",
        options: ["help", "helps", "helping", "to help"],
        correct: 0,
        explanation: "「Let me」の後は動詞の原形「help」だよ！"
    },
    {
        question: "She is interested _____ science.",
        options: ["in", "on", "at", "for"],
        correct: 0,
        explanation: "「interested in」で「〜に興味がある」だよ！"
    },
    {
        question: "_____ did you buy this?",
        options: ["What", "Where", "When", "Which"],
        correct: 1,
        explanation: "場所を聞く時は「Where」を使うよ！"
    },
    {
        question: "I prefer tea _____ coffee.",
        options: ["to", "than", "from", "over"],
        correct: 0,
        explanation: "「prefer A to B」で「BよりAが好き」という意味だよ！"
    },
    {
        question: "She _____ her homework yet.",
        options: ["doesn't finish", "didn't finish", "hasn't finished", "isn't finishing"],
        correct: 2,
        explanation: "「yet」があるから現在完了形の否定「hasn't finished」だよ！"
    },
    {
        question: "The train arrives _____ 3 o'clock.",
        options: ["in", "on", "at", "for"],
        correct: 2,
        explanation: "時刻の前は「at」を使うよ！"
    },
    {
        question: "_____ bag is heavier?",
        options: ["What", "Which", "Who", "Where"],
        correct: 1,
        explanation: "2つを比べる時は「Which」を使うよ！"
    },
    {
        question: "I'm good _____ math.",
        options: ["at", "in", "on", "for"],
        correct: 0,
        explanation: "「good at」で「〜が得意」という熟語だよ！"
    },
    {
        question: "_____ you help me, please?",
        options: ["Can", "Are", "Do", "Is"],
        correct: 0,
        explanation: "お願いする時は「Can you」を使うよ！"
    },
    {
        question: "She has been sick _____ last week.",
        options: ["for", "since", "at", "on"],
        correct: 1,
        explanation: "「先週から」という時点は「since」を使うよ！"
    },
    {
        question: "I want to _____ a teacher.",
        options: ["be", "being", "been", "am"],
        correct: 0,
        explanation: "「want to」の後は動詞の原形「be」だよ！"
    },
    {
        question: "This is _____ interesting book!",
        options: ["a", "an", "the", "some"],
        correct: 1,
        explanation: "母音で始まる「interesting」の前は「an」だよ！"
    },
    {
        question: "I'll meet you _____ the station.",
        options: ["in", "on", "at", "to"],
        correct: 2,
        explanation: "駅で会う時は「at the station」と言うよ！"
    },
    {
        question: "_____ does he go to school?",
        options: ["What", "How", "Where", "Who"],
        correct: 1,
        explanation: "方法・手段を聞く時は「How」を使うよ！"
    },
    {
        question: "She is the _____ girl I know.",
        options: ["kind", "kinder", "kindest", "most kind"],
        correct: 2,
        explanation: "最上級だけど「the」がすでにあるから「kindest」だよ！"
    },
    {
        question: "I have to go _____ home now.",
        options: ["to", "at", "in", "×"],
        correct: 3,
        explanation: "「go home」の「home」は副詞だから前置詞はいらないよ！"
    },
    {
        question: "Please listen _____ me.",
        options: ["to", "at", "for", "on"],
        correct: 0,
        explanation: "「listen to」で「〜を聞く」という熟語だよ！"
    },
    {
        question: "_____ you finished your homework?",
        options: ["Do", "Have", "Are", "Did"],
        correct: 1,
        explanation: "完了を聞く時は現在完了形「Have you」を使うよ！"
    },
    {
        question: "I studied hard, _____ I passed the test.",
        options: ["but", "so", "because", "if"],
        correct: 1,
        explanation: "結果を表す時は「so」（だから）を使うよ！"
    },
    {
        question: "She plays tennis _____ Saturdays.",
        options: ["in", "on", "at", "for"],
        correct: 1,
        explanation: "曜日の前は「on」を使うよ！"
    },
    {
        question: "This movie is _____ than that one.",
        options: ["good", "better", "best", "well"],
        correct: 1,
        explanation: "「good」の比較級は「better」だよ！"
    },
    {
        question: "I'm thinking _____ my future.",
        options: ["about", "for", "to", "at"],
        correct: 0,
        explanation: "「think about」で「〜について考える」という意味だよ！"
    },
    {
        question: "_____ old are you?",
        options: ["What", "How", "When", "Where"],
        correct: 1,
        explanation: "年齢を聞く時は「How old」を使うよ！"
    },
    {
        question: "I _____ never been to America.",
        options: ["am", "have", "do", "was"],
        correct: 1,
        explanation: "経験の否定は現在完了形「have never」だよ！"
    },
    {
        question: "Thank you _____ your help.",
        options: ["for", "to", "at", "with"],
        correct: 0,
        explanation: "「Thank you for」で「〜をありがとう」という意味だよ！"
    },
    {
        question: "She sings _____ beautifully!",
        options: ["so", "such", "very", "too"],
        correct: 0,
        explanation: "副詞を強調する時も「so」を使うよ！"
    },
    {
        question: "I agree _____ you.",
        options: ["with", "to", "for", "at"],
        correct: 0,
        explanation: "「agree with」で「〜に賛成する」という熟語だよ！"
    },
    {
        question: "_____ is the weather today?",
        options: ["What", "How", "When", "Where"],
        correct: 1,
        explanation: "天気を聞く時は「How」を使うよ！"
    },
    {
        question: "She has _____ hair.",
        options: ["long", "longer", "longest", "the longest"],
        correct: 0,
        explanation: "普通の形容詞として使う時は原形「long」だよ！"
    }
];