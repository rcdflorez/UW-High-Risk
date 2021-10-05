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
  e.preventDefault();
  $("div.step-2")
    .load("upload-test.html", function () {})
    .hide()
    .fadeIn();
});
