window.addEventListener("DOMContentLoaded", function() { 
    const yourForm = document.getElementById("quote");
    yourForm.addEventListener("submit", function(e) { 
      e.preventDefault(); 
      const data = new FormData(yourForm); 
      const action = e.target.action; 
      fetch(action, { 
        method: 'POST', 
        body: data, 
      }).then((response) => {
        response.json();
      }).then((data) => {
          alert("Success!")
      })
    })
  });