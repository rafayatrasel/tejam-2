$(document).ready(function(){
    $(".slider-area").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });
  }); 


  $('.popup-link').magnificPopup({
    type: 'iframe'
    // other options
  });


  // init Isotope
var $grid = $('.isotop-item').isotope({
  // options
});
// filter items on button click
$('.isotop-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$(document).ready(function(){
  $(".test-content").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  });
}); 



// ------------SLider bottom--------------//
// $('.sync').each(function(){ //Updated Here
// 	(function(_e){ //Updated Here
//   var sync1 = $(_e).find(".slider");
//   var sync2 = $(_e).find(".navigation-thumbs");

//   var thumbnailItemClass = '.owl-item';

//   var slides = sync1.owlCarousel({
//     video:true,
//     startPosition: 12,
//     items:1,
//     loop:true,
//     margin:10,
//     autoplay:false,
//     autoplayTimeout:6000,
//     autoplayHoverPause:false,
//     nav: false,
//     dots: true
//   }).on('changed.owl.carousel', syncPosition);

//   function syncPosition(el) {
//     $owl_slider = $(this).data('owl.carousel');
//     var loop = $owl_slider.options.loop;

//     if(loop){
//       var count = el.item.count-1;
//       var current = Math.round(el.item.index - (el.item.count/2) - .5);
//       if(current < 0) {
//           current = count;
//       }
//       if(current > count) {
//           current = 0;
//       }
//     }else{
//       var current = el.item.index;
//     }

//     var owl_thumbnail = sync2.data('owl.carousel');
//     var itemClass = "." + owl_thumbnail.options.itemClass;


//     var thumbnailCurrentItem = sync2
//     .find(itemClass)
//     .removeClass("synced")
//     .eq(current);

//     thumbnailCurrentItem.addClass('synced');

//     if (!thumbnailCurrentItem.hasClass('active')) {
//       var duration = 300;
//       sync2.trigger('to.owl.carousel',[current, duration, true]);
//     }   
//   }
//   var thumbs = sync2.owlCarousel({
//     startPosition: 12,
//     items:4,
//     loop:false,
//     margin:10,
//     autoplay:false,
//     nav: false,
//     dots: false,
//     onInitialized: function (e) {
//       var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
//       thumbnailCurrentItem.addClass('synced');
//     },
//   })
//   .on('click', thumbnailItemClass, function(e) {
//       e.preventDefault();
//       var duration = 300;
//       var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
//       sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
//   }).on("changed.owl.carousel", function (el) {
//     var number = el.item.index;
//     $owl_slider = sync1.data('owl.carousel');
//     $owl_slider.to(number, 100, true);
//   });
//   })(this);  //Updated Here
// });



