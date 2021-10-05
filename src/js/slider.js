const slideCount = $("#slider ul li").length;
const slideWidth = $("#step-nav").width() + 32; //$("#slider ul li").width();
const slideHeight = $("div.step-3").innerHeight();
const sliderUlWidth = slideCount * slideWidth;
const ulInitialHeight = 615; // $("#slider ul li:first-child").height();

var navContainerWidth =
  $("#nav-steps-container").outerWidth() -
  parseInt($("#slider").css("padding-left")) / 2;

console.log(navContainerWidth);

var marginLeftCalculation = 0;
var desktopMarginCalulation =
  $("#testDiv").innerWidth() +
  parseInt($("#testDiv").css("padding-left")) * 3 +
  4;

if (window.screen.width > 800) {
  marginLeftCalculation = desktopMarginCalulation;
} else {
  marginLeftCalculation = navContainerWidth;
}

var currentStep = 0;

var navWidth = $("#step-nav").width() + 32;
console.log(slideHeight);

$("div.slider ul li, div.slider").css({ width: navWidth });
$("div.slider").css({ width: navWidth });

$("#slider").css({ width: navWidth });

$("#slider ul").css({
  width: sliderUlWidth,
  marginLeft: -marginLeftCalculation,
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
