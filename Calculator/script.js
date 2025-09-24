function appendToResult(value) {
    document.getElementById("result").value += value;
}
function resultval(){
    return document.getElementById("result").value;
}
function clearResult() {
    document.getElementById("result").value = "";
}
function calculateResult() {
    try { 
        const result = eval(resultval());
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
function backspace(){
    let currentval=resultval();
    return document.getElementById("result").value =currentval.slice(0,-1);

}
