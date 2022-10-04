const btns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit-btn');
const thankCard = document.getElementById('card-back');
const card = document.getElementById('card');
const showRate = document.querySelector('.rate')

let rating = 0;

btns.forEach(function(btn, i){
 btn.addEventListener('click', function(){
  rating = i + 1;
  btn.classList.toggle('active');
  btns.forEach(function(el, key){
   i !== key && el.classList.remove('active')
   })
  })
  console.log(rating, btns.length)
 })

submitBtn.addEventListener('click', function(){
  if(rating > 0){
     if (rating === 1)
         showRate.textContent = `You have selected ${rating} out of ${btns.length}`;
     else if (rating === 2)
         showRate.textContent = `You have selected ${rating} out of ${btns.length}`;
     else if (rating === 3)
         showRate.textContent = `You have selected ${rating} out of ${btns.length}`;
     else if (rating === 4)
         showRate.textContent = `You have selected ${rating} out of ${btns.length}`;
     if (rating === 5)
         showRate.textContent = `You have selected ${rating} out of ${btns.length}`;
     thankCard.classList.remove("hidden");
  }
 
})



