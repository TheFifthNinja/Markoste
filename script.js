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

document.addEventListener("DOMContentLoaded", function() {
  var listItems = document.querySelectorAll(".process li");

  var options = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.5 
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add("fade-in");
        }, index * 700); 
        observer.unobserve(entry.target);
      }
    });
  }, options);

  listItems.forEach(function(item) {
    observer.observe(item);
  });
});