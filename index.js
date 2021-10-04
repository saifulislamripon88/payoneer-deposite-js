// login button click handeler/click kore porer page a jawar code
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = "block";
})



// deposit button handel

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

if(depositNumber < 0){
    alert('deposit number cannot be negetive🙏');
}else{
    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    //document.getElementById("currentDeposit").innerText = totalDeposit; aita use kore deposit e songhkha add/show kora jai
    document.getElementById("currentDeposit").innerText = totalDeposit;

    //document.getElementById("depositAmount").value = ""; aita use kore nicher input er ghorer kono songha lekhe add button e click korle oi songhka hide hoye jai
    // document.getElementById("depositAmount").value = "";

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;
}
  //document.getElementById("depositAmount").value = ""; aita use kore nicher input er ghorer kono songha lekhe add button e click korle oi songhka hide hoye jai
document.getElementById("depositAmount").value = "";

})

// withdraw button handeling

const addWithdrawBtn = document.getElementById("addWithdraw");
addWithdrawBtn.addEventListener("click", function(){

  const withdrawAmount = document.getElementById("withdrawAmount").value;
const withdrawNumber = parseFloat(withdrawAmount);

if(withdrawNumber < 0){
    alert('withdraw number cannot be negative 🙏');
}else{

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
const currentWithdrawNumber = parseFloat(currentWithdraw);
const totalWithdraw = withdrawNumber + currentWithdrawNumber;
document.getElementById("currentWithdraw").innerText = totalWithdraw;

// document.getElementById("withdrawAmount").value = "";


const currentBalance = document.getElementById("currentBalance").innerText;
const currentBalanceNumber = parseFloat(currentBalance);
const totalBalance = currentBalanceNumber - withdrawNumber;
document.getElementById("currentBalance").innerText = totalBalance;

}

document.getElementById("withdrawAmount").value = "";

 })



// the end




// another way of handeling depositbutton it is fully effective //but only withdraw er agee (-) chole ase
/**const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    //document.getElementById("depositAmount").value = ""; aita use kore nicher input er ghorer kono songha lekhe add button e click korle oi songhka hide hoye jai
    document.getElementById("depositAmount").value = "";

    updateSpanText("currentDeposit",depositNumber);

    updateSpanText("currentBalance",depositNumber)
})

function updateSpanText(id,depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

// withdraw button handeling

const addWithdrawBtn = document.getElementById("addWithdraw");
addWithdrawBtn.addEventListener("click", function(){

  const withdrawAmount = document.getElementById("withdrawAmount").value;
const withdrawNumber = parseFloat(withdrawAmount);

document.getElementById("withdrawAmount").value = "";
updateSpanTexts("currentWithdraw",withdrawNumber);
updateSpanTexts("currentBalance",withdrawNumber);
})
function updateSpanTexts(id,withdrawNumber){
    const currentBalance = document.getElementById(id).innerText;
const currentBalanceNumber = parseFloat(currentBalance);
const totalBalance = currentBalanceNumber - withdrawNumber;
document.getElementById(id).innerText = totalBalance;
}

 
*/


 