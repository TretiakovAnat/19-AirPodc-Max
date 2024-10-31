const chooseColor = document.querySelectorAll('.choose__btn');
const contentItem = document.querySelectorAll('.hero__img');


chooseColor.forEach(function(element){
    element.addEventListener('click', open)
});

function open(evt){

 const target = evt.currentTarget
 const button = target.dataset.button;
 const contentActive = document.querySelectorAll(`.${button}`)

chooseColor.forEach(function(item){
    item.classList.remove('choose__btn--active')
})

target.classList.add('choose__btn--active')

contentItem.forEach(function(item){
   item.classList.remove('hero__img--active')
})

contentActive.forEach(function(item){
   item.classList.add('hero__img--active')
})


}