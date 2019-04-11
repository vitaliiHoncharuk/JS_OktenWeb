// Створити масив об'єктів які характеризують теги HTML , в об'єктах повинні бути присутні
// -назва тегу
// - опис його дій
// - масив з атрибутами
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
//
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад
// var areaTag = {
//     titleOfTag: 'area',
//     action: Каждый элемент <area> определяет активные области изображения, которые являются ссылками...,
// attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function createEl(elem) {
    return document.createElement(elem);
}




const TAG_NAMES = [];
const TAG_ACTION= ["Тег a  является одним из важных элементов HTML и предназначен для создания ссылок. " +
"В зависимости от присутствия атрибутов name или href тег a устанавливает ссылку или якорь. " +
"Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. " +
"При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.\n" +
"\n" +
"Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, " +
"на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа (URL, " +
"Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. " +
"Адрес ссылки может быть абсолютным и относительным. " +
"Абсолютные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где прописана ссылка. " +
"Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.",

    "Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения " +
    "вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль " +
    "внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут 'class' или id с " +
    "именем селектора.\n" +
"\n" +" Как и при использовании других блочных элементов, содержимое тега div всегда начинается с новой строки. " +
    "После него также добавляется перенос строки.",

    "HTML предлагает шесть заголовков разного уровня, " +
    "которые показывают относительную важность секции, расположенной после заголовка. " +
    "Так, тег h1 представляет собой наиболее важный заголовок первого уровня, а тег h6 служит для обозначения" +
    " заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается " +
    "самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше." +
    " Теги h1,...,h6 относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы" +
    " отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.",

    "Тег span предназначен для определения строчных элементов документа. В отличие от блочных элементов, " +
    "таких как table, p или div, с помощью тега span можно выделить часть информации внутри других тегов " +
    "и установить для нее свой стиль. Например, внутри абзаца (тега p) можно изменить цвет и размер первой буквы," +
    " если добавить начальный и конечный тег span и определить для него стиль текста. Чтобы не описывать каждый раз " +
    "стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с " +
    "именем селектора.",

    "Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы " +
    "интерфейса и обеспечить взаимодействие с пользователем. Главным образом input предназначен для создания " +
    "текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент input не требуется помещать внутрь " +
    "контейнера form, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер," +
    " где их обрабатывает серверная программа, то указывать form обязательно. То же самое обстоит и в случае обработки" +
    " данных с помощью клиентских приложений, например, скриптов на языке JavaScript.\n" +
"Основной атрибут тега input, определяющий вид элемента — type." +
    " Он позволяет задавать следующие элементы формы: текстовое поле (text)," +
    " поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), " +
    "кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с " +
    "изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют " +
    "его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.",

    "Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером." +
    " Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить " +
    "доступ к любому элементу формы, изменять его и применять по своему усмотрению.",

    "Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select." +
    " Ширина списка определяется самым широким текстом, указанным в теге option, а также может изменяться" +
    " с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент select" +
    " внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.",

    "Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или " +
    "множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега select, " +
    "который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге option," +
    " а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега option, который должен быть " +
    "вложен в контейнер select. Если планируется отправлять данные списка на сервер, то требуется поместить элемент " +
    "select внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты"
];
const TAG_TITLE_OF_ATTR = [
    ["accesskey","coords","download","hreflang","name"],
    ["align", "title"],
    ["align"],
    [""],
    ["accept","accesskey","align","alt"],
    ["accept-charset","action","autocomplete","enctype"],
    ["disabled","label","selected","value"],
    ["form","multiple","name","required"]
];
const TAG_ACTION_OF_ATTR = [
    ["Активация ссылки с помощью комбинации клавиш.",
        "Устанавливает координаты активной области.",
        "Предлагает скачать указанный по ссылке файл.",
        "Задает адрес документа, на который следует перейти.",
        "Идентифицирует язык текста по ссылке.",
        "Устанавливает имя якоря внутри документа."],

    ["Задает выравнивание содержимого тега div",
        "Добавляет всплывающую подсказку к содержимому."],

    ["Определяет выравнивание заголовка."],
    [""],
    ["Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.",
    "Переход к элементу с помощью комбинации клавиш.",
    "Определяет выравнивание изображения.",
        "Альтернативный текст для кнопки с изображением."
    ],
    ["Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.",
    "Адрес программы или документа, который обрабатывает данные формы.",
    "Включает автозаполнение полей формы.",
    "Способ кодирования данных формы."],
    [   "Заблокировать для доступа элемент списка.",
        "Указание метки пункта списка.",
        "Заранее устанавливает определенный пункт списка выделенным.",
        "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."
    ],
    [
        "Связывает список с формой.",
        "Позволяет одновременно выбирать сразу несколько элементов списка.",
        "Имя элемента для отправки на сервер или обращения через скрипты.",
        "Список обязателен для выбора перед отправкой формы."
    ]

    ]


;
const TAG_UNIVERSAL_ATTR = [true,true,true,true,true,true,true,true];
const CLOSING_TAG = [true,true,true,true,false,true,false,true];



document.body.append(createEl('a'));
document.body.append(createEl('div'));
document.body.append(createEl('h1'));
document.body.append(createEl('span'));
document.body.append(createEl('input'));
document.body.append(createEl('form'));
document.body.append(createEl('option'));
document.body.append(createEl('select'));

class tag {
    constructor(titleOfTag,action,titleOfAttr,actionOfAttr,universalAttr,closingTag){
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
        this.universalAttr = universalAttr;
        this.closingTag = closingTag;
    }
    get (){
        console.log('Tag title : '+this.titleOfTag + ', \nAction: '+ this.action+", \nTitle Of Attribute: "
            +this.titleOfAttr+", \nAction Of Attribute: "+this.actionOfAttr+", \nAcess to universal Attributes : "
            +this.universalAttr+", \nNeeds closing tag: "+this.closingTag);
    }
}



console.log(document.body.childNodes.length);
for(let i=0; i< document.body.childNodes.length;i++){
    if (document.body.childNodes[i].nodeName !== "#text" && document.body.childNodes[i].nodeName !== "SCRIPT"){
        TAG_NAMES.push(document.body.childNodes[i].nodeName);
    }
}


for (let i=0;i<TAG_NAMES.length;i++){
    TAG_NAMES[i]=TAG_NAMES[i].toLowerCase();
}
console.log(TAG_NAMES);



let objArr =[];
// //generating Array of Objects
for (let i=0;i<TAG_NAMES.length;i++){
    let myTag= new tag(TAG_NAMES[i],TAG_ACTION[i],TAG_TITLE_OF_ATTR[i],TAG_ACTION_OF_ATTR[i],TAG_UNIVERSAL_ATTR[i],CLOSING_TAG[i]);
    objArr.push(myTag);
}
console.log(objArr);



for (let i=0;i<TAG_TITLE_OF_ATTR.length;i++){
    for (let j=0;j<TAG_TITLE_OF_ATTR[i].length;j++){
        objArr[i][TAG_TITLE_OF_ATTR[i][j]] = TAG_ACTION_OF_ATTR[i][j];
    }
}
console.log("--------------------------");
console.log(objArr);