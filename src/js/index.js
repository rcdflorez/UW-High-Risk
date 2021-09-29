function BerbixHandOffToPhone() {
  $("div.step-1 a.start-verification").bind("click", function (e) {
    e.preventDefault();
    moveRight();
  });
  $("section.berbix div.content div.step-1 p").html(
    "Please complete the verification to continue"
  );
  $("section.berbix div.content div.step-1 form").html(
    "<div class='spinner'><div class='cube1'></div><div class='cube2'></div></div>"
  );

  $("section.berbix div.content div.step-1 a.btn")
    .html("Continue")
    .addClass("disabled verification-completed")
    .removeClass("start-verification");
}

function BerbixVerificationCompleted() {
  $("section.berbix div.content div.step-1 p").html(
    "Verification completed, thanks."
  );
  $("section.berbix div.content div.step-1 form").html(
    "<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>"
  );
  $("section.berbix div.content div.step-1 a.btn").removeClass("disabled");
}

var slideCount = $("#slider ul li").length;
var slideWidth = $("#step-nav").width() + 32; //$("#slider ul li").width();
var slideHeight = $("div.step-3").innerHeight();
var sliderUlWidth = slideCount * slideWidth;
var ulInitialHeight = $("#slider ul li:first-child").height();

var currentStep = 0;

var navWidth = $("#step-nav").width() + 32;
console.log(slideHeight);

$("div.slider ul li, div.slider").css({ width: navWidth });
$("div.slider").css({ width: navWidth });

$("#slider").css({ width: navWidth });

$("#slider ul").css({
  width: sliderUlWidth,
  marginLeft: -slideWidth + slideWidth * -0.17,
  height: ulInitialHeight,
});

$("#slider ul li:last-child").prependTo("#slider ul");

function moveLeft() {
  $("#slider ul").animate(
    {
      left: +slideWidth,
    },
    200,
    function () {
      $("#slider ul li:last-child").prependTo("#slider ul");
      $("#slider ul").css("left", "");
    }
  );
}

function moveRight() {
  //$(".step-nav .container a")[currentStep].addClass("step-ok");

  if (currentStep === 2) return;

  var completedStepNav = $(".step-nav .container a")[currentStep];

  $(completedStepNav).addClass("step-ok");

  var nextHeightValue = $("#slider ul li:last-child").height();
  console.log(nextHeightValue);
  $("#slider ul").css({ height: nextHeightValue });
  $("#slider ul").animate(
    {
      left: -slideWidth,
    },
    200,
    function () {
      $("#slider ul li:first-child").appendTo("#slider ul");
      $("#slider ul").css("left", "");
    }
  );
  currentStep++;

  var currentStepNav = $(".step-nav .container a")[currentStep];
  $(currentStepNav).addClass("active-nav");
}

try {
  document.getElementById("phone").addEventListener("input", function (e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
} catch (e) {}

$("div.step-1 a.verification-completed").click(function (e) {
  e.preventDefault();
  moveRight();
});
$("div.step-1 a.start-verification").click(function (e) {
  e.preventDefault();
  $(this).unbind("click", arguments.callee);
  BerbixHandOffToPhone();
  setTimeout(function () {
    BerbixVerificationCompleted();
  }, 3500);
});
