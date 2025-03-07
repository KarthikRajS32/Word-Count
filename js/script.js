function enter() {
    let input = document.getElementById("input").value;

  let arr = input.replaceAll(" ","");
  
  if (input.length == 0)
     {
    alert("Please enter a word!");
    result.innerHTML = "";
  } else {
    result.innerHTML = `${arr.length} letter in the word`;
  }

}

let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
})

input.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        enter();
    }
})