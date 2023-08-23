function display(val){

    document.getElementById('result').value += val

    return val

};

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

};
function clearScreen(){

    document.getElementById('result').value = ''

}
 function del() {
      var input = document.getElementById("result");
      input.value = input.value.substring(0, input.value.length - 1);
    }