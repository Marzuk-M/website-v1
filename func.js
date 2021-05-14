const code = document.getElementById('code')
    pho = document.getElementById('photo')
    vol = document.getElementById('volunteer')
    codeDoc = document.getElementById('cxd')
    phtoDoc = document.getElementById('pxd')
    volnDoc = document.getElementById('vxd');

const penPic = document.getElementById('pen')
      rubPic = document.getElementById('rub')
      rokPic = document.getElementById('rok')
      icePic = document.getElementById('ice')
      meePic = document.getElementById('mee')
      penTxt = document.getElementById('pene')
      rubTxt = document.getElementById('rube')
      rokTxt = document.getElementById('roke')
      iceTxt = document.getElementById('icee')
      meeTxt = document.getElementById('meee');

addOld();
opener();

code.addEventListener('click', () => {
    treader(true, false);    
});

pho.addEventListener('click', () => {
    treader(false, true);    
});

vol.addEventListener('click', () => {
    treader(false, false);    
});

penPic.addEventListener('click', () => {
    opener();
    penTxt.classList.remove('oldoldold');
    penPic.scrollIntoView({behavior: 'smooth'});
});

rubPic.addEventListener('click', () => {
    opener();
    rubTxt.classList.remove('oldoldold');
    rubPic.scrollIntoView({behavior: 'smooth'});
});

rokPic.addEventListener('click', () => {
    opener();
    rokTxt.classList.remove('oldoldold');
    rokPic.scrollIntoView({behavior: 'smooth'});
});

icePic.addEventListener('click', () => {
    opener();
    iceTxt.classList.remove('oldoldold');
    icePic.scrollIntoView({behavior: 'smooth'});
});

meePic.addEventListener('click', () => {
    opener();
    meeTxt.classList.remove('oldoldold');
    meePic.scrollIntoView({behavior: 'smooth'});
});

function treader(kite, wite) {
    addOld();
    if (kite == true) {
        codeDoc.classList.remove('oldoldold');
        code.setAttribute('style', 'color: blanchedalmond; background-color: rgb(59, 54, 47)');
    } else if (wite == true) {
        phtoDoc.classList.remove('oldoldold');
        pho.setAttribute('style', 'color: blanchedalmond; background-color: rgb(59, 54, 47)');
    } else {
        volnDoc.classList.remove('oldoldold');
        vol.setAttribute('style', 'color: blanchedalmond; background-color: rgb(59, 54, 47)');
    }
}

function addOld() {
    codeDoc.classList.add('oldoldold');
    phtoDoc.classList.add('oldoldold');
    volnDoc.classList.add('oldoldold');
    code.setAttribute('style', 'background-color: blanchedalmond; color: black');
    pho.setAttribute('style', 'background-color: blanchedalmond; color: black');
    vol.setAttribute('style', 'background-color: blanchedalmond; color: black');

}

function opener() {
    penTxt.classList.add('oldoldold');
    rubTxt.classList.add('oldoldold');
    rokTxt.classList.add('oldoldold');
    iceTxt.classList.add('oldoldold');
    meeTxt.classList.add('oldoldold');
}