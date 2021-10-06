const navContainer = $("#stepsContainer");
const slidesContainer = $("div#slider ul");

let stepIndex = 1;

const createNavigationBar = () => {
  navContainer.empty();
  InitExample.verifications.forEach((stepName) => {
    if (stepName) {
      stepIndex < InitExample.verifications.length
        ? navContainer.append(
            `<a class="" href=""><span>${stepIndex}</span><p>${stepName.display_title}</p></a><small></small>`
          )
        : navContainer.append(
            `<a class="" href=""><span>${stepIndex}</span><p>${stepName.display_title}</p></a>`
          );
    }
    stepIndex++;
  });
};

const createSlides = () => {
  slidesContainer.empty();

  InitExample.verifications.forEach((stepName) => {
    slidesContainer.append(
      `<li>${htmlTemplates[stepName.verification_provider]}</li>`
    );
  });
};
