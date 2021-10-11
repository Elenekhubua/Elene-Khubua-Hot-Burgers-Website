document.getElementById('send').addEventListener('click', function(){
      alert('Your order is sent')
})


let Navigation=document.getElementById('Navigation');
let burgerIcon=document.getElementById('burgerIcon');

burgerIcon.addEventListener('click', function() {
    Navigation.classList.toggle('active');
});


  