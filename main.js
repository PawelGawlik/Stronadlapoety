$(function(){
  $("input").keyup(function(){
     var a = $(this).val();
     localStorage.setItem("name",a);
     $("input").val(a);
  })
  if(localStorage.getItem("name")){
     var b = localStorage.getItem("name");
     $("input").val(b);
  }
  var c;
  var d;
  var funkcja1 = function(e,f){
      if($("input").val() !== "Imię i nazwisko" ){
      c = b.length*e + f;
      d = c + "px";
      $("input").css("width",d);
      }
  }
  switch($("input").width()){
      case 420:
        funkcja1(35,20);
        break;
      case 670:
        funkcja1(51,55);
        break;
      case 330:
        funkcja1(24,45);
        break;
      case 280:
        funkcja1(21,35);
        break;
      case 170:
        funkcja1(12,30);
        break;
      case 120:
        funkcja1(9,30);
        break;
      case 112:
        funkcja1(8.5,25);
    }
  $("input").focus(function(){
      $(this).css({
          backgroundColor: "orange"
      })
      if($(this).width()+180 < $("body").width()){
          $(this).animate({
              width: "+=100px"
          })
      }else{
          $(this).animate({
              width: "+=30px"
          })
      }
  })
   var licznik = 0;
   var element2 = document.querySelector(".kontener");
   while(licznik<=5){
     var element = document.createElement("div");
     element2.appendChild(element);
     element.classList.add("wiersz");
     licznik++;
   }
   var licznik2 = 1;
   var tablica1 = document.getElementsByClassName("wiersz");
   var licznik3 = 0;
   while(licznik3<=5){
      while(licznik2<=6){
        var element3 = document.createElement("div");
        var element4 = document.createElement("textarea");
        var element5 = document.createElement("div");
        tablica1[licznik3].appendChild(element3);
        tablica1[licznik3].appendChild(element4);
        tablica1[licznik3].appendChild(element5);
        element3.classList.add("poemat1","col-l-1");
        element4.classList.add("col-l-1");
        element5.classList.add("poemat2");
        $(element3).html("Tytuł<br>wiersza");
        licznik2++;
     }
     licznik2 = 1;
     licznik3++;
   }

  var tablica2 = document.getElementsByClassName("poemat1");
  var tablica3 = document.getElementsByTagName("textarea");
  var tablica4 = [];
  var licznik4 = 0;
  var g;
  while(licznik4<tablica2.length){
      tablica4.push("wiersz"+licznik4);
      licznik4++;
  }
  licznik4 = 0;
  
  
    
  
  $(".poemat1").click(function(){
      if($(this).nextAll(".poemat1").length>0){
      $($(this).next()).animate({
          "z-index": 2,
          width: "300px",
          height: "400px"
      })
      $($(this).nextAll(".poemat2")[0]).animate({
          "z-index": 2,
          width: "300px",
          height: "40px",
          top: "+=251.046875px",
          opacity: 1
      })
      }else{
          $($(this).next()).animate({
              "z-index": 2,
              width: "250px",
              height: "450px"
          })
          $($(this).nextAll(".poemat2")[0]).animate({
              "z-index": 2,
              width: "250px",
              height:"40px",
              top: "+=301.046875px",
              opacity: 1
          })
          $($(this).nextAll(".poemat2")[0]).children("button").animate({
              "letter-spacing": "-2px"
          })
      }
      var w = $(this).parent().prevAll().length*6+$(this).prevAll(".poemat1").length;
    
      $($(this).next()).keyup(function(){
      g=$(this).val();

      localStorage.setItem(tablica4[w], g);

      })
  })

  while(licznik4<tablica2.length){
  if(localStorage.getItem(tablica4[licznik4])){
      var h = localStorage.getItem(tablica4[licznik4]);
      
      tablica3[licznik4].innerHTML = h;
    
  }
 licznik4++;
  }
  
      if($(tablica2[3]).innerWidth()>57.25){
      $("textarea").blur(function(){   
      $(this).animate({
          "z-index": -1,
          width: "13.84vw",
          height: "10.3439670139vw"
      })
      })
      }
      else if($(tablica2[3]).innerWidth()===57.25){
        $("textarea").blur(function(){
            $(this).animate({
            "z-index": -1,
            width: "57.25px",
            height: "43.953125px"
        })
        })
    }
      else if($(tablica2[3]).innerWidth()===50.25){
          $("textarea").blur(function(){
              $(this).animate({
                  "z-index": -1,
                  width: "50.25px",
                  height: "60.609375px"
              })
          })
      }
      else if($(tablica2[3]).innerWidth()===42.546875){
          $("textarea").blur(function(){
              $(this).animate({
                  "z-index": -1,
                  width: "42.5468px",
                  height: "51.71875px"
              })
          })
      }
      else{
          $("textarea").blur(function(){
              $(this).animate({
                  "z-index": -1,
                  width: "41.015628px",
                  height: "49.9375px"
              })
          })
      }
          
licznik4 = 0;
    
  
     while(licznik4<tablica2.length){
     var i = $(tablica3[licznik4]).val();
     var j = i.split("\n");
     if(j[0] !== ""){
        j = j[0];
     } else if(j[1] !== ""){
        j = j[1];
     } else if(j[2] !== ""){
        j = j[2];
     } else{ 
        j = "Tytuł<br>wiersza";
     }
      
    
     $($(tablica3[licznik4]).prev()).html(j);
    licznik4++;
     }
 
    
   $(".A").hide();
   if($("input").val() === "Imię i nazwisko"){
       $("input").mouseenter(function(){
           $(".A").fadeIn();    
       })
       $("input").mouseleave(function(){
           $(".A").fadeOut();
       })
   }
   
console.log($(window).width());
   var pozycja = document.querySelector(".poemat1");
    var pozycja2 = document.querySelector("textarea");
    console.log(pozycja.getBoundingClientRect());
    console.log(pozycja2.getBoundingClientRect());
    var pozycja3 = document.querySelector(".poemat2");
    console.log(pozycja3.getBoundingClientRect());
    licznik4 = 0;
    while(licznik4<tablica2.length){
   if($(tablica2[licznik4]).nextAll("div").length<2){
       $(tablica2[licznik4]).addClass("hidden");
   }
   if($(tablica3[licznik4]).nextAll("textarea").length<2){
       $(tablica3[licznik4]).addClass("hidden");
   }
        licznik4++;
    }
    var tablica5 =[];
    var tablica6 =[];
    var tablica7 = document.getElementsByClassName("poemat2");
    var tablica8 =[];
    var funkcja2 = function(){
       var z = 0;
       while(z<arguments.length){
           tablica5[z] = tablica2[arguments[z]];
           tablica6[z] = tablica3[arguments[z]];
           tablica8[z] = tablica7[arguments[z]];
           z++;
       }
    }
    var funkcja3 = function(nazwaKlasy){
        var x = 0;
        while(x<tablica5.length){
            $(tablica5[x]).addClass(nazwaKlasy);
            $(tablica6[x]).addClass(nazwaKlasy);
            $(tablica8[x]).addClass(nazwaKlasy);
            x++;
        }
    }
    funkcja2(0,5,30,35);
    funkcja3("hidden-l");
    funkcja2(1,8,18,25,29,34);
    funkcja3("green");
    funkcja2(2,9,13,14,22,24,33);
    funkcja3("blue");
    funkcja2(3,7,10,16,20,28,32);
    funkcja3("chocolate");
    funkcja2(4,12,15,17,19,26,31);
    funkcja3("deeppink");
    funkcja2(0,30);
    funkcja3("visible");
    funkcja2(4,5,10,11,16,17,22,23,28,29,34,35);
    funkcja3("hidden");
    
    licznik4 = 0;
    while(licznik4<tablica7.length){
        var element6 = document.createElement("button");
        element6.innerHTML = "Lubię to!";
        var element7 = document.createElement("div");
        element7.innerHTML = 0;
        var element8 = document.createElement("button");
        element8.innerHTML = "Wyjdź";
        (tablica7[licznik4]).appendChild(element6);
        (tablica7[licznik4]).appendChild(element7);
        (tablica7[licznik4]).appendChild(element8);
        element7.classList.add("poemat3");
        element6.classList.add("B");
        element8.classList.add("C");
        licznik4++;
    }
    licznik4 = 0;
    var tablica10 = [];
    while(licznik4<tablica7.length){
        tablica10[licznik4] = "kliknięcia"+licznik4;
        licznik4++;
    }
    var tablica9 = document.getElementsByClassName("B");
    licznik4 = 0;   
    var licznik5 = 0;
    $(".B").click(function(){
        var m = parseInt($($(this).next()).text());
        var n = 1;
        var suma = m+n;
        $($(this).next()).replaceWith("<div>"+suma+"</div>");
        $($(this).next()).addClass("poemat3");
        var y = $($(this).next()).text();
       licznik5=$(this).parent().prevAll(".poemat2").length+$(this).parent().parent().prevAll(). length*6;
       localStorage.setItem(tablica10[licznik5],y);
    })
    while(licznik4<tablica9.length){
    if(localStorage.getItem(tablica10[licznik4])){
        var v = localStorage.getItem(tablica10[licznik4]);
       $($(tablica9[licznik4]).next()).html(v);
    }
    licznik4++;
    }
    $(".C").click(function(){
        $($(this).parent().prev()).blur();
        if($(this).parent().prevAll(".poemat1").length===6){
        $($(this).parent()).animate({
            "z-index": -1,
            opacity: 0,
            top: "-=301.046875px",
            width: "14%",
            height: "10%"
        })
        }else{
            $($(this).parent()).animate({
              "z-index": -1,
              width: "14%",
              height: "10%",
              top: "-=251.046875px",
              opacity: 0   
            })
        }
        i = $($(this).parent().prev()).val();
        j = i.split("\n");
        if(j[0] !== ""){
        j = j[0];
        } else if(j[1] !== ""){
        j = j[1];
        } else if(j[2] !== ""){
        j = j[2];
        } else{ 
        j = "Tytuł<br>wiersza";
        }
        $($(this).parent().prev().prev()).html(j);
    })
    
})  
 



