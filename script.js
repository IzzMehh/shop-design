const itemNames = document.querySelectorAll('.card-title')
const inputbox = document.querySelectorAll('.input-box');
const button = document.querySelectorAll('.search-btn');
const buyBtn = document.querySelectorAll('.buy-btn');


inputbox.forEach(boxes => {
boxes.addEventListener('input',(event)=>{
    let value = (event.target.value).toLowerCase();
    console.log(value)
    itemNames.forEach(element => {
        const target = element.innerText.toLowerCase();
        if(target.includes(`${value}`)){
            const parentDiv = element.parentNode;
            const upperparentDiv = parentDiv.parentNode;
            const mainDiv = upperparentDiv.parentNode;
            mainDiv.style.display = '';
        }
        else{
            const parentDiv = element.parentNode;
            const upperparentDiv = parentDiv.parentNode;
            const mainDiv = upperparentDiv.parentNode;
            mainDiv.style.display = 'none';
        }
    });
})
});


button.forEach(element => {
element.addEventListener('click', (event)=>{
      event.preventDefault();
})
});

buyBtn.forEach(element => {
element.addEventListener('click',(event) =>{
    event.preventDefault();
    window.open('https://www.instagram.com/everything.here20/');
})
});