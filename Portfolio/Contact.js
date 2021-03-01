window.addEventListener("DOMContentLoaded", function() {// get the form elements defined in your form HTML above
    var form = document.getElementById("contact");
    var status = document.getElementById("success-message");

   
    function success() { // Success function for after the form is submitted
       form.reset();// clears user input from before so user can re enter the information
      status.classList.add('success');//accecess to success in css
      status.innerHTML = "Thanks!";//displayed text 
    }

    function error() { // Success function for after the form is submitted
        status.classList.add('error');//accecess to error in css
      status.innerHTML = "Oops! There was a problem.";//displayed text
    }

    form.addEventListener("submit", function(ev) { // handle the form submission event
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  function ajax(method, url, data, success, error) {  // helper function for sending an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }