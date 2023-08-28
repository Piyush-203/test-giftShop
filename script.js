const bar = document.getElementById('bar');
const close = document.getElementById('close');   // defining a variable 
const nav = document.getElementById('navbar');

if(bar){ 
    // if clicked on bar 
    // function which take the event to listen for 
    bar.addEventListener('click', () => {
        // a read-only property that is used to return CSS classes in the form of an array.
        nav.classList.add('active');
    })
}

if(close){ 
    // This will work on close button of menu.
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// image slide to click on particular img to show. in single product page.
// define variable.
let MainImg = document.getElementById("MainImg");
// calling element through class. 
let smallimg = document.getElementsByClassName("small-img");

// The onclick event occurs when the user clicks on an HTML element.
// if we click on samll img then then main img src will change
// to that img src.
//  for 1st img.
smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
// 2nd img.
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}

// 3rd img
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
// 4th img
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}


