const myslides = document.querySelector('.my-slides');
const myimages = document.querySelectorAll('.my-slides img');

const prevbtn = document.querySelector('#prevBtn');
const nextbtn = document.querySelector('#nextBtn');

let counter = 1;
const size = myimages[0].clientWidth; 

myslides.style.transform = 'translate(' + (-size * counter) + 'px)';
nextbtn.addEventListener('click', function next(){
    if (counter >= myimages.length-1) return;
    myslides.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    myslides.style.transform ='translate(' + (-size * counter) + 'px)';   
});

prevbtn.addEventListener('click', function previous(){
    if (counter <= 0) return;
    myslides.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    myslides.style.transform ='translate(' + (-size * counter) + 'px)';    
});

myslides.addEventListener('transitionend', function(){
    if(myimages[counter].id === 'lastslide')
    {
        myslides.style.transition = 'none';
        counter = myimages.length - 2;
        myslides.style.transform ='translateX(' + (-size * counter) + 'px)';
    }
    if(myimages[counter].id === 'firstslide')
    {
        myslides.style.transition = 'none';
        counter = myimages.length - counter;
        myslides.style.transform ='translate(' + (-size * counter) + 'px)';
    }
});

autoSlide()
function autoSlide(){
    if (counter >= myimages.length-1) return;
    myslides.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    myslides.style.transform ='translate(' + (-size * counter) + 'px)'; 
    setTimeout(autoSlide, 2000)
}




