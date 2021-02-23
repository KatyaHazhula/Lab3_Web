//5. При завантаженні HTML-сторінки з’являється діалогове вікно alert.
// Напис в діалоговому вікні має містити інформацію про те, чи увімкнуто
// використання cookies в браузері. Якщо використання cookies, вивести
// зміст cookies.
 if(navigator.cookieEnabled){
     alert("Використання cookies в браузері увімкнено");
     document.cookie = "user=Kateryna Hazhula";
     alert('Зміст cookies: '+ document.cookie);

 } else{
     alert("Використання cookies в браузері вимкнено");
 }

// 3. При завантаженні HTML-сторінки з’являється діалогове вікно prompt,
//     яке запрошує користувача ввести назву своєї групи. Після введення
// назви групи (після натискання на кнопку ОК) має з’явитись діалогове
// вікно alert з повідомленням «Ви є студентом групи <введена назва
// групи>».

let promptDialog = window.prompt("Вкажіть, будь ласка, назву своєї групи");
 window.alert("Ви є студентом групи " + promptDialog);

 //6. ||- питання “бажаєте взнати розмір робочого вікно веб-сторінки з’являється діалогове вікно alert.сторінки?».”.
// Якщо користувач натискає так, у вікні alert вивести цю інформацію. У
// протилежному випадку, записати цю інформацію в тег div.

 let res=document.getElementById('result')
 if(confirm('Чи бажаєте дізнатись розмір робочого вікна веб-сторінки ?')){
     alert('Розміри внутрішні: '+window.innerWidth+'x'+window.innerHeight+' px Зовнішні:'+window.outerWidth+'x'+window.outerHeight+'px');
 }else{
     console.log('dfghj');
    res.textContent='Розміри внутрішні: '+window.innerWidth+'x'+window.innerHeight+' px Зовнішні:'+window.outerWidth+'x'+window.outerHeight+'px';

 }

 //Завдання 4
// На html-сторінці розміщено 2 кнопки. При натисканні на кнопку №1
// відкривається нове вікно з заданими параметрами. При натисканні на кнопку
// №2 нове вікно закривається. В нове вікно має бути завантажено сайт НУ
// «Львівська політехніка».

let openWindowButton= document.getElementById('openWindow');
let closeWindowButton1= document.getElementById('closeWindow');
let newWin;

openWindowButton.onclick=(ev)=>{
    newWin = window.open("https://lpnu.ua/", "Львівська Політехніка", "width=600,height=400,location=yes");
    ev.preventDefault();
}
closeWindowButton1.onclick=(ev)=>{
    newWin.close();
    ev.preventDefault();
}