/*
  All the conversations live in this file. index.html just displays them.

  Each line of dialogue is:  ["who", "hanzi|pinyin/hanzi|pinyin/...", "English"]
    - chunks are separated by  /
    - each chunk is  characters|pinyin
    - punctuation has nothing after the bar:  ,|  。|  ?|  !|
  Notes are:  ["word", "pinyin", "explanation"]

  To add a story, copy one { t: ..., notes: [...] } block and paste it into a part.
  To add a part, copy a whole { title, sub, stories: [...] } block.
*/
const PARTS = [
{
  title: "With friends",
  sub: "Hanging out with someone your age. The most casual it gets.",
  stories: [
{
  t: "接机", tp: "jiē jī", te: "Picking you up at the airport",
  scene: "You land in Beijing. Your friend said he'd meet you outside. He didn't.",
  lines: [
    ["friend", "哎|āi/!|/这儿|zhèr/呢|ne/!|", "Hey! Over here!"],
    ["you", "我靠|wǒ kào/,|/你|nǐ/真|zhēn/来|lái/了|le/啊|a/。|", "Damn, you actually came."],
    ["friend", "那|nà/必须|bì xū/的|de/啊|a/。|", "Obviously."],
    ["you", "等|děng/很久|hěn jiǔ/了|le/吧|ba/?|", "You've been waiting a while, right?"],
    ["friend", "还行|hái xíng/,|/半|bàn/小时|xiǎo shí/。|", "It's fine. Half an hour."],
    ["you", "不好意思|bù hǎo yì si/啊|a/,|/飞机|fēi jī/晚点|wǎn diǎn/了|le/。|", "Sorry man, the flight was late."],
    ["friend", "没事儿|méi shì r/,|/正常|zhèng cháng/。|", "No worries, that's normal."],
    ["friend", "饿|è/不|bu/饿|è/?|/先|xiān/去|qù/吃|chī/点儿|diǎnr/?|", "You hungry? Wanna grab something first?"],
    ["you", "有点儿|yǒu diǎnr/。|/飞机餐|fēi jī cān/太|tài/难吃|nán chī/了|le/。|", "A bit. The plane food was terrible."],
    ["friend", "那|nà/走|zǒu/吧|ba/,|/我|wǒ/车|chē/在|zài/外面|wài mian/。|", "Let's go then, my car's outside."],
    ["you", "你|nǐ/还|hái/开车|kāi chē/了|le/?|/牛|niú/啊|a/。|", "You drive now? Nice."],
    ["friend", "去年|qù nián/考|kǎo/的|de/驾照|jià zhào/。|", "Got my license last year."]
  ],
  notes: [
    ["我靠", "wǒ kào", "“Damn” / “no way.” Mild, extremely common among young people. Don't say it to someone's parents."],
    ["那必须的", "nà bì xū de", "“Obviously” / “of course.” Northern, very young-sounding. Great one to own."],
    ["还行", "hái xíng", "“It's fine / not bad.” Your default answer to almost anything."],
    ["没事儿", "méi shì r", "“No worries.” The 儿 on the end is Beijing. Add it there and you sound local."],
    ["牛", "niú", "Literally “cow,” means “badass / impressive.” 牛啊 = “nice, respect.”"]
  ]
},
{
  t: "吃啥", tp: "chī shá", te: "Figuring out what to eat",
  scene: "The eternal conversation. Nobody wants to decide.",
  lines: [
    ["friend", "晚上|wǎn shang/吃|chī/啥|shá/?|", "What are we eating tonight?"],
    ["you", "都行|dōu xíng/,|/你|nǐ/定|dìng/。|", "Anything. You pick."],
    ["friend", "别|bié/啊|a/,|/你|nǐ/说|shuō/。|", "Come on, you say."],
    ["you", "那|nà/…|/火锅|huǒ guō/?|", "Then... hotpot?"],
    ["friend", "行|xíng/啊|a/,|/辣|là/的|de/还是|hái shì/不|bú/辣|là/的|de/?|", "Sure. Spicy or not spicy?"],
    ["you", "微辣|wēi là/吧|ba/,|/我|wǒ/不太|bú tài/能|néng/吃辣|chī là/。|", "Mild. I can't really handle spice."],
    ["friend", "你|nǐ/这|zhè/也|yě/太|tài/不行|bù xíng/了|le/。|", "You're so weak."],
    ["you", "哈哈哈|hā hā hā/我|wǒ/认|rèn/。|", "Hahaha, fair, I admit it."],
    ["friend", "我|wǒ/订|dìng/个|ge/位|wèi/,|/七点|qī diǎn/行|xíng/吗|ma/?|", "I'll book a table. Seven work?"],
    ["you", "行|xíng/,|/我|wǒ/先|xiān/回|huí/酒店|jiǔ diàn/洗|xǐ/个|ge/澡|zǎo/。|", "Yeah. I'll go shower at the hotel first."],
    ["friend", "那|nà/七点|qī diǎn/楼下|lóu xià/见|jiàn/。|", "Seven, downstairs then."]
  ],
  notes: [
    ["啥", "shá", "Casual spoken version of 什么. 吃啥 sounds way more natural than 吃什么."],
    ["都行 / 你定", "dōu xíng / nǐ dìng", "“Anything / you decide.” You will use this constantly."],
    ["我认", "wǒ rèn", "“Fair, I admit it.” Young internet-flavoured slang, very current."],
    ["洗个澡", "xǐ ge zǎo", "Sticking 个 inside a verb makes it casual and quick. 吃个饭, 睡个觉, 看个电影."],
    ["行", "xíng", "“OK / sure / works.” Use it instead of 好的, which is a bit stiff."]
  ]
},
{
  t: "买单", tp: "mǎi dān", te: "Fighting over the bill",
  scene: "Dinner's over. This is a real fight and you are expected to put up a struggle.",
  lines: [
    ["you", "服务员|fú wù yuán/,|/买单|mǎi dān/!|", "Waiter, check please!"],
    ["friend", "哎|āi/你|nǐ/干嘛|gàn má/,|/我来|wǒ lái/我来|wǒ lái/。|", "Hey what are you doing, I got it, I got it."],
    ["you", "别别别|bié bié bié/,|/这|zhè/顿|dùn/我|wǒ/请|qǐng/。|", "No no no, this one's on me."],
    ["friend", "你|nǐ/刚|gāng/来|lái/,|/哪能|nǎ néng/让|ràng/你|nǐ/请|qǐng/。|", "You just got here, no way I'm letting you pay."],
    ["you", "那|nà/AA|/吧|ba/?|", "Split it then?"],
    ["friend", "AA|/什么|shén me/呀|ya/,|/太|tài/见外|jiàn wài/了|le/。|", "Split what? Don't be like that."],
    ["you", "好吧|hǎo ba/好吧|hǎo ba/,|/那|nà/下次|xià cì/我|wǒ/请|qǐng/。|", "Fine, fine. Next one's on me."],
    ["friend", "这|zhè/还|hái/差不多|chà bu duō/。|", "That's more like it."],
    ["you", "多少钱|duō shao qián/啊|a/?|", "How much was it?"],
    ["friend", "别|bié/问|wèn/了|le/,|/没|méi/多少|duō shao/。|", "Don't ask. It wasn't much."],
    ["you", "我|wǒ/微信|wēi xìn/转|zhuǎn/你|nǐ/。|", "I'll WeChat you the money."],
    ["friend", "你|nǐ/敢|gǎn/转|zhuǎn/我|wǒ/就|jiù/拉黑|lā hēi/你|nǐ/。|", "You send me money and I'm blocking you."]
  ],
  notes: [
    ["我来", "wǒ lái", "“I got it.” Works for paying, carrying, doing anything. Say it twice, fast."],
    ["这顿我请", "zhè dùn wǒ qǐng", "“This meal's on me.” 顿 is the measure word for meals."],
    ["见外", "jiàn wài", "Treating a close friend like a stranger. 太见外了 = “don't be like that, we're friends.”"],
    ["这还差不多", "zhè hái chà bu duō", "“Now that's more like it.” Teasing, warm."],
    ["拉黑", "lā hēi", "To block someone on WeChat. Used jokingly all the time."],
    ["AA", "", "Splitting the bill. Said as English letters. AA制 is the full form."]
  ]
},
{
  t: "打车", tp: "dǎ chē", te: "Getting a ride",
  scene: "Standing on the street. Your friend is ordering a DiDi.",
  lines: [
    ["friend", "我|wǒ/叫|jiào/个|ge/车|chē/啊|a/。|", "I'll order a car."],
    ["you", "这儿|zhèr/打车|dǎ chē/好|hǎo/打|dǎ/吗|ma/?|", "Easy to get a ride around here?"],
    ["friend", "还行|hái xíng/,|/等|děng/个|ge/五六|wǔ liù/分钟|fēn zhōng/。|", "It's fine, like five or six minutes."],
    ["friend", "来|lái/了|le/,|/那|nà/个|ge/白色|bái sè/的|de/。|", "There it is, the white one."],
    ["you", "师傅|shī fu/好|hǎo/。|", "Hey, driver."],
    ["driver", "去|qù/哪儿|nǎr/啊|a/?|", "Where to?"],
    ["friend", "三里屯|sān lǐ tún/,|/谢谢|xiè xie/师傅|shī fu/。|", "Sanlitun, thanks."],
    ["driver", "好嘞|hǎo lei/。|", "You got it."],
    ["you", "大概|dà gài/多久|duō jiǔ/?|", "Roughly how long?"],
    ["friend", "二十|èr shí/分钟|fēn zhōng/吧|ba/,|/不|bù/堵|dǔ/的话|de huà/。|", "Twenty minutes or so, if there's no traffic."],
    ["you", "北京|běi jīng/不是|bú shì/天天|tiān tiān/堵|dǔ/吗|ma/?|", "Isn't Beijing jammed every day?"],
    ["friend", "现在|xiàn zài/还行|hái xíng/,|/过|guò/了|le/六点|liù diǎn/就|jiù/完|wán/了|le/。|", "Right now it's fine. After six, forget it."]
  ],
  notes: [
    ["师傅", "shī fu", "What you call any driver, plumber, or workman. Never 先生. Always 师傅."],
    ["好嘞", "hǎo lei", "“You got it.” Warmer and more spoken than 好的. Drivers and shop staff say this constantly."],
    ["堵", "dǔ", "Traffic jam. 堵车 is the full form but people just say 堵."],
    ["…的话", "de huà", "“If…” Tack it on the end of the condition. 不堵的话 = “if there's no traffic.”"],
    ["就完了", "jiù wán le", "“Then it's over / then you're screwed.” Casual doom."],
    ["叫个车", "jiào ge chē", "“Order a car.” 打车 is hailing generally, 叫车 is ordering one on the app."]
  ]
},
{
  t: "喝点儿", tp: "hē diǎnr", te: "Going out for a drink",
  scene: "It's 9pm. Your friend is texting you.",
  lines: [
    ["friend", "今晚|jīn wǎn/出去|chū qù/喝|hē/点儿|diǎnr/?|", "Wanna go out for a drink tonight?"],
    ["you", "走|zǒu/啊|a/,|/去|qù/哪儿|nǎr/?|", "Let's go. Where?"],
    ["friend", "附近|fù jìn/有|yǒu/个|ge/小|xiǎo/酒吧|jiǔ bā/,|/挺|tǐng/安静|ān jìng/的|de/。|", "There's a little bar nearby, pretty quiet."],
    ["you", "行|xíng/,|/我|wǒ/不太|bú tài/能|néng/喝|hē/啊|a/,|/说好|shuō hǎo/了|le/。|", "OK, but I can't drink much, just saying now."],
    ["friend", "知道|zhī dào/知道|zhī dào/,|/意思|yì si/意思|yì si/就|jiù/行|xíng/。|", "I know, I know. Just a token amount."],
    ["friend", "来|lái/,|/走|zǒu/一个|yí ge/。|", "Come on, cheers."],
    ["you", "干杯|gān bēi/!|", "Cheers!"],
    ["friend", "你|nǐ/酒量|jiǔ liàng/可以|kě yǐ/啊|a/。|", "You can hold your drink, not bad."],
    ["you", "就|jiù/这|zhè/一|yì/杯|bēi/,|/再|zài/喝|hē/我|wǒ/就|jiù/断片|duàn piàn/了|le/。|", "Just this one. Any more and I black out."],
    ["friend", "哈哈|hā hā/行|xíng/,|/那|nà/咱|zán/喝|hē/完|wán/就|jiù/撤|chè/。|", "Haha OK, we'll head out after this one."]
  ],
  notes: [
    ["走一个", "zǒu yí ge", "“Let's take one.” What you say instead of 干杯 among friends. Very natural."],
    ["意思意思", "yì si yì si", "Doing just enough to be polite. Drinking a token amount, giving a small gift."],
    ["酒量", "jiǔ liàng", "Your alcohol tolerance. 酒量好 / 酒量不行. You'll get asked about this."],
    ["断片", "duàn piàn", "To black out from drinking. Literally “the film cuts.”"],
    ["撤", "chè", "“Head out / bail.” 我先撤了 = “I'm gonna take off.”"],
    ["咱", "zán", "“Us” including you. Warmer than 我们. Northern and very friendly."]
  ]
},
{
  t: "你有对象没", tp: "nǐ yǒu duì xiàng méi", te: "The question you will get asked",
  scene: "Sooner or later, someone asks. Usually within ten minutes.",
  lines: [
    ["friend", "哎|āi/,|/你|nǐ/现在|xiàn zài/有|yǒu/对象|duì xiàng/没|méi/?|", "Hey, you seeing anyone right now?"],
    ["you", "没有|méi yǒu/啊|a/,|/单|dān/着|zhe/呢|ne/。|", "Nope, still single."],
    ["friend", "你|nǐ/都|dōu/二十四|èr shí sì/了|le/吧|ba/?|", "You're twenty four already, right?"],
    ["you", "二十四|èr shí sì/怎么|zěn me/了|le/,|/还|hái/小|xiǎo/呢|ne/。|", "What about twenty four? That's still young."],
    ["friend", "也是|yě shì/,|/现在|xiàn zài/都|dōu/不|bù/着急|zháo jí/。|", "True. Nobody's in a rush these days."],
    ["you", "我|wǒ/妈|mā/天天|tiān tiān/催|cuī/,|/烦|fán/死|sǐ/了|le/。|", "My mom nags me every single day. Driving me nuts."],
    ["friend", "哈哈|hā hā/,|/天下|tiān xià/的|de/妈|mā/都|dōu/一样|yí yàng/。|", "Haha, moms are the same everywhere."],
    ["you", "你|nǐ/呢|ne/?|", "What about you?"],
    ["friend", "我|wǒ/谈|tán/着|zhe/呢|ne/,|/两|liǎng/年|nián/了|le/。|", "I'm seeing someone. Two years now."],
    ["you", "可以|kě yǐ/啊|a/,|/什么|shén me/时候|shí hou/结|jié/?|", "Nice. When's the wedding?"],
    ["friend", "别|bié/提|tí/了|le/,|/没|méi/钱|qián/。|", "Don't even. No money."],
    ["you", "懂|dǒng/了|le/,|/躺平|tǎng píng/吧|ba/。|", "Say no more. Just lie flat."]
  ],
  notes: [
    ["对象", "duì xiàng", "Boyfriend or girlfriend, the serious kind. 有对象没 is how this gets asked."],
    ["单着呢", "dān zhe ne", "“Still single.” The 着呢 makes it an ongoing state, and casual."],
    ["谈", "tán", "Short for 谈恋爱, to be dating. 我谈着呢 = “I'm seeing someone.”"],
    ["催", "cuī", "To nag someone to hurry up. Specifically what parents do about marriage."],
    ["烦死了", "fán sǐ le", "“So annoying / driving me crazy.” 死了 after an adjective is the standard intensifier."],
    ["别提了", "bié tí le", "“Don't even bring it up.” Perfect for anything mildly depressing."],
    ["躺平", "tǎng píng", "“Lying flat.” Opting out of the grind. Peak twenty-something vocabulary."]
  ]
},
{
  t: "下次再约", tp: "xià cì zài yuē", te: "Saying goodbye",
  scene: "Last night of the trip. You fly out in the morning.",
  lines: [
    ["you", "时间|shí jiān/过|guò/得|de/太|tài/快|kuài/了|le/。|", "Time went way too fast."],
    ["friend", "是|shì/啊|a/,|/感觉|gǎn jué/才|cái/来|lái/两|liǎng/天|tiān/。|", "Seriously, feels like you got here two days ago."],
    ["friend", "明天|míng tiān/几点|jǐ diǎn/的|de/飞机|fēi jī/?|", "What time's your flight tomorrow?"],
    ["you", "早上|zǎo shang/九点|jiǔ diǎn/,|/我|wǒ/得|děi/五点|wǔ diǎn/起|qǐ/。|", "Nine in the morning. I have to be up at five."],
    ["friend", "那|nà/够呛|gòu qiàng/,|/要|yào/我|wǒ/送|sòng/你|nǐ/吗|ma/?|", "Brutal. Want me to take you?"],
    ["you", "不用|bú yòng/不用|bú yòng/,|/太|tài/早|zǎo/了|le/,|/我|wǒ/打车|dǎ chē/。|", "No no, way too early. I'll grab a cab."],
    ["friend", "行|xíng/,|/那|nà/你|nǐ/到|dào/了|le/给|gěi/我|wǒ/发|fā/个|ge/消息|xiāo xi/。|", "OK. Message me when you land."],
    ["you", "必须|bì xū/的|de/。|", "For sure."],
    ["friend", "下次|xià cì/来|lái/提前|tí qián/说|shuō/,|/我|wǒ/带|dài/你|nǐ/去|qù/玩儿|wánr/。|", "Tell me ahead of time next trip, I'll show you around."],
    ["you", "一定|yí dìng/一定|yí dìng/。|/你|nǐ/也|yě/来|lái/加拿大|jiā ná dà/玩儿|wánr/啊|a/。|", "Definitely. You should come to Canada too."],
    ["friend", "好|hǎo/啊|a/,|/等|děng/我|wǒ/攒|zǎn/够|gòu/钱|qián/。|", "Would love to. Once I save up enough."],
    ["you", "那|nà/咱们|zán men/下次|xià cì/再|zài/约|yuē/。|", "Alright, we'll set something up next time."]
  ],
  notes: [
    ["够呛", "gòu qiàng", "“That's rough / that's gonna suck.” Northern, very spoken."],
    ["发个消息", "fā ge xiāo xi", "“Send a message.” On WeChat, obviously. Nobody says 短信 anymore."],
    ["必须的", "bì xū de", "“For sure / absolutely.” Same one from story 1. Now you've seen it twice."],
    ["玩儿", "wánr", "“Hang out / have fun / travel.” Adults use this constantly, it's not just for kids."],
    ["再约", "zài yuē", "“Let's make plans again.” The standard warm goodbye between friends."],
    ["攒钱", "zǎn qián", "To save up money. 攒 is the everyday word, not 储蓄."]
  ]
}
  ]
},
{
  title: "At the restaurant",
  sub: "Small family places where the 老板 takes your order, cooks, and wants to know your life story.",
  stories: [
{
  t: "几位", tp: "jǐ wèi", te: "Walking into a little restaurant",
  scene: "A tiny family-run place near your hotel. The owner is also the waiter, and the cashier.",
  lines: [
    ["owner", "来|lái/了|le/!|/几|jǐ/位|wèi/?|", "Hey, come on in! How many?"],
    ["you", "就|jiù/我|wǒ/一个|yí ge/。|", "Just me."],
    ["owner", "随便|suí biàn/坐|zuò/,|/哪儿|nǎr/都|dōu/行|xíng/。|", "Sit wherever you like."],
    ["you", "老板|lǎo bǎn/,|/有|yǒu/菜单|cài dān/吗|ma/?|", "Boss, is there a menu?"],
    ["owner", "桌上|zhuō shang/有|yǒu/码|mǎ/,|/扫|sǎo/一下|yí xià/就|jiù/能|néng/点|diǎn/。|", "There's a QR code on the table. Scan it and you can order."],
    ["you", "我|wǒ/看不懂|kàn bu dǒng/,|/能|néng/直接|zhí jiē/跟|gēn/你|nǐ/点|diǎn/吗|ma/?|", "I can't really read it. Can I just order with you?"],
    ["owner", "没问题|méi wèn tí/,|/想|xiǎng/吃|chī/点儿|diǎnr/啥|shá/?|", "No problem. What do you feel like?"],
    ["you", "来|lái/一|yí/份|fèn/宫保鸡丁|gōng bǎo jī dīng/,|/一|yì/碗|wǎn/米饭|mǐ fàn/。|", "I'll get a kung pao chicken and a bowl of rice."],
    ["owner", "要|yào/喝|hē/的|de/吗|ma/?|", "Anything to drink?"],
    ["you", "来|lái/瓶|píng/冰|bīng/可乐|kě lè/。|", "A cold Coke."],
    ["owner", "好嘞|hǎo lei/,|/马上|mǎ shàng/。|", "You got it, coming right up."],
    ["you", "不|bù/着急|zháo jí/,|/慢慢|màn màn/来|lái/。|", "No rush, take your time."]
  ],
  notes: [
    ["几位", "jǐ wèi", "“How many of you?” The first thing anyone says when you walk in. Answer with a number: 两个, 就我一个."],
    ["老板", "lǎo bǎn", "“Boss.” What you call whoever runs any small shop or restaurant, even if you have no idea who the owner is. Never wrong."],
    ["随便坐", "suí biàn zuò", "“Sit wherever.” 随便 means “whatever / as you like.” 随便看看 = “just browsing.”"],
    ["来一份 / 来瓶", "lái yí fèn / lái píng", "“I'll get a…” 来 is how people actually order. Sounds way more natural than 我要."],
    ["扫码", "sǎo mǎ", "Scanning the QR code. Ordering and paying both happen this way now, almost everywhere."],
    ["不着急，慢慢来", "bù zháo jí, màn màn lái", "“No rush, take your time.” Easy way to come across as a nice customer."]
  ]
},
{
  t: "有啥推荐", tp: "yǒu shá tuī jiàn", te: "Asking the owner what's good",
  scene: "You have no idea what half the menu is. The owner is very happy to help.",
  lines: [
    ["you", "老板|lǎo bǎn/,|/你们|nǐ men/这儿|zhèr/什么|shén me/最|zuì/好吃|hǎo chī/?|", "Boss, what's the best thing here?"],
    ["owner", "我们|wǒ men/家|jiā/招牌|zhāo pai/是|shì/红烧肉|hóng shāo ròu/,|/来|lái/的|de/人|rén/都|dōu/点|diǎn/。|", "Our signature is the braised pork. Everyone who comes in orders it."],
    ["you", "那|nà/必须|bì xū/来|lái/一个|yí ge/。|", "Then I've gotta get one."],
    ["owner", "有|yǒu/什么|shén me/忌口|jì kǒu/的|de/吗|ma/?|", "Anything you don't eat?"],
    ["you", "别|bié/放|fàng/香菜|xiāng cài/就|jiù/行|xíng/。|", "Just no cilantro."],
    ["owner", "行|xíng/。|/再|zài/来|lái/个|ge/青菜|qīng cài/?|/光|guāng/吃|chī/肉|ròu/太|tài/腻|nì/了|le/。|", "OK. Want a veggie dish too? Just meat is too heavy."],
    ["you", "有|yǒu/道理|dào lǐ/。|/哪个|nǎ ge/好|hǎo/?|", "Fair point. Which one's good?"],
    ["owner", "蒜蓉|suàn róng/西兰花|xī lán huā/,|/清淡|qīng dàn/。|", "Garlic broccoli. Nice and light."],
    ["you", "行|xíng/,|/就|jiù/这|zhè/俩|liǎ/。|/够|gòu/吃|chī/吗|ma/?|", "OK, just those two. Is that enough?"],
    ["owner", "一个人|yí ge rén/够|gòu/了|le/,|/不够|bú gòu/再|zài/加|jiā/。|", "For one person, plenty. If not, add more."]
  ],
  notes: [
    ["招牌菜", "zhāo pai cài", "The house specialty. 你们的招牌菜是什么 is the single most useful question in any restaurant."],
    ["忌口", "jì kǒu", "Foods you avoid. Owners ask 有忌口吗. Answer: 不吃辣, 不要香菜, or just 没有."],
    ["别放…", "bié fàng", "“Don't put in…” 别放香菜, 别放辣, 少放盐. This is how you customize anything."],
    ["腻", "nì", "Too rich or greasy. Also means sick of something: 吃腻了 = “I'm sick of eating this.”"],
    ["俩", "liǎ", "Spoken contraction of 两个. 就这俩 = “just these two.” Very northern."],
    ["有道理", "yǒu dào lǐ", "“Makes sense / fair point.” Good for agreeing with someone older without sounding stiff."]
  ]
},
{
  t: "你哪儿人啊", tp: "nǐ nǎr rén a", te: "The owner wants to know your deal",
  scene: "It's a slow night. The owner pulls up a chair at your table.",
  lines: [
    ["owner", "你|nǐ/不是|bú shì/本地|běn dì/人|rén/吧|ba/?|/听|tīng/口音|kǒu yīn/不|bú/像|xiàng/。|", "You're not from around here, are you? Your accent doesn't sound like it."],
    ["you", "对|duì/,|/我|wǒ/从|cóng/加拿大|jiā ná dà/来|lái/的|de/。|", "Yeah, I'm from Canada."],
    ["owner", "哟|yō/,|/那|nà/你|nǐ/中文|zhōng wén/说|shuō/得|de/挺|tǐng/好|hǎo/啊|a/。|", "Whoa, your Chinese is pretty good then."],
    ["you", "哪里|nǎ lǐ/哪里|nǎ lǐ/。|/我|wǒ/是|shì/华裔|huá yì/,|/在|zài/家|jiā/跟|gēn/我|wǒ/妈|mā/说|shuō/。|", "Nah, not really. I'm Chinese Canadian, I speak it with my mom at home."],
    ["owner", "怪不得|guài bu de/。|/第一次|dì yī cì/来|lái/北京|běi jīng/?|", "No wonder. First time in Beijing?"],
    ["you", "对|duì/,|/来|lái/玩儿|wánr/一个|yí ge/星期|xīng qī/。|", "Yeah, here for a week."],
    ["owner", "都|dōu/去|qù/哪儿|nǎr/了|le/?|", "Where've you been so far?"],
    ["you", "故宫|gù gōng/,|/长城|cháng chéng/,|/累|lèi/死|sǐ/了|le/。|", "The Forbidden City, the Great Wall. I'm wiped out."],
    ["owner", "哈哈|hā hā/,|/长城|cháng chéng/爬|pá/了|le/吧|ba/?|/不到|bú dào/长城|cháng chéng/非|fēi/好汉|hǎo hàn/嘛|ma/。|", "Haha, you climbed the Wall? Gotta do it at least once, right?"],
    ["you", "爬|pá/了|le/,|/现在|xiàn zài/腿|tuǐ/还|hái/疼|téng/呢|ne/。|", "I did. My legs still hurt."],
    ["owner", "那|nà/你|nǐ/得|děi/多|duō/吃|chī/点儿|diǎnr/,|/补补|bǔ bu/。|", "Then you've gotta eat more and build your strength back up."]
  ],
  notes: [
    ["哪里哪里", "nǎ lǐ nǎ lǐ", "The classic humble brush-off when someone compliments you. A bit old school, which is exactly why owners love it. Younger people say 还行吧."],
    ["华裔", "huá yì", "Ethnic Chinese raised outside China. The one word that explains your whole situation."],
    ["怪不得", "guài bu de", "“No wonder.” You will hear this right after you say you're 华裔."],
    ["不到长城非好汉", "bú dào cháng chéng fēi hǎo hàn", "“You're not a real hero until you've been to the Great Wall.” A line from a Mao poem. It's printed on T-shirts at the Wall."],
    ["补补", "bǔ bu", "To build yourself back up with food. The answer older Chinese people have for every problem."],
    ["累死了", "lèi sǐ le", "“Exhausted.” Same 死了 intensifier from story 6."]
  ]
},
{
  t: "打包", tp: "dǎ bāo", te: "Packing up leftovers and paying",
  scene: "You ordered too much. Again.",
  lines: [
    ["you", "老板|lǎo bǎn/,|/太|tài/好吃|hǎo chī/了|le/,|/就是|jiù shì/点|diǎn/多|duō/了|le/。|", "Boss, that was so good. I just ordered way too much."],
    ["owner", "吃不完|chī bu wán/我|wǒ/给|gěi/你|nǐ/打包|dǎ bāo/。|", "If you can't finish it, I'll pack it up for you."],
    ["you", "好|hǎo/啊|a/,|/麻烦|má fan/你|nǐ/了|le/。|", "That'd be great, thank you."],
    ["owner", "不|bù/麻烦|má fan/。|/米饭|mǐ fàn/也|yě/要|yào/吗|ma/?|", "No trouble. Want the rice too?"],
    ["you", "饭|fàn/就|jiù/不|bú/要|yào/了|le/。|/一共|yí gòng/多少|duō shao/?|", "Skip the rice. How much altogether?"],
    ["owner", "八十六|bā shí liù/,|/给|gěi/八十|bā shí/得|dé/了|le/。|", "Eighty six. Just give me eighty."],
    ["you", "真的|zhēn de/啊|a/?|/谢谢|xiè xie/老板|lǎo bǎn/!|", "Really? Thanks, boss!"],
    ["owner", "扫|sǎo/墙上|qiáng shang/这个|zhè ge/码|mǎ/就|jiù/行|xíng/。|", "Just scan the code on the wall."],
    ["you", "好|hǎo/了|le/,|/你|nǐ/看|kàn/一下|yí xià/。|", "Done, have a look."],
    ["owner", "收到|shōu dào/了|le/。|/下次|xià cì/再来|zài lái/啊|a/!|", "Got it. Come back again!"],
    ["you", "一定|yí dìng/!|/走|zǒu/了|le/啊|a/。|", "For sure! See ya."]
  ],
  notes: [
    ["打包", "dǎ bāo", "Packing leftovers, or takeout in general. Totally normal to ask. Nobody judges."],
    ["麻烦你了", "má fan nǐ le", "“Sorry for the trouble / thanks.” Better than 谢谢 when someone does you a favour."],
    ["一共", "yí gòng", "“In total.” 一共多少 = “how much altogether.”"],
    ["给八十得了", "gěi bā shí dé le", "“Just give me 80.” 得了 means “that'll do.” Owners round down for customers they like."],
    ["收到", "shōu dào", "“Got it / received.” For payments, messages, instructions. You'll hear it at work too."],
    ["走了啊", "zǒu le a", "Casual “I'm off.” How you actually say bye leaving a shop. Nobody says 再见."]
  ]
}
  ]
},
{
  title: "Being a tourist",
  sub: "Strangers, vendors, and bubble tea staff. Still casual, just people you don't know yet.",
  stories: [
{
  t: "问路", tp: "wèn lù", te: "Asking for directions",
  scene: "Your phone is at 3%. You have to ask an actual person.",
  lines: [
    ["you", "不好意思|bù hǎo yì si/,|/打扰|dǎ rǎo/一下|yí xià/。|", "Sorry, excuse me."],
    ["local", "咋|zǎ/了|le/?|", "What's up?"],
    ["you", "地铁站|dì tiě zhàn/怎么|zěn me/走|zǒu/啊|a/?|", "How do I get to the subway station?"],
    ["local", "哪个|nǎ ge/站|zhàn/?|/这|zhè/附近|fù jìn/有|yǒu/俩|liǎ/。|", "Which one? There are two around here."],
    ["you", "去|qù/南锣鼓巷|nán luó gǔ xiàng/的|de/那个|nà ge/。|", "The one that goes to Nanluoguxiang."],
    ["local", "哦|ò/,|/你|nǐ/一直|yì zhí/往前走|wǎng qián zǒu/,|/到|dào/红绿灯|hóng lǜ dēng/右拐|yòu guǎi/。|", "Oh, go straight, then turn right at the light."],
    ["you", "远|yuǎn/吗|ma/?|", "Is it far?"],
    ["local", "不远|bù yuǎn/,|/走|zǒu/过去|guò qu/也|yě/就|jiù/五分钟|wǔ fēn zhōng/。|", "Not far. Five minutes walking, tops."],
    ["you", "右拐|yòu guǎi/以后|yǐ hòu/呢|ne/?|", "And after I turn right?"],
    ["local", "拐|guǎi/过去|guò qu/你|nǐ/就|jiù/看见|kàn jiàn/了|le/,|/特别|tè bié/显眼|xiǎn yǎn/。|", "Once you turn you'll see it. Can't miss it."],
    ["you", "明白|míng bai/了|le/,|/谢|xiè/啦|la/!|", "Got it, thanks!"],
    ["local", "没事儿|méi shì r/。|", "No worries."]
  ],
  notes: [
    ["打扰一下", "dǎ rǎo yí xià", "“Sorry to bother you.” The polite way to stop a stranger on the street."],
    ["咋", "zǎ", "Northern spoken 怎么. 咋了 = “what's up / what happened.” 咋走 = “how do I get there.”"],
    ["…怎么走", "zěn me zǒu", "“How do I get to…?” Put any place in front: 故宫怎么走."],
    ["往前走 / 右拐 / 左拐", "wǎng qián zǒu / yòu guǎi / zuǒ guǎi", "Straight ahead / turn right / turn left. That's most directions covered."],
    ["也就", "yě jiù", "“Only / at most.” 也就五分钟 = “five minutes, tops.” Makes things sound like no big deal."],
    ["谢啦", "xiè la", "Casual “thanks!” Lighter and friendlier than 谢谢."]
  ]
},
{
  t: "砍价", tp: "kǎn jià", te: "Haggling at a market stall",
  scene: "A souvenir stall. The first price is never the real price.",
  lines: [
    ["you", "老板|lǎo bǎn/,|/这个|zhè ge/多少钱|duō shao qián/?|", "Boss, how much is this?"],
    ["vendor", "一百二|yì bǎi èr/。|", "A hundred twenty."],
    ["you", "这么|zhè me/贵|guì/?|/便宜|pián yi/点儿|diǎnr/呗|bei/。|", "That much? Come on, a little cheaper."],
    ["vendor", "这|zhè/是|shì/手工|shǒu gōng/的|de/,|/真|zhēn/不|bú/贵|guì/。|", "It's handmade. That's honestly not expensive."],
    ["you", "五十|wǔ shí/,|/行|xíng/我|wǒ/就|jiù/拿|ná/了|le/。|", "Fifty. If that works, I'll take it."],
    ["vendor", "五十|wǔ shí/?|/我|wǒ/进价|jìn jià/都|dōu/不止|bù zhǐ/。|", "Fifty? I paid more than that myself."],
    ["you", "那|nà/你|nǐ/说|shuō/个|ge/实在|shí zai/价|jià/。|", "Then give me a real price."],
    ["vendor", "最低|zuì dī/八十|bā shí/,|/不能|bù néng/再|zài/少|shǎo/了|le/。|", "Eighty, lowest. Can't go any lower."],
    ["you", "那|nà/算了|suàn le/,|/我|wǒ/再|zài/看看|kàn kan/。|", "Forget it then, I'll keep looking."],
    ["vendor", "哎哎哎|āi āi āi/,|/回来|huí lai/!|/六十|liù shí/,|/拿|ná/走|zǒu/。|", "Hey hey hey, come back! Sixty, it's yours."],
    ["you", "成交|chéng jiāo/!|", "Deal!"]
  ],
  notes: [
    ["便宜点儿呗", "pián yi diǎnr bei", "“Come on, a little cheaper.” The 呗 makes it sound casual and a bit pleading."],
    ["实在价", "shí zai jià", "“An honest price.” 说个实在价 = stop messing around, what's the real number."],
    ["进价", "jìn jià", "What the seller paid for it. Every vendor will claim you're offering less than this."],
    ["算了", "suàn le", "“Forget it.” Your strongest move. Say it and start walking away."],
    ["成交", "chéng jiāo", "“Deal!” Say it fast before they change their mind."]
  ]
},
{
  t: "帮我拍张照", tp: "bāng wǒ pāi zhāng zhào", te: "Asking someone to take your photo",
  scene: "Great view, nobody to take the picture. You pick someone who looks like they know what they're doing.",
  lines: [
    ["you", "你好|nǐ hǎo/,|/能|néng/帮|bāng/我|wǒ/拍|pāi/张|zhāng/照|zhào/吗|ma/?|", "Hi, could you take a photo of me?"],
    ["stranger", "行|xíng/啊|a/,|/手机|shǒu jī/给|gěi/我|wǒ/。|", "Sure, give me your phone."],
    ["you", "把|bǎ/后面|hòu mian/也|yě/拍|pāi/进去|jìn qu/。|", "Get the background in too."],
    ["stranger", "横|héng/着|zhe/还是|hái shi/竖|shù/着|zhe/?|", "Landscape or portrait?"],
    ["you", "竖|shù/着|zhe/吧|ba/,|/全身|quán shēn/的|de/。|", "Portrait. Full body."],
    ["stranger", "往|wǎng/左|zuǒ/一点儿|yì diǎnr/,|/再|zài/左|zuǒ/点儿|diǎnr/,|/好|hǎo/。|", "Move left a bit. A bit more. Good."],
    ["stranger", "一|yī/,|/二|èr/,|/三|sān/,|/茄子|qié zi/!|", "One, two, three, say cheese!"],
    ["you", "能|néng/再|zài/来|lái/一|yì/张|zhāng/吗|ma/?|/我|wǒ/刚才|gāng cái/闭眼|bì yǎn/了|le/。|", "Can you take one more? I blinked."],
    ["stranger", "没问题|méi wèn tí/,|/我|wǒ/多|duō/拍|pāi/几|jǐ/张|zhāng/,|/你|nǐ/自己|zì jǐ/挑|tiāo/。|", "No problem, I'll take a bunch and you can pick."],
    ["you", "哇|wā/,|/拍|pāi/得|de/真|zhēn/好|hǎo/!|", "Whoa, these are great!"],
    ["stranger", "那|nà/是|shì/,|/我|wǒ/可是|kě shì/专业|zhuān yè/的|de/。|", "Obviously. I'm a professional, you know."]
  ],
  notes: [
    ["拍张照", "pāi zhāng zhào", "“Take a photo.” 张 is the measure word for flat things: photos, tickets, paper."],
    ["横着 / 竖着", "héng zhe / shù zhe", "Landscape / portrait. Literally “horizontal / vertical.”"],
    ["茄子", "qié zi", "“Eggplant.” The Chinese “say cheese,” because saying it makes you smile."],
    ["再来一张", "zài lái yì zhāng", "“One more.” 再来一个 works for anything: another drink, another round, another try."],
    ["那是", "nà shì", "“Obviously / naturally.” Jokingly accepting a compliment like you deserved it."]
  ]
},
{
  t: "点奶茶", tp: "diǎn nǎi chá", te: "Ordering bubble tea",
  scene: "Every street has three bubble tea shops. Ordering is its own little language.",
  lines: [
    ["staff", "你好|nǐ hǎo/,|/喝|hē/点儿|diǎnr/什么|shén me/?|", "Hi, what can I get you?"],
    ["you", "你们|nǐ men/家|jiā/卖|mài/得|de/最|zuì/好|hǎo/的|de/是|shì/哪个|nǎ ge/?|", "What's your best seller?"],
    ["staff", "这个|zhè ge/芝士|zhī shì/葡萄|pú tao/,|/卖|mài/得|de/最|zuì/火|huǒ/。|", "This cheese foam grape one. It's the most popular."],
    ["you", "那|nà/就|jiù/来|lái/一|yì/杯|bēi/。|", "I'll get one of those then."],
    ["staff", "大杯|dà bēi/还是|hái shi/中杯|zhōng bēi/?|", "Large or medium?"],
    ["you", "中杯|zhōng bēi/。|", "Medium."],
    ["staff", "甜度|tián dù/呢|ne/?|/正常|zhèng cháng/,|/少|shǎo/糖|táng/,|/还是|hái shi/半|bàn/糖|táng/?|", "Sweetness? Regular, less sugar, or half?"],
    ["you", "少|shǎo/糖|táng/,|/去|qù/冰|bīng/。|", "Less sugar, no ice."],
    ["staff", "在|zài/这儿|zhèr/喝|hē/还是|hái shi/带走|dài zǒu/?|", "For here or to go?"],
    ["you", "带走|dài zǒu/。|/前面|qián mian/还有|hái yǒu/几|jǐ/单|dān/?|", "To go. How many orders ahead of me?"],
    ["staff", "七八|qī bā/单|dān/吧|ba/,|/十|shí/分钟|fēn zhōng/左右|zuǒ yòu/。|", "Seven or eight. About ten minutes."],
    ["staff", "好|hǎo/了|le/我|wǒ/叫号|jiào hào/,|/你|nǐ/过来|guò lai/拿|ná/。|", "When it's ready I'll call your number, come grab it."]
  ],
  notes: [
    ["少糖 / 半糖 / 去冰", "shǎo táng / bàn táng / qù bīng", "Less sugar / half sugar / no ice. The three settings that matter. 少冰 = light ice."],
    ["带走", "dài zǒu", "“To go.” For here is 在这儿喝 or 在这儿吃."],
    ["火", "huǒ", "“Fire,” means popular or trending. 卖得最火 = best seller. 他火了 = he blew up online."],
    ["单", "dān", "An order. 前面还有几单 = “how many orders ahead of me.” Also used for delivery orders."],
    ["七八", "qī bā", "Two numbers side by side means “roughly.” 七八单 = seven or eight. 三四天 = three or four days."],
    ["叫号", "jiào hào", "Calling out order numbers. Hang on to your receipt or watch the app."]
  ]
}
  ]
}
];
