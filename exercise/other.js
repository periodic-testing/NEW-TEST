//字符串


var mood = "don't ask";
var mood = 'don\'t ask';

// var height = "about 5'10\" tall";
// alert(height);

var married = true;
var married = "true";


var beatles = Array("John","Paul","George","Ringo");


// var lennon = Object();
// lennon.name = lala;
// lennon.year = 20;
// lennon.living = false;

//var lennon = {name:"lala",year:20,living:false};


// if(1>2){
//     alert("今天很开心");
// }else{
//     alert("今天不开心");
// }


// var num = 7.5622;
// var num = Math.round(num);
// alert(num);
    
// alert(typeof document.getElementById("one"));


// var items = document.getElementsByTagName("li");
// for(var i = 0;i<items.length;i++){
//     alert(typeof items[i]);
// }

// alert(document.getElementsByTagName("*").length);




// var paras = document.getElementsByTagName("p");
// for(var i = 0;i<paras.length;i++){
//     var title_text = paras[i].getAttribute("title");
//     if(title_text) alert(title_text);
// }



var shopping = document.getElementById("purchases");
alert(shopping.getAttribute("title"));
shopping.setAttribute("title","a list of goods");
alert(shopping.getAttribute("title"));