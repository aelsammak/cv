var width = $(document).width();
var originalBirdLocation = $(".bird").position().left;
var audio = new Audio('images/pop.mp3');

// for(var i = birdLocation; i < width; i = i + 4) {
//   $(".bird").css("left", i + "px")
// }

$(".bird").on("click", function () {
  audio.play();
  $(".bird").stop();
  $(".bird").attr("src", "images/explosion.gif");
  setTimeout(function callBack() {
    $(".bird").hide();
  }, 800);
});

$(document).ready(function birdAnimation() {
    $(".bird")
    .animate({left: '47%'}, 9000, "swing", changeImage)
    .animate({bottom: '25%', left: '-47%'}, 9000, "swing", changeImage)
    .animate({bottom: '50%', left: '47%'}, 9000, "swing", changeImage)
    .animate({bottom: '-4%', left: '-47%'}, 9000, "swing", changeImage)
    birdAnimation();
});

function changeImage() {
  if($(".bird").position().left == 0) {
    $(".bird").attr("src", "images/bird.gif");
  } else {
    $(".bird").attr("src", "images/bird-flying.gif");
  }
}

// $(document).ready(function(){
//     function animate() {
//         $(".bird")
//         .animate({left: '47%'}, 9000, function(){
//             $(".bird").animate({left: '-47%'}, 9000, function(){
//                     animate();
//                 });
//             });
//         });
//     }
//     animate();
// });
