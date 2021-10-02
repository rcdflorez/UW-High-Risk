/*function BerbixHandOffToPhone() {
  $("div.step-1 a.start-verification").bind("click", function (e) {
    e.preventDefault();
    moveRight();
  });
  $("section.berbix div.content div.step-1 p").html(
    "Please, complete the verification to continue."
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
  $("section.berbix div.content div.step-1 h1.heading-title").html(
    "Thanks for completing the ID check"
  );
  $("section.berbix div.content div.step-1 p").html(
    "Now proceed with bank verification."
  );
  $("section.berbix div.content div.step-1 form").html(
    "<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>"
  );
  $("div.options-note").addClass("invisible");
  $("div.step-1 img").addClass("invisible");
  $("section.berbix div.content div.step-1 a.btn").removeClass("disabled");
}*/

var slideCount = $("#slider ul li").length;
var slideWidth = $("#step-nav").width() + 32; //$("#slider ul li").width();
var slideHeight = $("div.step-3").innerHeight();
var sliderUlWidth = slideCount * slideWidth;
var ulInitialHeight = 615; // $("#slider ul li:first-child").height();

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

$("a.uploadLink").click(function (e) {
  console.log("Holi");
  e.preventDefault();
  $("div.step-2")
    .load("upload-test.html", function () {})
    .hide()
    .fadeIn();
});

var handler = BerbixVerify.configure({
  onComplete: function () {
    $("#berbixArea").html(
      '<h1 class="heading-title mb-5">  Thanks for completing the ID check</h1><p class="mb-5">Now proceed with bank verification.</p><svg class="checkmark mx-auto mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><a onClick="(function(){moveRight()})();return false;" href="" class="btn justify-content-center btn btn-access mb-3 verification-completed"> Continue</a>'
    );
    startLendMateFlow();
  },
  onExit: function () {
    alert("Verification exited.");
  },
});

var hosted = false;
var testName = "Ricardo's test";
var loanId = parseInt(Math.random() * 100000);
var verificationDomain = "https://d37e-99-158-137-142.ngrok.io"; //"https://vportaltest.explorecredit.com";

$.ajax(`${verificationDomain}/api/uw_flow/berbix/createClientToken`, {
  method: "POST",
  crossDomain: true,
  beforeSend: function () {
    //
  },
  success: function () {},
  data: {
    hosted,
    test_name: testName,
    loan_id: loanId,
  },
})
  .done((data) => {
    clientToken = data.client_token;

    handler.open({
      clientToken: clientToken,
      modal: false,
      root: "berbixArea",
    });
  })
  .then(() => {
    $("div.BerBix-place-holder").fadeOut("slow", function () {
      $(this).html("");
    });
  });

function startLendMateFlow() {
  $.ajax(`${verificationDomain}/api/uw_flow/lendmate/createClientToken`, {
    method: "POST",
    crossDomain: true,
    data: {
      loan_id: loanId,
    },
  }).done((data) => {
    data.widget_link;

    let lmFrame = $("#lendMateContainer");
    let iframeSource = data.widget_link;
    lmFrame.attr("src", iframeSource);

    window.onmessage = (event) => {
      console.log(`Received message: ${event.data}`);
      console.log(event);
      if (event.data.success) {
        setTimeout(function () {
          $("div.step-2").html(
            '<svg class="checkmark mx-auto mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><h1 class="my-sm-4 heading-title col-md-11 mx-auto mb-5">Your Account is successfully verified and linked!</h1><a onClick="(function(){moveRight()})();return false;" href="" class="btn justify-content-center btn btn-access mb-3 verification-completed"> Continue</a>'
          );
        }, 2000);
      }
    };
  });
}
