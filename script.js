let input = document.querySelector("input");

function display(num){
  input.value = input.value += num;
}

function calculate(){
    try{
      input.value = math.evaluate(input.value);
    }
    catch(error){
      alert("Invalid");
    }
}

function clean(){
   input.value = "";
}

function del(){
   input.value = input.value.slice(0, -1);
}
