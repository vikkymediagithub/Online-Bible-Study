// Email Validation
  function sendEmail(){
    Email.send ({
      SecureToken : "57661c16-ac96-4d4e-bcf4-eef8d11d717b",
      To : "samueloke193@gmail.com",
      From : document.getElementById('email').value,
      Subject : "Check my contact us page",
      Body : "Name: " + document.getElementById("name").value  + "<br> Email: " + document.getElementById("email").value + "<br> Phone no: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message").value,
  
    }).then (
      message => alert("Message sent Successfully")
    );
  } 





















// function message(){
  
//   var Name = document.getElementById ('name'); 
//   var Email = document.getElementById ('email'); 
//   var msg = document.getElementById ('msg'); 
//   const success = document.getElementById('success');
//   const danger = document.getElementById('danger');

//   if(Name.value === '' || Email.value === '' || msg.value === ''){
//     danger.style.display = 'block';
//   }
//   else{
//     setTimeout(() =>{
//         Name.value = '';
//         Email.value = '';
//         msg.value = '';
//     }, 2000);

//      success.style.display = 'block';
//     }

//     setTimeout(() =>{
//         danger.style.display = 'none';
//         success.style.display = 'none';
//     }, 4000); 

// }