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

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  });

  // Target all elements you want to animate on scroll
  document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
    observer.observe(element);
  });
});