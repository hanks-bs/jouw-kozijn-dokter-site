 let makeRequest = (method, url, data) => {
   return new Promise(function (resolve, reject) {
     let xhr = new XMLHttpRequest();
     xhr.open(method, url);
     xhr.onload = function () {
       if (this.status >= 200 && this.status < 300) {
         resolve(xhr.response);
       } else {
         reject({
           status: this.status,
           statusText: xhr.statusText
         });
       }
     };
     xhr.onerror = function () {
       reject({
         status: this.status,
         statusText: xhr.statusText
       });
     };
     if (method == "POST" && data) {
       document.body.style.overflow = "hidden";
       UIkit.notification({
         message: 'Het verzenden is bezig',
         pos: 'bottom-right',
         status: 'primary'
       }, )
       xhr.send(data);
     } else {
       xhr.send();
     }
   });
 }
 const listenBtn = () => {
  let file_buttons = document.querySelectorAll(".uk-form-controls > button");

  file_buttons.forEach(btn => {
      btn.addEventListener("click", () => {

        btn.parentNode.querySelector("input").click();
        console.log("TEST");
      });
  });
 }
 listenBtn();

const contactFrom = () => {
  document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = new FormData();
    let files = document.querySelectorAll(".form__inputContainer .uk-form-controls>input[type='file']");
if(files[0].files.length != 0)
{
  if(files[0].files[0].size > 5242880)
    {
      UIkit.notification({
        message: 'De bijlage is te groot (max. 5MB)',
        pos: 'bottom-right',
        status: 'danger'
      }, )

      return 0;
    }
}
if(files[1].files.length != 0)
{
  if(files[1].files[0].size> 5242880)
    {
      UIkit.notification({
        message: 'De bijlage is te groot (max. 5MB)',
        pos: 'bottom-right',
        status: 'danger'
      }, )

      return 0;
    }
}

    formData.append("name", document.querySelector("#form-name").value);
    formData.append("subject", document.querySelector("#form-subject").value);
    formData.append("email", document.querySelector("#form-email").value);
    formData.append("phone", document.querySelector("#form-phone").value);
    formData.append("message", document.querySelector("#form-message").value);
    formData.append("file1", files[0].files[0]);
    formData.append("file2", files[1].files[0]);


      makeRequest('POST', "./assets/php/send-email.php", formData).then(response => {
        const data = response;
        UIkit.notification.closeAll()
        document.body.style.overflow = "auto";
        if (response == "Complete") {
          document.querySelector("#contact-form").reset();
          UIkit.notification({
            message: 'Verzonden!',
            pos: 'bottom-right',
            status: 'success'
          })
        } else {
          UIkit.notification({
            message: 'Fout opgetreden...',
            pos: 'bottom-right',
            status: 'danger'
          }, )
        }

      })
    })
}
contactFrom();
