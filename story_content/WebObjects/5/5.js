


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mohammed 2022 G9 T2 499 Words

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 499 ; 
//=========================================



var arr = [];
while(arr.length < 8)
{
    var r = Math.floor(Math.random()*Words+1)*2;
    if(arr.indexOf(r) === -1) arr.push(r);
}


var NumA=  arr[1];
var NumA1= arr[2];
var NumA2= arr[3];
var NumA3= arr[4];
var NumA4= arr[5];



var Words= [
"Free Answer for You",

//=========================================

"حول","about",
"فوق","above",
"حادثة","accident",
"ينجز","accomplish",
"تبعا","according",
"محاسبة","accounting",
"إنجاز","achievement",
"عمل","action",
"أجراءات","actions",
"في الواقع","actually",
"يضيف","Add",
"الصفات","adjectives",
"الضمائر","adverbs",
"اثبات","Affirmative",
"بعد، بعدما","After",
"تكرارا","again",
"سن","age",
"الأعمار","ages",
"منذ","ago",
"متفق عليه","agreed",
"مطار","airplane",
"ألبومات","albums",
"أيضًا","also",
"دائماً","always",
"دهشة","amaze",
"رائعة حقا","amazing",
"الرسوم المتحركة","animation",
"اخر","Another",
"إجابه","answer",
"يظهر","appear",
"يظهر)","appear)",
"ظهر","appeared",
"الأرجنتين","Argentina",
"الحجج","arguments",
"حول","around",
"فن","art",
"مقالة - سلعة","article",
"يطلب","Ask",
"جمهور","audience",
"الجماهير","audiences",
"متوفرة","available",
"الى الخلف","back",
"بغداد","Baghdad",
"نقطة","ballpoint",
"مصرف","bank",
"جميلة","beautiful",
"أصبح","became",
"لان","Because",
"يصبح","become",
"قبل","before",
"بدأ","began",
"الأفضل","best",
"أفضل","better",
"ما بين","between",
"دراجة هوائية","bike",
"أسود","black",
"أسود و","blackand",
"كتب","books",
"مُشترى","bought",
"الإخوة","brothers",
"يبني","build",
"مبنى","Building",
"الأعمال","businesses",
"يشترى","buy",
"كافيه","cafe",
"يحسب","calculates",
"اتصل","called",
"أتى","came",
"معلبة","canned",
"تم القبض عليه","captured",
"مسار مهني مسار وظيفي","career",
"منطقة البحر الكاريبي","Caribbean",
"عربه قطار","carriage",
"كاسيت","cassette",
"تسبب","caused",
"زنزانة","CELL",
"الخلوية","cellular",
"سنتيمتر","centimeters",
"مئة عام","century",
"غرف","chambers",
"يتغير","change",
"تغير","changed",
"شخصية","character",
"الشخصيات","characters",
"يفحص","Check",
"دائرة","Circle",
"صف دراسي","class",
"كلاسيكي","classic",
"التسلق","climbing",
"مقطع","clip",
"الخرقاء","clumsy",
"تماسك","cohesion",
"تجميع","collect",
"تم جمعها","collected",
"جمع","collecting",
"كلية","college",
"رسوم متحركة","comic",
"تجاريا","commercially",
"شائع","common",
"اكتمال","Complete",
"استيعاب","Comprehension",
"تسيطر على الكمبيوتر","computer-controlled",
"تم إنشاؤه بواسطة الكمبيوتر","computer-generated",
"مكيفات","conditioners",
"تكييف","conditioning",
"تهانينا","Congratulations",
"المستهلكون","consumers",
"يحتوي","contain",
"يتضمن","contained",
"سياق الكلام","Context",
"متواصل","continues",
"تقلصات","contractions",
"تقليدي","conventional",
"محادثة","conversation",
"يطبخ","cook",
"بارد","cool",
"استطاع","could",
"بلد","country",
"خلق","create",
"خلقت","created",
"الإئتمان","credit",
"طاقم العمل","crew",
"تاريخ","Date",
"يوم","day",
"إيضاحي","demonstrative",
" قسم، أقسام","department",
"يصف","Describe",
"وجهة","destination",
"المتقدمة","developed",
"جهاز","device",
"مختلف","different",
"رقمي","digital",
"البعد","dimension",
"يختفي","disappear",
"اكتشف","discovered",
"يناقش","Discuss",
"مناقشة","Discussion",
"انتهى","done",
"أسفل","down",
"كل","each",
"مبكرا","early",
"تأثير","effect",
"تأثيرات","effects",
"ثامن","eighth",
"كهربائي","electric",
"البريد الإلكتروني","email",
"إمبراطورية","Empire",
"مهندس","engineer",
"المستحضرات","ENTIONS",
"بأكمله","entire",
"حتى في","even",
"الأحداث","events",
"أي وقت مضى","ever",
"كل","every",
"في كل مكان","everywhere",
"بالضبط","exact",
"أمثلة","examples",
"ممارسه الرياضه","exercise",
"موجود","existed",
"غالي","expensive",
"عيون","eyes",
"مشهور","famous",
"جميل","fantastic",
"مفتون","fascinated",
"الميزات","features",
"قليل","few",
"filins","filins",
"التصوير","filming",
"صناع الأفلام","filmmakers",
"صناعة الأفلام","filmmaking",
"أفلام","films",
"يجد","Find",
"أول","first",
"مسطحة","flat",
"طار","flew",
"التالي","following",
"شكل","form",
"وجدت","found",
"صديق","friend",
"أصدقاء","friends",
"من","from",
"مستقبل","future",
"غاز","gas",
"أعطى","gave",
"ألمانيا","Germany",
"احصل على","get",
"الحصول على","getting",
"إعطاء","given",
"نظارات","glasses",
"ذهب","gone",
"غوريلا","gorilla",
"حصلت","got",
"حصلت","gotten",
"رتبة","grade",
"تخرُّج","graduation",
"أكبر","greater",
"مجموعات","groups",
"غوتنبرغ","Gutenberg",
"يحدث","happen",
"حدث","happened",
"السعيدة","happy",
"الحرارة","heat",
"يتردد","hesitate",
"عالي","high",
"التكنولوجيا العالية","high-tech",
"التاريخ","history",
"نجاح","hit",
"هواية","hobby",
"ساعة","hour",
"بيت","house",
"أُسرَة","household",
"تسربت","huge",
"المئات","hundreds",
"جليد","ice",
"الأفكار","ideas",
"أوهام","illusions",
"صورة","image",
"مصور","imagery",
"الصور","images",
"وهمي","Imaginary",
"يستورد","import",
"الأهمية","important",
"تأثرت","impressed",
"بوصات","inches",
"يشمل","Include",
"يشير","indicates",
"معلومة","information",
"التعاون","innovation",
"الابتكارات","innovations",
"مقاطعة","interrupt",
"توقف","interrupted",
"داخل","into",
"أدخلت","introduced",
"اختراع","invent",
"اخترع","invented",
"اختراع","invention",
"اختراعات","inventions",
"يونيه","June",
"الجوراسي","Jurassic",
"فقط","just",
"احتفظ","keep",
"عرف","knew",
"أعرف","know",
"معروف","known",
"لغة","Language",
"حاسوب محمول","laptop",
"كبير","large",
"الاخير","last",
"متأخر","late",
"في وقت لاحق","later",
"رسالة","letter",
"لمبة","lightbulb",
"ولاعة","lighter",
"مثل","like",
"خط","line",
"مبطن","lined",
"استمع","Listen",
"الاستماع","Listening",
"يسكن","lived",
"الأرواح","lives",
"آلة","machine",
"متزوج \ متزوجة","married",
"تطابق","Match",
"المعاني","meanings",
"ميجا","mega",
"المذكورة","mentioned",
"التقى","met",
"الميكروويف","microwave",
"الموجات الصغرية","microwaves",
"وسط","middle",
"عقل _ يمانع","mind",
"المرايا","mirrors",
"نموذج","model",
"عارضات ازياء","models",
"مال","money",
"شهر","month",
"الشهور","months",
"عظم","most",
"اقتراح","motion",
"متحرك","movable",
"متحرك","moving",
"كثيراً","much",
"بطريقة غامضة","mysteriously",
"من الضروري","necessary",
"سلبي","Negative",
"مطلقا","never",
"الإخبارية","news",
"تنويه","Notice",
"في الوقت الحاضر","Nowadays",
"موضوع","object",
"تقدم","offered",
"المكاتب","offices",
"غالباً","often",
"واحد","one's",
"رأي","opinion",
"ترتيب","order",
"آخر","other",
"فرن","oven",
"أفران","ovens",
"خلال","over",
"زوج","Pair",
"فقرة","paragraph",
"الفقرات","paragraphs",
"أقواس","parentheses",
"الآباء","parents",
"منتزه","park",
"جزء","part",
"معين","particular",
"شريك","partner",
"ماضي","past",
"المشاة","pedestrians",
"قلم جاف","pen",
"بوفل","Peofle",
"اشخاص","people",
"في احسن الاحوال","perfect",
"فترة","period",
"التصوير","photography",
"صورة","picture",
"صور","pictures",
"بكسل","pixels",
"طائرة","plane",
"لعب","played",
"محمول","portable",
"ملكية","possession",
"صيغة الملكية","possessive",
"المستطاع","possible",
"جنيه أو رطل للوزن","pounds",
"حاجة","practice",
"الحالي","present",
"الحفاظ على","preserve",
"صحافة","press",
"الطابعات","PRINTERS",
"الطباعة","printing",
"أنتجت","produced",
"إنتاج","production",
"مشروع","project",
"ضمائر","pronouns",
"نطق","Pronunciation",
"عام","public",
"مضخة","pump",
"وضع","put",
"بسرعة","Quick",
"مذياع","radio",
"حقيقة","real",
"حقيقي","realistic",
"أدرك","realized",
"هل حقا","really",
"السبب","reason",
"أسباب","reasons",
"استلمو","received",
"تعبئة رصيد","recharge",
"يشير إلى","refer",
"المراجع","references",
"الثلاجات","refrigerators",
"ترتبط","relate",
"المتعلقة","relating",
"نسبيا","relative",
"الدقة","resolution",
"استجابة","response",
"مطعم","restaurant",
"ثوري","revolutionary",
"اركب","ride",
"صخر","rock",
"دور اللعب","Role-play",
"لفات","rolls",
"نفس","same",
"رأى","saw",
"يقول","Say",
"مشاهد","scenes",
"سكوتر","scooter",
"صرخ","screamed",
"شاشة","screen",
"شاشات","screens",
"بدت","seemed",
"رأيت","seen",
"جمل","sentences",
"تتمة","sequels",
"تسلسل","sequence",
"جدي","serious",
"تعيين","set",
"مجموعات","sets",
"تسوية","settle",
"تسوية","settled",
"السبعينيات","seventies",
"عديد","several",
"متجر","shop",
"قصيرة","short",
"تبين","show",
"أظهر","showed",
"بسيط","simple",
"منذ","Since",
"مواقف","situations",
"بطيء","slow",
"على نطاق صغير","small-scale",
"الثلج","snow",
"تم البيع","sold",
"بعض الأحيان","sometimes",
"هكذا","soon",
"يبدو","sound",
"المساحات","spaces",
"مكبر الصوت","speaker",
"مميز","special",
"رياضة","sport",
"رياضات","sports",
"ختم","stamp",
"طوابع بريدية","stamps",
"نجمة","Star",
"بداية","start",
"بدأت","started",
"دولة","State",
"ما يزال","still",
"توقف","stop",
"توقفت","stopped",
"توقف","stops",
"المتاجر","stores",
"قصة","Story",
"موقد","stove",
"مواقد","STOVES",
"على التوالي","straight",
"الشوارع","streets",
"درس","studied",
"موضوعات","subject",
"ينجح","succeed",
"ناجح","successful",
"بنجاح","successfully",
"مثل","such",
"الصيف","summer",
"افترض","suppose",
"مفاجئة","surprise",
"تؤخذ","taken",
"حديث","talk",
"شريط","tape",
"شاي","tea",
"فني","technical",
"تقنية","technique",
"التقنيات","techniques",
"تقنية","technology",
"التلفاز","television",
"توتر","tense",
"من","than",
"ومن بعد","then",
"الثالث","third",
"على أية حال","though",
"إطار العجلة","tire",
"لقب","title",
"اليوم","today",
"سويا","together",
"أخذ","took",
"معجون الأسنان","toothpaste",
"أعلى","top",
"المواضيع","topics",
"تماما","totally",
"باتجاه","toward",
"عروسه لعبه","Toy",
"قطار","train",
"محولات","Transformers",
"الخدع","tricks",
"يحاول","try",
"يوم الثلاثاء","Tuesday",
"دور","Turn",
"اكتب","type",
"تحت الأرض","underground",
"يستخدم","Use",
"تستخدم","used",
"عطلة","vacation",
"متنوع","various",
"أفعال","verbs",
"ضد","versus",
"عرض","viewed",
"المشاهدين","viewers",
"زار","visited",
"المرئية","visual",
"كلمات","Vocabulary",
"مشى","walked",
"الجدران","walls",
"مطلوب","wanted",
"الحروب","Wars",
"راقب","watch",
"مشاهدة","watched",
"طريق","way",
"وزن","weighed",
"نحن سوف","Well",
"أيّ","which",
"بينما","While",
"أبيض","white",
"من الذى","who",
"واسع الانتشار","widespread",
"نافذة او شباك","window",
"مع","with",
"بدون","without",
"كلمة","word",
"كلمات","words",
"عمل","worked",
"عمل","working",
"البالية","worn",
"مخاوف","worries",
"عام","year",
"سنوات","years",
"في الامس","yesterday",




//=========================================

];

// Code to decide if the word in the quetion is Arabic or English. 
// Question word is English. All answer words arein Arabic.

var WordA = Words[NumA-1];
var WordQ = Words[NumA];

var WordA1 = Words[NumA1-1];
var WordQ1 = Words[NumA1];

var WordA2 = Words[NumA2-1];
var WordQ2 = Words[NumA2];

var WordA3 = Words[NumA3-1];
var WordQ3 = Words[NumA3];

var WordA4 = Words[NumA4-1];
var WordQ4 = Words[NumA4];



// Setting values to SL

player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

			
}


// Code to say the English word in the Question
var Say =function(){
// var MyText = "What is the meaning of?" + WordQ ;	 

var player = GetPlayer();
var WordQ = player.GetVar("WordQ");

var MyText = WordQ ;	 

		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }