// console.log('Hello, world!');

const buttons = document.querySelectorAll('.button');
const body  = document.querySelectorAll('body');

buttons.forEach(function (button) {
    console.log('button');
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            document.body.style.backgroundColor = 'red';
        }
        if(e.target.id === 'blue'){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink'){
            document.body.style.backgroundColor = e.target.id;
        }
        
    })
    
})
