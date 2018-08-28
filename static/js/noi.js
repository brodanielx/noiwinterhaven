let sections = document.querySelectorAll('.alternate-bg');
for (let i = 0; i < sections.length; i++) {
  if (i % 2 === 0) {
    sections[i].className += ' lightnonwhitebg';
  }
}

var webcast = document.getElementById('webcast');
var webcastDrop = document.getElementById('webcastdrop');
var infoCenter = document.getElementById('infocenter');
var infoCenterDrop = document.getElementById('infocenterdrop');

// webcast dropdown
webcast.addEventListener('mouseover', function() {
  webcastDrop.classList.add('open');
});
webcastDrop.addEventListener('mouseover', function() {
  webcastDrop.classList.add('open');
});
webcast.addEventListener('mouseleave', function() {
  webcastDrop.classList.remove('open');
});
webcastDrop.addEventListener('mouseleave', function() {
  webcastDrop.classList.remove('open');
});

//info center dropdown
infocenter.addEventListener('mouseover', function() {
  infoCenterDrop.classList.add('open');
});
infoCenterDrop.addEventListener('mouseover', function() {
  infoCenterDrop.classList.add('open');
});
infocenter.addEventListener('mouseleave', function() {
  infoCenterDrop.classList.remove('open');
});
infoCenterDrop.addEventListener('mouseleave', function() {
  infoCenterDrop.classList.remove('open');
});

let selfa = document.getElementById('self');
let studygroup = document.getElementById('studygroup');
selfa.addEventListener('click', function() {
  studygroup.classList.toggle('collapse');
});

let sundayma = document.getElementById('sundayma');
let sundaymeeting = document.getElementById('sundaymeeting');
sundayma.addEventListener('click', function() {
  sundaymeeting.classList.toggle('collapse');
});

// $('a[href*="#"]:not([href="#"])').click(function() {
//   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 900);
//       return false;
//     }
//   }
// });

$('a[href*="#"]:not([href="#"])').on('click tap', function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 900);
      return false;
    }
  }
});
