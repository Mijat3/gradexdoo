let niz=['Zadovoljni klijenti','Odradjeni projekti','U procesu'];
addEventListener("onload",galerija());
addEventListener("onload",Statistika(niz));
document.querySelector("#invert").addEventListener("click",invertuj);
function galerija(){
    let html = document.querySelector('.prikaz');
    for(let i=1;i<=6;i++)
    {
        html.innerHTML+=`
        <div><img onmouseenter="hoverGalerija(this)" onmouseleave="unhoverGalerija(this)" src="images/galerija${i}.jfif"></div>
        `;
    }
}
function Statistika(array){
    let html = document.querySelector(".prikazStatistika");

    for(let i of array)
    {
        let rnd = getRndInteger(90,100);
        html.innerHTML+=`
        <div><h1>${rnd} %</h1>
        <h2>${i}</h2>
        </div>
        `;
    }
}

function hoverGalerija(x){
 x.style.transform="scale(1.1)";
 x.style.transitionDuration = "0.4s";
}
function unhoverGalerija(x){
    x.style.transform="scale(1)";
    x.style.transitionDuration = "0.4s";
   }

   function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


   function cuvanjePodataka(){
    
    let ime = document.querySelector("#ime");
    let email = document.querySelector("#email");
    let poruka = document.getElementById("poruka");

    
    let data = "\r Ime: " + ime.value + " \r\n " + "Email: " + email.value +  " \r\n " + "Poruka: " + poruka.value;
    console.log(data); 
    
    let textToBLOB = new Blob([data], { type: "text/plain" });
    let filename = 'CuvanjePodataka';
    

    
    const sFileName = filename; 

    let newLink = document.createElement("a");
    newLink.download =filename; 

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};


function provera(){

    let ime = document.querySelector("#ime");
    let email = document.querySelector("#email");
    let poruka = document.getElementById("poruka");
    let a = email.value.split("@");    

    if(ime.value.length ==0 ||  email.value.length ==0 || poruka.value.length ==0){
        alert('Potrebno je popuniti sva polja!');
        return false;
    }
    else if (ime.value.length < 3 || email.value.length < 3  || poruka.value.length < 3){
        alert('Morate uneti najmanje 3 karaktera');
        return false;
    }
    if(a.length ==1){
        alert('Obavezan karakter: @');
        return false;
    }
    if(a[0].length < 2){
        alert('Broj karaktera pre @ mora biti veci od 1');
        return false;
    }
    else{
        cuvanjePodataka();
        return true;
    }
    
}

function invertuj(){
    let body = document.querySelector('body');
    if(body.style.backgroundColor!="black"){
    body.style.backgroundColor="black";
    body.style.color="white";
    }
    else{
        body.style.backgroundColor="white";
        body.style.color="black";
    }
}
