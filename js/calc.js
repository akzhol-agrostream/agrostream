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
    // form2
    let form2item1 = document.querySelector("#form2item1").valueAsNumber || 0;
    let form2item2 = document.querySelector("#form2item2").valueAsNumber || 0;
    let form2item3 = document.querySelector("#form2item3").valueAsNumber || 0;
    let form2item4 = document.querySelector("#form2item4").valueAsNumber || 0;
    let form2item5 = document.querySelector("#form2item5").valueAsNumber || 0;
    let form2item6 = document.querySelector("#form2item6").valueAsNumber || 0;
    let form2item7 = document.querySelector("#form2item7").valueAsNumber || 0;
    let form2item8 = document.querySelector("#form2item8").valueAsNumber || 0;
    let form2item9 = document.querySelector("#form2item9").valueAsNumber || 0;
    let form2item10 = document.querySelector("#form2item10").valueAsNumber || 0;
    // form3
    let form3item1 = document.querySelector("#form3item1").valueAsNumber || 0;
    let form3item2 = document.querySelector("#form3item2").valueAsNumber || 0;
    let form3item3 = document.querySelector("#form3item3").valueAsNumber || 0;
    let form3item4 = document.querySelector("#form3item4").valueAsNumber || 0;
    let form3item5 = document.querySelector("#form3item5").valueAsNumber || 0;
    let form3item6 = document.querySelector("#form3item6").valueAsNumber || 0;
    let form3item7 = document.querySelector("#form3item7").valueAsNumber || 0;
    let form3item8 = document.querySelector("#form3item8").valueAsNumber || 0;
    let form3item9 = document.querySelector("#form3item9").valueAsNumber || 0;
    let form3item10 = document.querySelector("#form3item10").valueAsNumber || 0;
    let form3item11 = document.querySelector("#form3item11").valueAsNumber || 0;
    let form3item12 = document.querySelector("#form3item12").valueAsNumber || 0;
    let form3item13 = document.querySelector("#form3item13").valueAsNumber || 0;
    let form3item14 = document.querySelector("#form3item14").valueAsNumber || 0;
    // form4item1
    let form4item1 = document.querySelector("#form4item1").checked;
    let form4item1resultvalue = form4item1 ? 144000 * form2item4 : 0;
    document.querySelector("#form4item1result").innerHTML = form4item1resultvalue + " тг.";
    // form4item2
    let form4item2 = document.querySelector("#form4item2").checked;
    let form4item2resultvalue = form4item2 ? 600000 * form2item4 : 0;
    document.querySelector("#form4item2result").innerHTML = form4item2resultvalue + " тг.";
    // form4item3
    let form4item3 = document.querySelector("#form4item3").checked;
    let form4item3resultvalue = form4item3 ? 300000 * form3item1 : 0;
    document.querySelector("#form4item3result").innerHTML = form4item3resultvalue + " тг.";
    // form4item4
    let form4item4 = document.querySelector("#form4item4").checked;
    let form4item4resultvalue = form4item4 ? 3000000 * (form2item5 + form3item8) : 0;
    document.querySelector("#form4item4result").innerHTML = form4item4resultvalue + " тг.";
    // form4item5
    let form4item5 = document.querySelector("#form4item5").checked;
    let form4item5resultvalue = form4item5 ? 112 * form2item1 : 0;
    document.querySelector("#form4item5result").innerHTML = form4item5resultvalue + " тг.";
    // form4item6
    let form4item6 = document.querySelector("#form4item6").checked;
    let form4item6resultvalue = form4item6 ? 150 * form2item1 * 3 : 0;
    document.querySelector("#form4item6result").innerHTML = form4item6resultvalue + " тг.";
    // form4item7
    let form4item7 = document.querySelector("#form4item7").checked;
    let form4item7resultvalue = form4item7 ? 1000 * form2item3 : 0;
    document.querySelector("#form4item7result").innerHTML = form4item7resultvalue + " тг.";
    // form4item8
    let form4item8 = document.querySelector("#form4item8").checked;
    let form4item8resultvalue = form4item8 ? 60000 * form2item3 : 0;
    document.querySelector("#form4item8result").innerHTML = form4item8resultvalue + " тг.";
    // form4item9
    let form4item9 = document.querySelector("#form4item9").checked;
    let form4item9resultvalue = form4item9 ? 3000000 * form3item9 : 0;
    document.querySelector("#form4item9result").innerHTML = form4item9resultvalue + " тг.";
    // form4item10
    let form4item10 = document.querySelector("#form4item10").checked;
    let form4item10resultvalue = form4item10 ? 4500000 * form3item10 : 0;
    document.querySelector("#form4item10result").innerHTML = form4item10resultvalue + " тг.";
    // form4item11
    let form4item11 = document.querySelector("#form4item11").checked;
    let form4item11resultvalue = form4item11 ? 2000 * form2item6 : 0;
    document.querySelector("#form4item11result").innerHTML = form4item11resultvalue + " тг.";
    // form4item12
    let form4item12 = document.querySelector("#form4item12").checked;
    let form4item12resultvalue = form4item12 ? 60000 : 0;
    document.querySelector("#form4item12result").innerHTML = form4item12resultvalue + " тг.";
    // form4item13
    let form4item13 = document.querySelector("#form4item13").checked;
    let form4item13resultvalue = form4item13 ? 200 * form2item1 : 0;
    document.querySelector("#form4item13result").innerHTML = form4item13resultvalue + " тг.";
    // form4item14
    let form4item14 = document.querySelector("#form4item14").checked;
    let form4item14resultvalue = form4item14 ? 10000000 : 0;
    document.querySelector("#form4item14result").innerHTML = form4item14resultvalue + " тг.";
    // form4item15
    let form4item15resultvalue = 300000;
    let checked = document.querySelector("#form4").querySelectorAll("input[type=\"checkbox\"]:checked").length - (form4item5 + form4item6);
    if (checked > 2) {
      form4item15resultvalue = 300000 * checked / 2;
    }
    form4item15result.innerHTML = form4item15resultvalue + " тг.";
    // results
    // result2
    let result2value = form4item1resultvalue + form4item2resultvalue + form4item3resultvalue + form4item4resultvalue + form4item5resultvalue + form4item7resultvalue + form4item8resultvalue + form4item9resultvalue + form4item10resultvalue + form4item11resultvalue + form4item14resultvalue;
    document.querySelector("#result2").innerHTML = result2value;
    // result3
    let result3value = form4item6resultvalue + form4item12resultvalue + form4item13resultvalue + form4item15resultvalue;
    document.querySelector("#result3").innerHTML = result3value;
    // result1
    let result1value = result2value + result3value;
    document.querySelector("#result1").innerHTML = result1value;

    // result5
    let result5value = +(form2item3 * form2item9 * form2item10 * (form3item12 / 100)).toFixed(0);
    document.querySelector("#result5").innerHTML = result5value;
    // result6
    let result6value = +(form2item7 * (form3item11 / 100) * form2item1 / 10 * form2item2 + (form2item7 + form2item7 * (form3item11 / 100) * form2item1 / 10) * (form2item8 / 100) * (form3item13 / 100) * form2item2 + form3item2 * (form3item14 / 100) * form2item1).toFixed(0);
    document.querySelector("#result6").innerHTML = result6value;
    // result7
    let result7value = +(form3item6 * 12 * form3item5 + form3item2 * (form3item7 / 100) * form2item1).toFixed(0);
    document.querySelector("#result7").innerHTML = result7value;
    // result8
    let result8value = +(form3item3 * 35 * form2item2 + form3item2 * (form3item4 / 100) * form2item1).toFixed(0);
    document.querySelector("#result8").innerHTML = result8value;
    // result4
    let result4value = result5value + result6value + result7value + result8value;
    document.querySelector("#result4").innerHTML = result4value;

    // result9
    let result9value = +(result1value / result4value).toFixed(2);
    document.querySelector("#result9").innerHTML = result9value;
  }
})();
