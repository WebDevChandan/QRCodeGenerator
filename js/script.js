let container = document.querySelector('.container');
const qrBtn = container.querySelector('.form button'),
    qrField = container.querySelector('.form input'),
    qrImg = container.querySelector('.qrCode img');

const switchBox = document.querySelector('.box');
let icon = document.querySelector('.box i');
const toolTip = document.querySelector('.tooltip-container');


const generateQrCode = () => {
    let qrValue = qrField.value;
    
    if (!qrValue) return;
    
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    
    qrBtn.innerHTML = "<i>Generating...</i> QR Code";
    
    qrImg.addEventListener('load', () => {
        container.classList.add('active');        
        qrBtn.innerHTML = "Generate QR Code";
        
    });
}
qrBtn.addEventListener('click', () => {
    generateQrCode();
});

qrField.addEventListener('keyup', e => {
    if (!qrField.value) {
        container.classList.remove('active');
    }
    if (e.key === "Enter")
        generateQrCode();
});


// TootlTip
let Click = true;
toolTip.addEventListener('mouseover', ()=>{
           switchBox.style.left = "0";
		   toolTip.style.cursor= "pointer";
});


let getClick = true;
const switcher = () => {
    let toolTipValue = toolTip.querySelector('span'),
        body = document.querySelector('body'),
        heading = document.querySelector('h1'),
        para = document.querySelector('p'),
		getData =  localStorage.getItem('theme');
		
		if(getData===null){
			body.setAttribute('class', '');
		
		}else if(getClick) {
			icon.setAttribute('class', 'fa-solid fa-sun');
			toolTipValue.innerHTML = "Switched: Dark";
			switchBox.style.left = "-63px";
			body.classList.add(`${getData}`);
			getClick = false;
		
		}else {
			icon.setAttribute('class', 'fa-solid fa-moon');
			toolTipValue.innerHTML = "Switched: Light";
			switchBox.style.left = "-63px";
			localStorage.removeItem('theme');
			body.classList.remove('dark');
			getClick = true;
		}
} 
switcher();

switchBox.addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
	switcher(); 
});
