var variable = "top-level";

function parentFunction() {
    
  var variable = "local";
  
  function childFunction() {
      
    //console.log(variable);
    
  }
  
  childFunction();
}

parentFunction();