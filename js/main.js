$(document).ready(function(){
    $('.testimonails__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
          {
              breakpoint: 1199,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
      });

      $('.blog__slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1199,
              settings: {
                dots: true,
                slidesToShow: 3
              }
            },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              dots: true,
              slidesToShow: 1
            }
          }
        ]

      })
 

      



      




     // fixed heafer 
     let header = $('#header')
     let intro = $('#intro')
     let introH = intro.innerHeight()
     let scrollPos = $(window).scrollTop()
     $(window).on('scroll', function () {
       scrollPos = $(this).scrollTop()

       if(scrollPos > introH) {
         header.addClass('fixed')
       } else {
         header.removeClass('fixed')
       }
     })

     // smooth scroll 
     $('[data-scroll]').on('click', function (event){
       event.preventDefault();

       let elementID = $(this).data('scroll');
       let elementOffset = $(elementID).offset().top;

       $('html, body').animate({
         scrollTop: elementOffset-50
       })
      })

      //  navToggle 
      let ham = $('#header')
      let navToggle = $('#navToggle')
        navToggle.on('click', function(event){
          event.preventDefault();
          ham.toggleClass('show');
          $('body').toggleClass('lock')
      })

      



    
})
