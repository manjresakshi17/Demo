// alert("working....")

// $("h1").css("color","red");

// $("h1").addClass("big-title margin-50");

// $("h1").text("bye");
// //  $("button").text("dont click me.")// using js

// $("button").html("<em>hey</em>");

// for img
// console.log($("img").attr("src"));   
// Failed to load resource: the server responded with a status of 404 (Not Found)Understand this error
//index.js:12 drum.png

//for img
//  $("a").attr("href","https://www.yahoo.com");

// for(var i=0; i<5;i++){ // using js
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }

// $("button").click(function(){//using jquery
//     $("h1").css("color","purple");
// });

$(document).keypress(function(event){
    $("h1").text(event.key);
});

// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// });

$("button").on("click",function(){
    // $("h1").slideToggle();
    // $("h1").animate({margin:"20%"});
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

