let iput = document.querySelector('.iput');
let button = document.querySelector('button');
let odin = document.querySelector('.kalik');
let dva = document.querySelector('.ee');
let tri = document.querySelector('.rr');


button.onclick = function () {
    let e = iput.value;
    console.log("Площадь грани куба: ", Math.pow(e, 2));
    odin.innerHTML =  Math.pow(e, 2);
    console.log("Площадь полной поверхности грани куба: ", 6 * Math.pow(e, 2));
    dva.innerHTML =  6 * Math.pow(e, 2);
    console.log("Объём грани куба: ", Math.pow(e, 3));
    tri.innerHTML =  Math.pow(e, 3);
}
/*
button.oneclick = function hjv () {
    button.reset();
    odin.innerHTML = "ad";
    dva.innerHTML = "ds";
    tri.innerHTML = "rd";
}
*/
document.getElementById("lui").onclick = function(e) {
    document.getElementById("textInput").value = "";
    /*
    document.getElementById(odin).value = ""; 
    document.getElementById(dva).value = ""; 
    document.getElementById(tri).value = "";  
    
    */
   odin.innerHTML = " ";
   dva.innerHTML = " ";
   tri.innerHTML = " ";
}
