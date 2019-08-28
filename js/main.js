(function() {
  function toggleVisibility(btnClass, parentClass, classToShow, classToHide) {
    let btns = document.querySelectorAll(btnClass);
    for (let i = 0; i < btns.length; i++) {
      let el = btns[i];
      let parent = el.closest(parentClass);
      let elToShow = parent.querySelector(classToShow);
      let elToHide = parent.querySelector(classToHide);
      el.onclick = function() {
        elToHide.classList.add("hidden");
        elToShow.classList.remove("hidden");
      };
    }
  }
  toggleVisibility(".form-btn-open", ".form", ".form-opened", ".form-closed");
  toggleVisibility(".form-btn-close", ".form", ".form-closed", ".form-opened");
  (function() {
    let btn = document.querySelector("#calculate-btn");
    btn.onclick = function() {
      calculate();
    };
  })();
  function calculate() {
    let form4item1 = document.querySelector("#form4item1").checked;
    let form4item1result = document.querySelector("#form4item1result");
    let form2item4 = document.querySelector("#form2item4").value || 0;
    let form4item1resultvalue = form4item1 ? 144000 * form2item4: 0;
    form4item1result.innerHTML =  form4item1resultvalue + " тг.";
  }
})();
