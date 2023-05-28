// Example starter JavaScript for disabling form submissions if there are invalid fields
document.addEventListener("DOMContentLoaded", () => {
  (() => {
    "use strict";
    const buttonSubmitForm = document.getElementById("submit-form-button");
    const buttonCleanForm = document.getElementById("clean-form-button");
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    buttonSubmitForm.addEventListener(
      "click",
      (event) => {
        Array.from(forms).forEach((form) => {
          event.stopPropagation();
          form.classList.add("was-validated");
        });
      },
      false
    );

    buttonCleanForm.addEventListener(
      "click",
      (event) => {
        Array.from(forms).forEach((form) => {
          event.stopPropagation();
          form.classList.remove("was-validated");
        });
      },
      false
    );
  })();
});
