export interface Blog {
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;

  content: string[];

  quote: {
    text: string;
    author: string;
  };

  practicesTitle: string;

  practices: {
    title: string;
    desc: string;
  }[];

  disclaimer: string;
}


export const blogs: Blog[] = [
    {
        slug: "understanding-overthinking",
        title: "Understanding Overthinking: Breaking the Cycle of Endless Thoughts",
        category: "Mental Health",
        author: "Dr. Malveeka Rao",
        publishedAt: "2026-07-17",
        readTime: "8 min read",
        excerpt:
        "Overthinking can trap us in a cycle of worry, self-doubt, and emotional exhaustion. Learn why it happens, how it affects your mental health, and practical ways to regain control.",

        image: "/images/blogs/overthinking.png",

        featured: true,

        content: [
        "Overthinking is something almost everyone experiences at some point in life. It begins as a normal thought process, helping us analyze situations and make decisions. However, when our minds repeatedly revisit the same worries, conversations, or possibilities without reaching a conclusion, thinking becomes overthinking. Instead of solving problems, it traps us in a cycle of doubt, fear, and mental exhaustion.",

        "Healthy thinking helps us understand our experiences and respond rationally to challenges. Overthinking, on the other hand, distorts our perception of reality. It convinces us that every mistake is catastrophic, every uncertainty is a threat, and every negative possibility is likely to happen. This endless cycle leaves us emotionally drained and unable to focus on the present.",

        "Our thoughts generally follow two broad patterns: positive thinking and negative thinking. Positive thinking encourages optimism, resilience, and problem-solving. It motivates us to learn from setbacks, adapt to challenges, and move forward with hope. It does not ignore difficulties but helps us approach them with confidence and balance.",

        "Negative thinking focuses on fear, self-doubt, and unfavorable outcomes. Thoughts such as 'Nothing good ever happens to me,' 'I keep failing,' or 'Nobody understands me' gradually become more frequent. When these thoughts dominate our minds, they begin to influence our emotions, decisions, and behavior, creating a distorted picture of reality.",

        "Over time, negative thinking can evolve into overthinking. A single concern quickly grows into a chain of irrational assumptions. A small mistake at work may become the belief that you are incompetent, which then turns into fears about losing your job or disappointing your family. These conclusions are rarely based on facts, yet they feel convincing because the mind continuously repeats them.",

        "This constant mental activity affects much more than our thoughts. Overthinking often leads to stress, anxiety, irritability, restlessness, poor concentration, and sleep disturbances. Daily responsibilities become harder to manage, relationships may suffer, and even enjoyable activities begin to feel overwhelming. The mind remains occupied with imagined problems instead of the present moment.",

        "Several factors can contribute to overthinking. Difficult past experiences, unresolved emotions, repeated failures, loneliness, relationship conflicts, or major life changes can all make the mind more vulnerable to excessive thinking. A lack of physical activity or meaningful engagement can also leave more room for worries to grow unchecked.",

        "The mechanism of overthinking is often simple. A normal concern enters the mind, but instead of passing naturally, it is analyzed repeatedly from every possible angle. Each cycle generates new fears, creating an endless loop that becomes increasingly disconnected from reality. Rather than producing clarity, overthinking creates confusion and emotional distress.",

        "Breaking this cycle requires conscious effort. Learning to recognize negative thoughts without treating them as facts is an important first step. Regular physical activity, maintaining a structured daily routine, spending time with supportive people, practicing mindfulness, and limiting unnecessary rumination can all help reduce the intensity of overthinking. If these thoughts begin interfering with everyday life, seeking guidance from a qualified mental health professional can provide effective support and coping strategies.",

        "Overthinking is not a sign of weakness or failure—it is a common human experience. By understanding how it develops and learning healthier ways to respond to our thoughts, we can reduce its impact on our lives. The goal is not to stop thinking altogether, but to develop balanced thinking that allows us to make decisions, enjoy the present, and protect our emotional well-being."
        ],

        quote: {
            text:
            "You don't have to believe every thought that enters your mind. Thoughts are not facts, and learning to question them is the first step toward emotional freedom.",
            author: "Dr. Malveeka Rao"
        },

        practicesTitle: "Practical Steps to Manage Overthinking",

        practices: [
            {
                title: "Challenge Negative Thoughts",
                desc: "Pause before accepting every thought as true. Ask yourself whether it is based on evidence or assumptions."
            },
            {
                title: "Stay Physically Active",
                desc: "Exercise reduces stress hormones, improves mood, and interrupts repetitive thought patterns."
            },
            {
                title: "Practice Mindfulness",
                desc: "Focus on the present moment through breathing exercises, meditation, or simple awareness techniques."
            },
            {
                title: "Maintain a Healthy Routine",
                desc: "A structured day with proper sleep, meals, work, and leisure reduces the mental space available for excessive worrying."
            },
            {
                title: "Seek Professional Support",
                desc: "If overthinking begins affecting your relationships, work, or daily life, consult a qualified mental health professional."
            }
        ],

        disclaimer:
            "This article is intended for educational purposes only and should not be considered a substitute for professional psychological assessment, diagnosis, or treatment. If you are experiencing persistent emotional distress, please seek support from a qualified mental health professional."
    },

    {
        slug: "true-meaning-of-baddie",

        title:
            "'Baddie' होने का असली मतलब क्या है? रील और रीस की अंधी दौड़ से बाहर आने की जरूरत",

        category: "Self Care",

        author: "Dr. Malveeka Rao",

        publishedAt: "2026-08-03",

        readTime: "7 min read",

        excerpt:
            "आज की सोशल मीडिया संस्कृति में 'Baddie' शब्द का अर्थ बदल गया है। जानिए असली मानसिक मजबूती, आत्मसम्मान और दिखावे के बीच का अंतर।",

        image: "/images/blogs/baddie.png",

        featured: false,

        content: [
            "आजकल सोशल मीडिया की रील्स और यूथ की जुबान पर एक शब्द बहुत छाया हुआ है—'Baddie'। अगर आप किसी से पूछें कि Baddie कौन है, तो अक्सर जवाब मिलता है—'वो लड़की जो किसी से परमिशन नहीं मांगती, जो अपनी शर्तों पर जीती है, जिसे इस बात की परवाह नहीं कि लोग क्या कहेंगे।' सुनने में यह परिभाषा काफी आकर्षक लगती है और आज की युवा पीढ़ी को अपनी ओर खींचती भी है। लेकिन यहीं सबसे बड़ी गलतफहमी पैदा हो जाती है।",

            "As a Clinical Psychotherapist, जब मैं युवाओं को इस कॉन्सेप्ट को गलत तरीके से अपनाते हुए देखती हूँ, तो यह सोचने की जरूरत महसूस होती है कि आखिर हम अपनी आने वाली पीढ़ी को किस दिशा में ले जा रहे हैं। आइए बहुत आसान भाषा में समझते हैं कि असली 'Baddie' होना क्या है और आज की सोशल मीडिया संस्कृति ने इसका अर्थ कैसे बदल दिया है।",

            "आज बहुत से युवा यह मान बैठे हैं कि बदतमीजी, अकड़, दूसरों की परवाह न करना और हर समय 'Attitude' दिखाना ही Confidence है। कुछ लोग महंगे कपड़े, ब्रांडेड लाइफस्टाइल, मेकअप, सिगरेट या शराब के साथ तस्वीरें डालने को ही Bold Personality समझने लगे हैं। वहीं कुछ लोग परिवार की जिम्मेदारियों और बड़ों के सम्मान को नजरअंदाज करके उसे Modern Thinking का नाम दे देते हैं।",

            "लेकिन सच यह है कि ऐसा व्यवहार अक्सर आत्मविश्वास नहीं बल्कि अंदर छिपी हुई Insecurity, डर और लगातार मिलने वाली External Validation की जरूरत को दर्शाता है। अगर किसी व्यक्ति को हर समय खुद को साबित करना पड़े कि वह कितना Cool या Strong है, तो वह भीतर से अभी भी दूसरों की स्वीकृति पर निर्भर है।",

            "असल 'Baddie' वह है जो Mentally Strong और Emotionally Balanced हो। वह Healthy Boundaries बनाना जानती है। वह Toxic लोगों और रिश्तों को बिना किसी अपराधबोध के 'No' कह सकती है, लेकिन कभी किसी का अनादर नहीं करती।",

            "वह अपनी Freedom का आनंद लेती है, लेकिन अपने फैसलों की Accountability भी पूरी जिम्मेदारी के साथ स्वीकार करती है। उसके लिए Career, Family, Personal Growth और Self-Respect केवल शब्द नहीं बल्कि जीवन के महत्वपूर्ण स्तंभ होते हैं।",

            "ऐसी महिला को इस बात की चिंता नहीं होती कि लोग उसके बारे में क्या सोच रहे हैं। उसकी प्राथमिकता अपनी Mental Peace, Emotional Stability और Self-Respect होती है, न कि समाज को प्रभावित करने का दिखावा। वह अंदर से दयालु, संवेदनशील और Empathetic होती है क्योंकि असली ताकत कभी क्रूर नहीं होती।",

            "आज की पीढ़ी अपनी पहचान बनाना चाहती है और यह बिल्कुल स्वाभाविक है। बदलाव भी जीवन का हिस्सा है। लेकिन True Freedom और Recklessness के बीच एक बहुत पतली रेखा होती है। दूसरों को नीचा दिखाकर, जिम्मेदारियों से भागकर या केवल दिखावे के लिए अलग बनने की कोशिश करके कोई मजबूत व्यक्तित्व नहीं बनता।",

            "असली स्वैग तब दिखाई देता है जब व्यक्ति अंदर से शांत, आत्मनिर्भर, जिम्मेदार और अपने मूल्यों पर दृढ़ हो। किसी और की कॉपी बनने की आवश्यकता नहीं है। सबसे बड़ी खूबी है एक बेहतर, संतुलित और Grounded इंसान बनना।",

            "आइए, इस ट्रेंड को केवल सोशल मीडिया का दिखावा न बनने दें। इसे True Mental Strength, Authentic Self-Respect और Healthy Personality का प्रतीक बनाएं।"
        ],

        quote: {
            text:
            "True confidence is silent. It doesn't need to prove itself through attitude, appearance, or rebellion. Real strength lies in self-respect, responsibility, and inner peace.",
            author: "Dr. Malveeka Rao"
        },

        practicesTitle: "Signs of a Truly Strong Personality",

        practices: [
            {
            title: "Healthy Boundaries",
            desc:
                "Learn to say 'No' without guilt while still respecting others."
            },
            {
            title: "Freedom with Accountability",
            desc:
                "Enjoy your independence while taking responsibility for your decisions."
            },
            {
            title: "Protect Your Mental Peace",
            desc:
                "Stop seeking constant approval. Prioritize your emotional well-being over public opinion."
            },
            {
            title: "Kindness is Strength",
            desc:
                "Compassion and empathy are signs of confidence, not weakness."
            }
        ],

        disclaimer:
            "This article is intended for educational and awareness purposes only. Social media trends should never define your self-worth or identity. If comparison, self-doubt, or emotional distress begin affecting your daily life, consider seeking guidance from a qualified mental health professional."
    },

    {
        slug: "choosing-a-life-partner-not-a-controller",

        title:
            "शादी का सही चुनाव: क्या आप एक पार्टनर चुन रहे हैं या एक 'कंट्रोलर'?",

        category: "NGO News",

        author: "Dr. Malveeka Rao",

        publishedAt: "2026-08-03",

        readTime: "8 min read",

        excerpt:
            "शादी केवल एक रिश्ता नहीं, बल्कि जीवन की सबसे महत्वपूर्ण साझेदारी है। जानिए किन 'Red Flags' को पहचानना जरूरी है ताकि आपका रिश्ता सम्मान, विश्वास और मानसिक सुरक्षा पर आधारित हो।",

        image: "/images/blogs/prewed.jpeg",

        featured: false,

        content: [
            "विवाह जीवन के सबसे महत्वपूर्ण निर्णयों में से एक है। एक Clinical Psychotherapist और Life Coach के रूप में पिछले 25 वर्षों में मैंने अनगिनत रिश्तों को करीब से समझा है। अपने Pre-wed Grooming Sessions के दौरान मैं देखती हूँ कि अधिकांश जोड़े एक सुंदर भविष्य का सपना लेकर आते हैं। इन सत्रों का उद्देश्य केवल शादी की तैयारी नहीं, बल्कि Responsibility Sharing, Mutual Understanding और Healthy Adjustment की मजबूत नींव तैयार करना होता है।",

            "लेकिन इसी प्रक्रिया के दौरान कई ऐसे Red Flags सामने आते हैं जिन्हें यदि समय रहते नहीं पहचाना गया, तो वही रिश्ता आगे चलकर Toxic Relationship का रूप ले सकता है। इसलिए शादी से पहले केवल प्यार ही नहीं, बल्कि व्यक्ति के व्यवहार, सोच और मूल्यों को समझना भी उतना ही आवश्यक है।",

            "बहुत से लोग Pre-wedding Counselling को केवल एक औपचारिक प्रक्रिया समझते हैं, जबकि वास्तव में यह आपके Compatibility, Communication और Mindset को समझने का सबसे अच्छा अवसर होता है। कई बार व्यक्ति भावनात्मक निकटता का फायदा उठाकर आपके अतीत, असुरक्षाओं या निजी अनुभवों को जानने की कोशिश करता है। सबसे महत्वपूर्ण बात यह है कि क्या वह भविष्य में उन्हीं बातों का इस्तेमाल Gaslighting, शक या Control करने के लिए करेगा।",

            "शादी से पहले का समय एक-दूसरे को जज करने का नहीं, बल्कि समझने और Observe करने का समय है। इस दौरान ध्यान दें कि असहमति होने पर आपका पार्टनर कैसे प्रतिक्रिया देता है। क्या वह आपकी राय का सम्मान करता है, या हर स्थिति में अपनी बात मनवाने की कोशिश करता है? यही छोटी-छोटी बातें भविष्य के रिश्ते की दिशा तय करती हैं।",

            "एक स्वस्थ रिश्ते की पहचान Healthy Boundaries और Mutual Respect से होती है। यदि कोई व्यक्ति आज ही आपके दोस्तों, पहनावे, करियर, परिवार या व्यक्तिगत निर्णयों पर अनावश्यक नियंत्रण स्थापित करने की कोशिश कर रहा है, तो यह केवल Care नहीं बल्कि भविष्य के Domination का संकेत हो सकता है।",

            "Emotional Maturity किसी भी सफल विवाह की सबसे मजबूत नींव है। यदि आपका साथी आपकी भावनाओं को समझने के बजाय आपकी कमजोरियों को हथियार बनाकर Emotional Manipulation या Emotional Torture करता है, तो यह प्रेम नहीं बल्कि एक Emotional Trap है। रिश्ते में सुरक्षा का अनुभव होना चाहिए, डर का नहीं।",

            "विवाह केवल दो व्यक्तियों का मिलन नहीं बल्कि दो परिवारों, दो संस्कृतियों और दो जीवन शैलियों का समन्वय है। इसलिए Responsibility Sharing और Adjustment की क्षमता अत्यंत आवश्यक है। यदि दोनों साथी जिम्मेदारियों को साझा करने और एक-दूसरे के विकास में सहयोग देने के लिए तैयार हैं, तभी रिश्ता लंबे समय तक स्वस्थ बना रह सकता है।",

            "अक्सर कई लोग समाज, परिवार या बदनामी के डर से Toxic Patterns को स्वीकार करते रहते हैं। लेकिन मेरा स्पष्ट संदेश है कि केवल सामाजिक दबाव के कारण ऐसे रिश्ते में बने रहना उचित नहीं है। यदि Counselling के दौरान यह स्पष्ट हो जाए कि सामने वाला व्यक्ति अपने व्यवहार में बदलाव लाने के लिए तैयार नहीं है, तो उस रिश्ते पर पुनर्विचार करना अपने आत्मसम्मान और मानसिक स्वास्थ्य के लिए आवश्यक हो सकता है।",

            "मेरे Pre-wed Grooming Program का उद्देश्य केवल शादी करवाना नहीं बल्कि जीवनभर के स्वस्थ रिश्तों की नींव रखना है। हम जोड़ों को सिखाते हैं कि पहले Formal Bonding बनाए रखें, व्यक्ति के Thought Process को समझें, और तभी Emotional Investment करें जब आपको विश्वास हो जाए कि सामने वाला आपकी Dignity, Values और Individuality का सम्मान करता है।",

            "अंततः शादी कोई समझौता नहीं बल्कि एक साझेदारी है। इसमें नियंत्रण की नहीं, सहयोग और सम्मान की आवश्यकता होती है। अपने रिश्ते को परफेक्ट बनाने की कोशिश में अपनी पहचान, आत्मसम्मान और मानसिक शांति को कभी न खोएँ। सही जीवनसाथी वही है जो आपको बदलने की कोशिश नहीं करता, बल्कि आपके साथ मिलकर बेहतर जीवन बनाने का प्रयास करता है।"
        ],

        quote: {
            text:
            "Marriage is not about finding someone who controls your life. It is about choosing someone who respects your individuality, shares responsibilities, and grows with you.",
            author: "Dr. Malveeka Rao"
        },

        practicesTitle: "Healthy Foundations Before Marriage",

        practices: [
            {
            title: "Observe, Don't Rush",
            desc:
                "Use the engagement period to understand your partner's values, behavior, and emotional maturity instead of making quick assumptions."
            },
            {
            title: "Respect Healthy Boundaries",
            desc:
                "A caring partner respects your personal space, friendships, career choices, and individuality without trying to control them."
            },
            {
            title: "Identify Emotional Manipulation",
            desc:
                "Never ignore signs of gaslighting, excessive jealousy, emotional blackmail, or controlling behavior before marriage."
            },
            {
            title: "Share Responsibilities",
            desc:
                "Successful marriages are built on teamwork, mutual respect, accountability, and willingness to adjust together."
            },
            {
            title: "Choose Self-Respect First",
            desc:
                "Never stay in an unhealthy relationship because of social pressure or fear of judgment. Your emotional well-being always comes first."
            }
        ],

        disclaimer:
            "This article is intended for educational and awareness purposes only. Every relationship is unique, and decisions regarding marriage should be made after thoughtful consideration. If you experience emotional manipulation, controlling behavior, or relationship distress, seek guidance from a qualified mental health professional."
    },

    {
        slug: "poetry-body-and-woman",

        title:
            "कविता, देह और स्त्री: क्या यही प्रेम की संपूर्ण परिभाषा है?",

        category: "Psychology",

        author: "Dr. Malveeka Rao",

        publishedAt: "2026-08-10",

        readTime: "6 min read",

        excerpt:
            "प्रेम में देह, आकर्षण और शृंगार का होना अस्वाभाविक नहीं है। लेकिन जब प्रेम की पूरी अभिव्यक्ति स्त्री की देह तक सीमित हो जाए, तो स्त्री के सम्मान, भावनाओं और व्यक्तित्व को लेकर सवाल उठना स्वाभाविक है।",

        image: "/images/blogs/poetry-body-woman.png",

        featured: false,

        content: [
            "साहित्य हमेशा से मानवीय भावनाओं, संवेदनाओं और समाज का दर्पण रहा है। प्रेम में देह, आकर्षण और शृंगार का होना अस्वाभाविक नहीं है, लेकिन जब प्रेम की पूरी अभिव्यक्ति केवल किसी शारीरिक अंग के उपभोग और उसके गणितीय हिसाब-किताब तक सीमित हो जाए, तो एक मनोवैज्ञानिक और स्त्री दृष्टिकोण से असहजता होना स्वाभाविक है। हाल ही में चर्चित हुई कविता 'दो दिन' में जो बात सबसे ज्यादा खटकती है, वह यह कि इसमें स्त्री को एक जीवित, सोचने-समझने वाले इंसान के रूप में नहीं, बल्कि केवल एक देह के टुकड़े की तरह देखा गया है।",

            "कविता की शुरुआत चाय, धूप, तहरी और पायल जैसे सुंदर घरेलू बिंबों से होती है, लेकिन अचानक 'दो दिन तो तुम्हारे दो स्तन ही ले लेंगे' जैसी पंक्ति पूरी कविता के भाव को गिरा देती है। यहाँ प्रेम का मिलन या विरह की तड़प नहीं दिखती, बल्कि पुरुष की नजर से स्त्री के शरीर को मापने का एक सपाट और अपरिपक्व नजरिया सामने आता है। जिस रिश्ते में भावनात्मक गहराई, संवाद और रूहानी जुड़ाव होना चाहिए था, वहाँ केवल शारीरिक अंगों की प्राथमिकता रह जाती है। यह स्त्री के संपूर्ण व्यक्तित्व को नकारकर उसे केवल एक वस्तु (Objectification) में बदलने जैसा है।",

            "इसके अलावा, इस तरह की रचनाओं के समर्थन में जब अतार्किक दलीलें दी जाती हैं—जैसे शृंगारिक आकर्षण की तुलना जबरन 'माँ के ममत्व और दूध' से करना या महिलाओं के कपड़ों और सजने-संवरने पर ही सवाल उठा देना—तो बात और भी बिगड़ जाती है। किसी कविता का विरोध इसलिए नहीं होता कि उसमें कौन सा शब्द लिखा गया है, बल्कि इसलिए होता है कि उस शब्द के पीछे की सोच कितनी संवेदनहीन है।",

            "प्रेम केवल आकर्षण या देह तक सीमित नहीं होना चाहिए। स्त्री सम्मान, प्रेम में सम्मान, संवेदनशीलता, स्त्री भावनाओं का सम्मान, नैतिकता, आत्मीयता और संपूर्णता होनी चाहिए। किसी व्यक्ति के शरीर को उसकी पूरी पहचान मान लेना उसके व्यक्तित्व, भावनाओं और मानवीय गरिमा को नजरअंदाज करना है।",

            "एक स्वस्थ और आत्मीय रिश्ते में शारीरिक आकर्षण अपनी जगह रखता है, लेकिन उसके साथ भावनात्मक जुड़ाव, संवाद, सहमति, सम्मान और संवेदनशीलता भी उतने ही महत्वपूर्ण हैं। प्रेम में किसी व्यक्ति को केवल उसके शरीर के हिस्सों में बांटकर देखना उस रिश्ते की गहराई को कम कर देता है।",

            "हम जिस तरह से प्रेम, स्त्री और देह को साहित्य और लोकप्रिय संस्कृति में प्रस्तुत करते हैं, उसका प्रभाव समाज की सोच पर भी पड़ता है। इसलिए जरूरी है कि हम अभिव्यक्ति की स्वतंत्रता के साथ-साथ उसके पीछे छिपी दृष्टि पर भी विचार करें। सवाल केवल यह नहीं होना चाहिए कि किसी रचना में क्या कहा गया है, बल्कि यह भी होना चाहिए कि वह किसी व्यक्ति की गरिमा और संपूर्ण व्यक्तित्व को किस नजर से देखती है।",

            "अंततः प्रेम की सुंदरता केवल देह में नहीं, बल्कि उस आत्मीयता में है जो दो व्यक्तियों को एक-दूसरे को समझने, सम्मान देने और स्वीकार करने की क्षमता देती है। स्त्री को केवल एक देह के रूप में देखने के बजाय उसे उसकी भावनाओं, विचारों, इच्छाओं, सपनों और संपूर्ण व्यक्तित्व के साथ देखना ही प्रेम और संबंधों की अधिक संवेदनशील समझ है।"
        ],

        quote: {
            text:
            "स्त्री सम्मान, प्रेम में सम्मान, संवेदनशीलता, स्त्री भावनाओं का सम्मान, नैतिकता, आत्मीयता और संपूर्णता होनी चाहिए, केवल उपभोग की भाषा नहीं।",
            author: "Dr. Malveeka Rao"
        },

        practicesTitle: "A Healthy Understanding of Love",

        practices: [
            {
            title: "See the Whole Person",
            desc:
                "किसी व्यक्ति को केवल उसके शरीर या बाहरी रूप से नहीं, बल्कि उसकी भावनाओं, विचारों, इच्छाओं और व्यक्तित्व की संपूर्णता के साथ समझें।"
            },
            {
            title: "Respect and Sensitivity",
            desc:
                "प्रेम और आकर्षण के साथ सम्मान और संवेदनशीलता भी जरूरी है। किसी की गरिमा को कभी केवल शारीरिक आकर्षण से कम न आँकें।"
            },
            {
            title: "Emotional Connection Matters",
            desc:
                "एक स्वस्थ रिश्ते में शारीरिक आकर्षण के साथ संवाद, भावनात्मक जुड़ाव, आत्मीयता और समझ भी महत्वपूर्ण होती है।"
            },
            {
            title: "Look Beyond Objectification",
            desc:
                "किसी व्यक्ति को उसके शरीर के किसी एक हिस्से तक सीमित करके देखने के बजाय उसके पूरे व्यक्तित्व और मानवीय गरिमा को महत्व दें।"
            }
        ],

        disclaimer:
            "यह लेख साहित्य, प्रेम और स्त्री के चित्रण पर एक मनोवैज्ञानिक और सामाजिक दृष्टिकोण प्रस्तुत करता है। इसका उद्देश्य किसी व्यक्ति या रचना के संबंध में अंतिम निर्णय देना नहीं, बल्कि प्रेम, सम्मान, संवेदनशीलता और मानवीय गरिमा पर विचार करने के लिए प्रेरित करना है।"
    },

    {
        slug: "youth-awareness-alcohol-harmful-effects",

        title:
            "Protecting Our Youth: Awareness Workshop on the Harmful Effects of Alcohol",

        category: "NGO News",

        author: "Arshita Navin",

        publishedAt: "2026-08-12",

        readTime: "4 min read",

        excerpt:
            "Dr. Malveeka Rao recently participated as a speaker at an awareness workshop on the prevention and harmful effects of alcohol among youth at Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.",

        image: "/images/blogs/alcohol-awareness.png",

        featured: false,

        content: [
            "Recently, I had the opportunity to participate in a highly important workshop on 'Prevention, Awareness and Protection from the Harmful Effects of Alcohol among Youth' at Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.",

            "I sincerely thank Mr. Om Prakash Mishra for inviting me as a speaker for this programme, which was organized on 7 August 2026 by Consumer Voice, Consumer Guild, and the Department of Social Work.",

            "During the workshop, I interacted with young people and explained to them in detail the serious harmful effects of alcohol consumption. We discussed not only the reasons behind alcohol use, but also placed special emphasis on practical ways to lead life in a positive direction and stay away from such harmful habits.",

            "Creating awareness among young people is an important step towards protecting their physical, emotional, and social well-being. Open conversations can help young people understand the consequences of harmful habits and make more informed choices about their lives.",

            "The youth are the future of our nation, and keeping them aware, informed, and protected is a collective responsibility that belongs to all of us."
        ],

        quote: {
            text:
            "The youth are the future of our nation, and keeping them aware, informed, and protected is a collective responsibility that belongs to all of us.",
            author: "Dr. Malveeka Rao"
        },

        practicesTitle: "Building Awareness Among Young People",

        practices: [
            {
            title: "Create Awareness",
            desc:
                "Open and informed conversations can help young people understand the harmful effects associated with alcohol consumption."
            },
            {
            title: "Understand the Reasons",
            desc:
                "Understanding why young people may be drawn towards harmful habits is an important part of prevention and awareness."
            },
            {
            title: "Choose Positive Alternatives",
            desc:
                "Encouraging healthy activities and positive ways of spending time can help young people move towards healthier lifestyles."
            },
            {
            title: "Stay Informed and Supported",
            desc:
                "Young people should have access to reliable information and supportive environments where they can openly discuss their concerns and choices."
            }
        ],

        disclaimer:
            "This article is intended for educational and awareness purposes. It highlights the importance of awareness and prevention among young people and should not be considered a substitute for professional medical or psychological advice."
    },


];



