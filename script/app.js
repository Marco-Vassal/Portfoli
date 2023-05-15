const items = document.querySelectorAll('.slider img');
const styleSlider = document.querySelector('.slider').style;
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    styleSlider.backgroundImage = "url('" + items[count].getAttribute('src') + "')";
    styleSlider.backgroundSize = "cover"
    items[count].classList.remove('active');
    if(count < nbSlide - 1){
        count++;
    }else{
        count = 0;
    }
    items[count].classList.add('active');
}
suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
    styleSlider.backgroundImage = "url('" + items[count].getAttribute('src') + "')";
    styleSlider.backgroundSize = "cover"
    items[count].classList.remove('active');
    if(count > 0){
        count--;
    }else{
        count = nbSlide-1;
    }
    items[count].classList.add('active');
}
precedent.addEventListener('click', slidePrecedente);
