const handleImage = () => {

  let img = document.getElementById('change-image');
  let imgIcon = document.getElementById('imgClickAndChange');

  if(img.src.match('./assets/sofa.png')) {
    img.src = './assets/sofa.gif';
    document.getElementById('change-image').className = 'change';
  } else {
    img.src = './assets/sofa.png';
  }

  if(imgIcon.src.match('./assets/360.svg')) {
    imgIcon.src = './assets/x.svg';

  } else {
    imgIcon.src = './assets/360.svg';
  }
}


const handleCart = () => {
  alert("Em construção !");
}
