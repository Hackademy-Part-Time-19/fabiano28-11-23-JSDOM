let buttonColoreTesto = document.getElementById('1');
let buttonTestoBold = document.getElementById('2');
let buttonParagrafiVisibility = document.getElementById('3');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

buttonColoreTesto.addEventListener('click', (e) => {
    p1.style.color = "rgb(" + randomRGB(0,255) + ")";
});
    

buttonTestoBold.addEventListener('click', (e) => {
    if(p2.style.fontWeight != 'bold'){
    p2.style.fontWeight = 'bold';
    }else if(p2.style.fontWeight == 'bold'){
        p2.style.fontWeight = 'normal';
    }
});

buttonParagrafiVisibility.addEventListener('click', (e) => {
   if(p3.style.display == 'none'){
    p3.style.display = 'block';
   }else{
    p3.style.display = 'none';
   }

});



function randomRGB(min, max){
    let r= Math.floor(Math.random() * (max - min + 1)) + min;
    let g= Math.floor(Math.random() * (max - min + 1)) + min;
    let b= Math.floor(Math.random() * (max - min + 1)) + min;
    return [r,g,b];
}






const paragrafoArea = document.getElementById('inputParagrafo');
let buttonCreaP= document.getElementById('creaPara');
const textArea = document.getElementById('inputTitolo');

buttonCreaP.addEventListener('click', (e) => {
    if(paragrafoArea.value == '' || textArea.value == ''){
        alert('Devi inserire un titolo e un paragrafo');
    }else{
  let div = document.createElement('div');
  div.style.width = '100%';
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.alignItems = 'center';
  div.style.textAlignItems = 'center';
  div.style.justifyContent = 'center';
  let newP = document.createElement('p');
  let newTitle = document.createElement('h1');
  newTitle.textContent = textArea.value;
  newP.textContent = paragrafoArea.value;
  div.appendChild(newTitle);
  div.appendChild(newP);
  let Data = document.createElement('p');
  let currentDate = new Date();
  Data.textContent = currentDate.toLocaleDateString();
  Data.style.fontSize = '10px';
  Data.style.fontWeight = 'bold';

  div.appendChild(Data);
  let divParagrafo = document.getElementsByClassName('paragrafo')[0];
  divParagrafo.appendChild(div);
  clearFields();
    }
});

function clearFields(){
    paragrafoArea.value = '';
    textArea.value = '';
}