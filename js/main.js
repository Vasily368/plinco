let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');

burger.onclick = function(){
    console.log('hello')
    menu.classList.toggle('menu__active')
    if(menu.classList.contains('menu__active')){
        burger.classList.add('burger__active')
    }else{
        burger.classList.remove('burger__active')
    }
}

