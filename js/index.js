
$(document).ready(function(){

    
let featuresOffset  = $("#features").offset().top;
  
$(window).scroll(function () {  
   let wScroll=  $(window).scrollTop();
   if(wScroll >  featuresOffset-50)
   {
    $("#btnUp").fadeIn(500);
    $("#navbar").css("backgroundColor","rgba(0,0,0,0.5)");
   }
   else
   {
    $("#btnUp").fadeOut(500);
    $("#navbar").css("backgroundColor","transparent");

   }
    
})

$("#btnUp").click(function(){

    $("html,body").animate( {scrollTop:'0'}, 2000)
})

 
$(".nav a").click(function(){

    let aHref =  $(this).attr("href");//#service#menu

    let sectionOffset  = $(aHref).offset().top;

    $("html,body").animate( {scrollTop:sectionOffset}, 1000);

});


// opptions
(function()
{   
let colorBoxs = $(".color-box");

colorBoxs.eq(0).css("backgroundColor","rgb(247, 117, 11)");
colorBoxs.eq(1).css("backgroundColor","#dc3545");
colorBoxs.eq(2).css("backgroundColor","#0d6efd");
colorBoxs.eq(3).css("backgroundColor","purple");

let optionsBoxWidth  = $(".options-box").outerWidth();//
$("#options").css("left" , `-${optionsBoxWidth}`);


colorBoxs.click(function(){
    // return color
    let color = $(this).css("backgroundColor");
    $(".change").css("color" , color);

    $(".img-box").click(function(){
 
        let imgSrc =   $(this).attr("src");
        $("header").css("backgroundImage" , `url(${imgSrc})`);

    })
})


$("#options i").click(function(){

    if( $("#options").css("left") == "0px" )
    {
        $("#options").animate({left:`-${optionsBoxWidth}`} , 1000);
    }
    else
    {
        $("#options").animate({left:`0px`} , 1000);
    }

})


})();
 

// FOR CHANGE PHOTO getter & setter
// $(".imgItem").click(function(e){

//     let imgSrc = $(this).attr('src');

//     $(".mainImage").attr("scr",imgSrc );

// })






})