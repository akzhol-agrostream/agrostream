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
  toggleVisibility(".form-btn-open", ".form", ".form-opened", ".form-closed")
  toggleVisibility(".form-btn-close", ".form", ".form-closed", ".form-opened")

})();
