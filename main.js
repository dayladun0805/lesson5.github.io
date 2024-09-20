
function tinhNhan() {
    var a = document.getElementById("soA").value;
    var b = document.getElementById("soB").value;
    document.getElementById("ketQuaNhan").innerHTML = a*b;
}
function tinhChia() {
    var a = document.getElementById("so-A").value;
    var b = document.getElementById("so-B").value;
    document.getElementById("ketQuaChia").innerHTML = a/b;
}

function tinhTru() {
    var a = document.getElementById("so_A").value;
    var b = document.getElementById("so_B").value;
    document.getElementById("ketQuaTru").innerHTML = a-b;
}
function tinhCong() {
    var a = parseFloat(document.getElementById("numberA").value);
    var b = parseFloat(document.getElementById("numberB").value);
    document.getElementById("ketQuaCong").innerHTML = a + b;
}