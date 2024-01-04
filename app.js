
let slide = document.querySelectorAll('.item')
let flag = 1

function controller(e){
    flag = flag + e
    slideShow(flag)
}

function slideShow(num){
    
    if(num == slide.length){
        num = 0
        flag = 0
    }
    if(num < 0){
        num = slide.length-1
        flag = slide.length-1
    }
    for(y of slide){
        y.style.display = 'none'
    }
    slide[num].style.display = 'block'
}
slideShow(flag)