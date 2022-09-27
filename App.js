window.onload=()=>{
    document.querySelector('#calculate').onclick=calculateTip;
}
function calculateTip(){
    var bill=document.querySelector('#billamt').value;
    var tippercent=document.querySelector('#serviceQual').value;
    var people=document.querySelector('#prsnamt').value;
    if(bill == '' || tippercent === 'Select' || people === '') {
        alert("Please Enter Bill Amount");
        return;
    }
    if(people === '1'){
        document.querySelector('#each').style.display = 'none';
    }else{
        document.querySelector('#each').style.display = 'block';
    }

    var tipcalculate=(bill*tippercent)/people;
    tipcalculate=tipcalculate.toFixed(2);
    document.getElementById("total").innerHTML=tipcalculate;
}
