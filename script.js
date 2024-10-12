const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.getElementsByTagName('body')[0].appendChild(resultDiv);


function checkPal(){
  const txt = textInput.value;
  if (!txt){
    alert('Please input a value');
    return;
  }
  if (isPal(txt.replace( /[^a-zA-Z0-9]/g , "").toLowerCase())){
    resultDiv.innerText = `
      ${txt} is a palindrome
    `;
  }
  else{
    resultDiv.innerText = `
      ${txt} is not a palindrome
    `;
  }
}

function isPal(s){
  console.log('processed string = '+s);
  for (let i=0; i<s.length/2; i++){
    if (s[i] != s[s.length-i-1]) return false;
  }
  return true;
}



 checkButton.onclick = ("click", checkPal);