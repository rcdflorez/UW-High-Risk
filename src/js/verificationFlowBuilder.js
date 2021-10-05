const navContainer = $("#stepsContainer");
let stepName = "test 1";
let stepIndex = "1";

const createNavigationBar = () => {
  navContainer.empty();
  navContainer.append(
    `<a class="active-nav" href=""><span>${stepIndex}</span><p>${stepName}</p></a><small></small>`
  );
};

//createNavigationBar();
