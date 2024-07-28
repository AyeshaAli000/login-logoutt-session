const email = document.getElementById('email')
const password = document.getElementById('password')
const submit = document.getElementById('submit-btn')
const login = document.getElementById('login')
const logout = document.getElementById('logout')

if (submit){
   submit.addEventListener('click' , ()=>{
      localStorage.setItem('email' , email.value)
      localStorage.setItem('password' , password.value)
   })
}
// console.log(localStorage.getItem('email'))
// console.log(localStorage.getItem('password'))
if(localStorage.getItem('email') && localStorage.getItem('password')){
   if (login && logout){
      login.style.display = 'none';
      logout.style.display = 'block';
   }
} else{
   if(login && logout){
      login.style.display = 'block';
      logout.style.display = 'none';
   }
}
function logout_fun(){
   localStorage.removeItem('email')
   localStorage.removeItem('password')
   // window.location.href
}

// console.log(localStorage.getItem('email'))
// if(localStorage.getItem('email') || localStorage.getItem('password')){
//     login.style.display = 'none'
//     logout.style.display = 'block'
// }else{
//      login.style.display = 'block'
//     logout.style.display = 'none'
// }
// Add an event listener for the submit button click
// submit.addEventListener('click', (event) => {
//    event.preventDefault(); // Prevent the default form submission
//    localStorage.setItem('email', email.value);
//    localStorage.setItem('password', password.value);
//    updateButtonState();
//    window.location.href = 'index.html'; // Redirect to index.html after form submission
// });

// // Function to update the button state
// function updateButtonState() {
//    if (localStorage.getItem('email') && localStorage.getItem('password')) {
//        if (login) login.style.display = 'none';
//        if (logout) logout.style.display = 'block';
//    } else {
//        if (login) login.style.display = 'block';
//        if (logout) logout.style.display = 'none';
//    }
// }

// // Check the button state on page load
// document.addEventListener('DOMContentLoaded', () => {
//    updateButtonState();
// });

// // Add an event listener for the logout button
// if (logout) {
//    logout.addEventListener('click', () => {
//        localStorage.removeItem('email');
//        localStorage.removeItem('password');
//        updateButtonState();
//    });
// }