
$(document).ready(function () 
{
    $(".skitter-large").skitter({auto_play:false});
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

      var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: ['Mohamed Ali.', 'FrontEnd web devolper'],
        smartBackspace: true ,typeSpeed: 2,loop: true,showCursor: false,
      });
    let aboutOffsetTop = $("#about").offset().top;
    let workoffset= $("#work").offset().top;
$(window).scroll(function () 
{
    let wScroll = $(window).scrollTop();

    

    if(wScroll > aboutOffsetTop)
    {
       $("#main-nav").css({"backgroundColor":"rgba(0,0,0,0.8)","padding":"0px 30px"})
       $("#btnUp").fadeIn(500);
    }
    else
    {
        $("#main-nav").css({"backgroundColor":"transparent","padding":"0px 0px"})
        $("#btnUp").fadeOut(500);
    }
  if (wScroll > workoffset-100) 
  {
    callCount()
  }
})

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},3000)
})

// $("a").not("a[href^='http']") هي هي السطر اللي تحتيها
$("a[href^='#']").click(function(){
 let aHref = $(this).attr("href")
 let sectionOffset = $(aHref).offset().top
 $("html,body").animate({scrollTop:sectionOffset}, 1000); 
})
let colorBoxWidth = $(".color-item").outerWidth();
let colorBox = $(".color-box");
colorBox.animate({"left":`-${colorBoxWidth}`}, -1500);
$(".color-box i").click(function () 
{ 
    let colorBoxWidth = $(".color-item").outerWidth();
    let color = $(".colors");
    let colorBox = $(".color-box");
    
 
if (colorBox.css("left") == "0px") 
{
    colorBox.animate({"left":`-${colorBoxWidth}`}, 1000);
}
else
{
    colorBox.animate({"left":  `0px`}, 1000)
}
for (let i = 0; i < color.length; i++) 
{
    let red = Math.round(Math.random()*255)
    let green = Math.round(Math.random()*255)
    let blue = Math.round(Math.random()*255)
  color.eq(i).css("backgroundColor",`rgb(${red},${green},${blue})`);  

}

color.click(function(){
    let colorss= $(this).css("backgroundColor")
    $(".change").css("color",colorss);
})    
})
$(document).ready(function () 
{
  $(".loading-screen").fadeOut(500,function () 
  {
   $("body").css("overflow","auto",500)   
  })  
})
})
function countUp(element , limit, speed) 
{
  let x = 0 

  let count = setInterval(()=>
  {
    x++
    $(element).html(x)
    if (x==limit) 
    {
    clearInterval(count)    
    }
  },speed)  
}
function callCount() 
{
    countUp("#projectNum",100,50)
    countUp("#clientNum",50,70)
    countUp("#codeLineNum",1120,0)
    countUp("#coffeNum",40,80)   
}

function getTime() 
{
  let fullTime= new Date()
  ;
  if (fullTime.getUTCHours()>12) 
  {
    $("#hours").text(fullTime.getHours()-12);
  }
  else
  {
    $("#hours").text(fullTime.getHours()); 
  }
  $("#minutes").text(fullTime.getMinutes());
  $("#second").text(fullTime.getSeconds());  
}
setInterval(getTime,1000)