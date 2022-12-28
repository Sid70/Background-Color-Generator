let col1 = document.getElementById('color1');
let col2 = document.getElementById('color2');
let container = document.getElementById('container');
document.getElementById('result').innerHTML = "background: " + "linear-gradient( " + col1.value + " , " + col2.value + " )";

const changeBackgroundColor = () => {
    container.style.background = "linear-gradient(" + col1.value + "," + col2.value + ")";
    document.getElementById('result').innerHTML = "background: " + "linear-gradient( " + col1.value + " , " + col2.value + " )";
}

col1.addEventListener("input" , changeBackgroundColor );

col2.addEventListener( "input" , changeBackgroundColor );