const submitBtn = document.getElementById('submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailAddress = "mdshawonkhan@gmail.com";
const rightPassword = "Shawon";

submitBtn.addEventListener('click',()=>{
	if (email.value !== emailAddress && password.value !== rightPassword || email == '' || password == '') {
		alert('Your email or password maight be wrong');
		removeValue("email","password");
	}else{
		document.getElementById('first_container').style.display = 'none';
		document.getElementById('second_container').style.display = 'flex';
		removeValue("email","password");
	}
		
});
function removeValue(email,password){
	document.getElementById(email).value = '';
	document.getElementById(password).value = '';
}

//deposit 
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click',()=>{
	let depoEntry = document.getElementById('entry_deposit');
	if (depoEntry.value !== "") {
		let depoEntryNumber = parseInt(depoEntry.value);
		if (isNaN(depoEntryNumber)) {
			alert('You must entry a deposit number of amount');
			document.getElementById('entry_deposit').value = '';
		}else{

			outputNumber('#deposit_amount span',depoEntryNumber,"depoEntry");
			depoEntry.value = '';

			let balance = document.querySelector('#balance_amount span').innerText;
			let balanceNumber = parseFloat(balance);

			let currentBalance = balanceNumber + depoEntryNumber;
			document.querySelector('#balance_amount span').innerText = currentBalance;
		}
	}else{
		showError("depo_error");
	}
});



//withdraw
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click',()=>{
	let withEntry = document.getElementById('entry_withdraw');
	if (withEntry.value !== "") {
		let withEntryNumber = parseInt(withEntry.value);
		if (isNaN(withEntryNumber)) {
			alert('You must entry a withdrowal number of amount');
			document.getElementById('entry_withdraw').value = '';
		}else{

			let balance = document.querySelector('#balance_amount span').innerText;
			let balanceNumber = parseFloat(balance);

			if (balanceNumber <= 0 || withEntryNumber > balanceNumber) {
				alert("Your balance is too low");
				document.getElementById('entry_withdraw').value = '';
			}else{
				outputNumber('#withdraw_amount span',withEntryNumber);
				withEntry.value = '';
				let currentBalance = balanceNumber - withEntryNumber;
				document.querySelector('#balance_amount span').innerText = currentBalance;
			}
		}
	}else{
		showError("with_error");
	}
});
function outputNumber(htmlInnerTextId,inputValue){
	let htmlAmount = document.querySelector(htmlInnerTextId).innerText;
	let floatNumber = parseFloat(htmlAmount);
	currentValue = floatNumber + inputValue;
	document.querySelector(htmlInnerTextId).innerText = currentValue;
}
function showError(idName){
		document.getElementById(idName).style.display = "block";
		setTimeout(()=>{
			document.getElementById(idName).style.display = "none";
		},1000);
}
