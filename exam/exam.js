//tapsyrma1
let san1 = Number(prompt("Бірінші санды енгызыныз "));
let san2 = Number(prompt("Екінші санды енгызыныз:"));

function calc() {
    function number() {
        while (true) {
            let engizy = prompt(number);
            if (!isNaN(number)) {
                return number;
            } else {
                alert("San engiz");
            }
        }
    }
}
    let kosy = san1 + san2;
    let azaity = san1 - san2;
    let kobeity = san1 * san2;
    let  boly = san1 / san2;
  
    alert (`Сіздің нәтежиелерыныз: ${san1} + ${san2} = ${kosy}  ${san1} - ${san2} = ${azaity}   ${san1} * ${san2} = ${kobeity}  ${san1} / ${san2} = ${boly}`);
    calc();
  
  
//tapsyrma2
let baga = Number(prompt("заттын багасы:"));
let things = Number(prompt("Канша зат:"));
function calcu2() {
    function calcul3() {
    while (true) {
    let number = prompt(calcul3);

    if (!isNaN(number) && number >= 0)  {
    return number;
    } else {
    alert("San engiz");
    }
    }
    }
let totalprice = baga * things;
let zhenildik = 0;
if (totalprice > 5000) {
zhenildik = 10;
} else if (totalprice > 10000) {
zhenildik = 20; 
} else if (totalprice > 20000) {
zhenildik = 30;
}

let zhenildikFormula = (totalprice * zhenildik) / 100;
let zhenildikShygary = totalprice - zhenildikFormula;


alert(`Tolem: ${zhenildikShygary}`);
}
    
calcu2();


//tapsyrma 3

function game() {
  const san = 45;
  let ZhasyrynSan = +prompt("1 мен 100 дің арасындағы купия санды табыныз");

  while (true) {
    if (ZhasyrynSan == san) {
      alert("Жарайсын сен купия санды таптын!");
    }
    if (ZhasyrynSan < 0 && 100 > ZhasyrynSan) {
      alert ("Диапазон арасында жаз 100 - 0")
      ZhasyrynSan = +prompt("enter num");
    }
    if (ZhasyrynSan > 0 && ZhasyrynSan < 40) {
      alert("Жай жогары");
      ZhasyrynSan = +prompt("enter num");
    } else if (ZhasyrynSan > 50 && ZhasyrynSan < 100) {
      alert("Жай томен ");
      ZhasyrynSan = +prompt("enter num");
    } else if (ZhasyrynSan > 40 && ZhasyrynSan < 45 ) {
      alert("Сәл жогары ");
      ZhasyrynSan = +prompt("enter num");
    } else if (ZhasyrynSan > 45 && ZhasyrynSan < 50) {
      alert("Сәл томен");
      ZhasyrynSan = +prompt("enter num");
    } 
  }
}
console.log(game());

//Bonus task
let a = 20;
let b = 20;

a = a + b;
b = a - b;
a = a - b;


alert(a); 
alert(b);