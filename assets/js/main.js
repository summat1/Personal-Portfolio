const interests = document.querySelectorAll(".col-md-4");

interests.forEach(interest => {
    const learnMoreBtn = interest.querySelector(".learn-more");
    const hideContainer = interest.querySelector(".hide-container");
    const hideBtn = hideContainer.querySelector(".hide");
    const content = interest.querySelector(".expanded-content");
  
    learnMoreBtn.addEventListener("click", function() {
      content.style.display = "block";
      hideContainer.style.display = "inline-block";
      learnMoreBtn.style.display = "none";
    });
  
    hideBtn.addEventListener("click", function() {
      content.style.display = "none";
      hideContainer.style.display = "none";
      learnMoreBtn.style.display = "inline-block";
    });
});