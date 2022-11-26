const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");


function updateClock () {
   //first we want to get the hour from the computer using date constructor
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let ampm = "AM"
   
   // VERIFICAR SI A LAS 12 DEL MEDIO DIA PASA A PM PORQUE LAS 12 DE LA NOCHE ES AM;
   if (h > 12) {
    h = h - 12;
    ampm = "PM";
   } else {
    ampm = "AM"
   }

   h = h<10 ? "0" + h : h; // esta condicion es para que me ponga un 0 en los numeros de un digito.
   m = m<10 ? "0" + m : m;
   s = s<10 ? "0" + s : s;
   
   hourElement.innerText = h;
   minuteElement.innerText = m;
   secondElement.innerText = s;
   ampmElement.innerText = ampm;

   // Este setTimeout method es para que 
   setTimeout(() => {
    updateClock();
   }, 1000);

}

updateClock();