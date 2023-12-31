window.addEventListener("DOMContentLoaded", function () {
  const yourForm = document.getElementById("quote");
  const formDiv = document.getElementById("detail");
  yourForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(yourForm);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json();
    }).then((data) => {

      const message = document.createElement('div');
      message.classList.add("complete");
      message.textContent = 'Thank you! We will contact you soon';
      message.style.fontWeight = 'bold';
      message.style.fontSize = '18px';
      const lineBreak = document.createElement('br');
      yourForm.remove();
      formDiv.appendChild(message);
      formDiv.appendChild(lineBreak);
    })
  })
});

function smoothScroll(target) {
  const targetElement = document.getElementById(target);

  if (targetElement) {
    const offset = targetElement.getBoundingClientRect().top + window.scrollY;

    window.scroll({
      top: offset,
      behaviour: 'smooth'
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var process = document.querySelectorAll(".process li");
  var desc = document.querySelectorAll(".desc p");
  var form = document.getElementById("quote");
  var footImg = document.querySelectorAll(".footImg li");
  var descImg = document.getElementById("desc_image")

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01
  };

  var observer_multiple = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add("fade-in");
        }, index * 700);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  var observe_single = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  process.forEach(function (item) {
    observer_multiple.observe(item);
  });

  footImg.forEach(function (item) {
    observer_multiple.observe(item);
  });

  desc.forEach(function (item) {
    observe_single.observe(item);
  });

  observe_single.observe(form);

  observe_single.observe(descImg);
});

