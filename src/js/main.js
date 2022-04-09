let smallImages = document.querySelectorAll('.preview');
let bigImage = document.querySelector('.bigImage img');
let forwardBtn = document.querySelector('#forward');
let backBtn = document.querySelector('#back');
let smallImagesContainer = document.querySelector('.smallImages');
console.log('images', smallImages);


for(let image of smallImages){
    image.addEventListener('click', (event) => {
        removeClassActive();
        event.target.classList.add('active');
        let path = event.target.getAttribute('src');
        let fileName = path.split('/')[3];
        bigImage.src = 'src/images/big/' + fileName;
    });
}

function removeClassActive(){
    smallImages.forEach(image => image.classList.remove('active'));
}

forwardBtn.addEventListener('click', () =>{
    for(let index in smallImages){
        if(smallImages[index].classList[1] === 'active'){
            smallImages[index].classList.remove('active');
            if(smallImages[+index + 1] === undefined){
                smallImages[0].classList.add('active');
                let src = smallImages[0].getAttribute('src');
                let fileName = src.split('/')[3];
                bigImage.src = 'src/images/big/' + fileName;
                break;
            }else{
                smallImages[+index + 1].classList.add('active');
                let src = smallImages[+index + 1].getAttribute('src');
                let fileName = src.split('/')[3];
                bigImage.src = 'src/images/big/' + fileName;
                break;
            }
        }
    }
})

backBtn.addEventListener('click', () =>{
    for(let index in smallImages){
        if(smallImages[index].classList[1] === 'active'){
            smallImages[index].classList.remove('active');
            if(smallImages[+index - 1] === undefined){
                smallImages[smallImages.length - 1].classList.add('active');
                let src = smallImages[smallImages.length - 1].getAttribute('src');
                let fileName = src.split('/')[3];
                bigImage.src = 'src/images/big/' + fileName;
                break;
            }else{
                smallImages[+index - 1].classList.add('active');
                let src = smallImages[index - 1].getAttribute('src');
                let fileName = src.split('/')[3];
                bigImage.src = 'src/images/big/' + fileName;
                break;
            }
        }
    }
})