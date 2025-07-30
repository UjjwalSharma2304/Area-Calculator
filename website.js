
let s1;
let s2;
let area;




document.getElementById("submit").onclick=function(){
    s1 = document.getElementById("s1").value
    s2 = document.getElementById("s2").value
    s1=Number(s1);
    s2=Number(s2);

    area=s1*s2;
    document.getElementById("area").textContent=(area);
}

