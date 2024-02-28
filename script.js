const buttons = document.querySelectorAll('.btn');
const body = document.querySelector("body");

buttons.forEach(function(era) {
    console.log (era);
    era.addEventListener('click', function(e) {
        console.log(e);
        console.log (e.target);
        
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        
    });
});

