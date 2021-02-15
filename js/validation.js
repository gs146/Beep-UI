console.log("Conencted..hey gs.")


var min, max;
function get_min(input){
    console.log(input.value)
    min = input.value
    if(min<0)
    alert("Enter positive value for min!")
  }


function get_max(input){
    console.log(input.value);
    max = input.value;

    if(max<0){    alert("Enter positive value for max!")}

    if(max <= min)
    alert("Please enter max value greater than  min value!")
}

