let input = document.getElementById("inputColor");
let button = document.getElementById("button");

let color = "teal";

button.addEventListener("click", function(){
    color = input.value;
    // console.log(color);
    if (input.value === ""){
        // color = "grey";
        alert("Please, input a color");
    }
    document.body.style.backgroundColor = color;
});
