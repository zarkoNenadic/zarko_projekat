function showPopup() {
    document.querySelector(".popup").style.display = "block";
  }
  
  function wait(delay) {
    let scrolled = false;
  
    function handleScroll() {
      if (!scrolled) {
        scrolled = true;
        setTimeout(showPopup, delay);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  }
  
  wait(4000);
  
  document.querySelector("#closePopup").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });
  