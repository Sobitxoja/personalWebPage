var button = document.querySelector('.show');

var lastwish = document.querySelector('.witcher');

var images = document.querySelectorAll('.witcher')

var a = 0;

var dis = ['block', 'none']

button.addEventListener('click', function(){
  document.querySelector('.witcher').style.marginTop = '20px'
  images.forEach( function(image){
    image.style.display = dis[a]
  })
  a = (a + 1) % dis.length
  
})

