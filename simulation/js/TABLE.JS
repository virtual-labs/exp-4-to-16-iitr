// console.log(typeof("a1"));


function checkTable() {
    var a1 = document.getElementById("a1").value;
    var a2 = document.getElementById("a2").value;
    var a3 = document.getElementById("a3").value;
    var a4 = document.getElementById("a4").value;
    var a5 = document.getElementById("a5").value;
    var a6 = document.getElementById("a6").value;
    var a7 = document.getElementById("a7").value;
    var a8 = document.getElementById("a8").value;
    var a9 = document.getElementById("a9").value;
    var a10 = document.getElementById("a10").value;
    var a11 = document.getElementById("a11").value;
    var a12 = document.getElementById("a12").value;
    var a13 = document.getElementById("a13").value;
    var a14 = document.getElementById("a14").value;
    var a15 = document.getElementById("a15").value;
    var a16 = document.getElementById("a16").value;
    
    
    if ( ((a1 == '0') || (a1 == 'D0') || (a1 == 'd0')) &&
         ((a2 == '1') || (a2 == 'D1') || (a2 == 'd1')) && 
         ((a3 == '2') || (a3 == 'D2') || (a3 == 'd2')) &&
         ((a4 == '3') || (a4 == 'D3') || (a4 == 'd3')) &&
         ((a5 == '4') || (a5 == 'D4') || (a5 == 'd4')) &&
         ((a6 == '5') || (a6 == 'D5') || (a6 == 'd5')) &&
         ((a7 == '6') || (a7 == 'D6') || (a7 == 'd6')) &&
         ((a8 == '7') || (a8 == 'D7') || (a8 == 'd7')) &&
         ((a9 == '8') || (a9 == 'D8') || (a9 == 'd8')) &&
         ((a10 == '9') || (a10 == 'D9') || (a10 == 'd9'))&&
         ((a11 == '10') || (a11 == 'D10') || (a11 == 'd10')) &&
         ((a12 == '11') || (a12 == 'D11') || (a12 == 'd11')) &&
         ((a13 == '12') || (a13 == 'D12') || (a13 == 'd12')) &&
         ((a14 == '13') || (a14 == 'D13') || (a14 == 'd13')) &&
         ((a15 == '14') || (a15 == 'D14') || (a15 == 'd14')) &&
         ((a16 == '15') || (a16 == 'D15') || (a16 == 'd15'))) {
        alert("Correct Output");
    } else {
        alert("Incorrect Output");
    }

}


function resetTable() {
    console.log("check");
    var a1 = document.getElementById("a1").value = '';
    var a2 = document.getElementById("a2").value = '';
    var a3 = document.getElementById("a3").value = '';
    var a4 = document.getElementById("a4").value = '';
    var a5 = document.getElementById("a5").value = '';
    var a6 = document.getElementById("a6").value = '';
    var a7 = document.getElementById("a7").value = '';
    var a8 = document.getElementById("a8").value = '';
    var a9 = document.getElementById("a9").value = '';
    var a10 = document.getElementById("a10").value = '';
    var a11 = document.getElementById("a11").value = '';
    var a12 = document.getElementById("a12").value = '';
    var a13 = document.getElementById("a13").value = '';
    var a14 = document.getElementById("a14").value = '';
    var a15 = document.getElementById("a15").value = '';
    var a16 = document.getElementById("a16").value = '';
}