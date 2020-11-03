const list = document.querySelector('.gallery-carousel__img-container__list');
const imgs = Array.from(list.children);

const leftBtn = document.querySelector('.gallery-carousel__btn--left');
const rightBtn = document.querySelector('.gallery-carousel__btn--right');

const nav = document.querySelector('.gallery-carousel__nav');
const dots = Array.from(nav.children);



const imageWidth = imgs[0].getBoundingClientRect().width;


const setImgPosition = (img, index) => {
  img.style.left = (imageWidth * index) + 'px';
}



imgs.forEach((img, index) => {
  setImgPosition(img,index);
});


const moveToImg = (list,currentImg, targetImg) => {
 
  list.style.transform = 'translateX(-' + targetImg.style.left + ')';
  currentImg.classList.remove('current--img');
  targetImg.classList.add('current--img');
  showOrHideArrow();
};


const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current--img');
  targetDot.classList.add('current--img');
}


const showOrHideArrow = () => {
  const currentImg = list.querySelector('.current--img');

  const currentIndex = imgs.findIndex(img  => img === currentImg);

  if(currentIndex == 0) {
    leftBtn.style.visibility = 'hidden';
  } else {
    leftBtn.style.visibility = 'visible';
  }



  if(currentIndex == imgs.length - 1) {
    rightBtn.style.visibility = 'hidden';
  } else {
    rightBtn.style.visibility = 'visible';
  }

}

rightBtn.addEventListener('click', (e) => {


  const currentImg = list.querySelector('.current--img');

  const nextImg = currentImg.nextElementSibling;

  const currentDot = nav.querySelector('.current--img');

  moveToImg(list,currentImg, nextImg);
  updateDots(currentDot, currentDot.nextElementSibling);
});



leftBtn.addEventListener('click', (e) => {


  const currentImg = list.querySelector('.current--img');
  const nextImg = currentImg.previousElementSibling;
  const currentDot = nav.querySelector('.current--img');
  moveToImg(list,currentImg, nextImg);

  updateDots(currentDot, currentDot.previousElementSibling);

});


nav.addEventListener('click', (e) => {
  

  const targetDot = e.target.closest('button');

  if(!targetDot)  return;


  const dotIndex = dots.findIndex(dot => dot === targetDot);
  const currentImg = list.querySelector('.current--img');
  const targetImg = imgs[dotIndex];
  const currentDot = nav.querySelector('.current--img');
  moveToImg(list, currentImg,targetImg);

  updateDots(currentDot, targetDot);
});




showOrHideArrow();