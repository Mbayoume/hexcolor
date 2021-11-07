const theButton = document.querySelector('.btn');
const theHexArray = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
const theBody = document.querySelector('body');
let theHex = document.querySelector('.theHex');

theButton.addEventListener('click', getHex);

function getHex(){
    let hexcolor = '#';// this var should created outside the loop to allow the loop to scoop outside it  
    for(let i = 0; i<6; i++){
       
       let random = Math.floor(Math.random()*theHexArray.length);
        hexcolor +=theHexArray[random] ;
      

    }

    theBody.style.background = hexcolor;
    theHex.innerHTML = hexcolor;
  
    
}
 
