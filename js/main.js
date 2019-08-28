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
    let form2item4 = document.querySelector("#form2item4").value || 0;
    let form2item5 = document.querySelector("#form2item5").value || 0;
    let form3item1 = document.querySelector("#form3item1").value || 0;
    let form3item8 = document.querySelector("#form3item8").value || 0;
    // form4item1
    let form4item1 = document.querySelector("#form4item1").checked;
    let form4item1result = document.querySelector("#form4item1result");
    let form4item1resultvalue = form4item1 ? 144000 * form2item4: 0;
    form4item1result.innerHTML =  form4item1resultvalue + " тг.";
    // form4item2
    let form4item2 = document.querySelector("#form4item2").checked;
    let form4item2result = document.querySelector("#form4item2result");
    let form4item2resultvalue = form4item2 ? 600000 * form2item4: 0;
    form4item2result.innerHTML =  form4item2resultvalue + " тг.";
    // form4item3
    let form4item3 = document.querySelector("#form4item3").checked;
    let form4item3result = document.querySelector("#form4item3result");
    let form4item3resultvalue = form4item3 ? 300000 * form3item1: 0;
    form4item3result.innerHTML =  form4item3resultvalue + " тг.";
    // form4item4
    let form4item4 = document.querySelector("#form4item4").checked;
    let form4item4result = document.querySelector("#form4item4result");
    let form4item4resultvalue = form4item4 ? 3000000 * (form2item5 + form3item8): 0;
    form4item4result.innerHTML =  form4item4resultvalue + " тг.";
  }
})();
