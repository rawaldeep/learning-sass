$(document).ready(function(){
    $(".kies").click(function(){
      $(".container").toggleClass("hide");
      $(".fa-minus-circle").toggleClass("hide");
      $(".fa-plus-circle").toggleClass("hide");
    });
    
  });
  $(document).ready(function(){
    $(".iconMenu").click(function(){
      $(".menu").toggleClass("out");
        $('body').toggleClass('lock-scroll');
    
    });
    $(".close").click(function(){
        $(".menu").toggleClass("out");
        $('body').toggleClass('lock-scroll');
      });
  });
  