document.getElementById('send').addEventListener('click', function(){
      alert('Your order is sent')
})


let navigation=document.getElementById('navigation');
let burgerIcon=document.getElementById('burgerIcon');

burgerIcon.addEventListener('click', function() {
    navigation.classList.toggle('active');
});


  