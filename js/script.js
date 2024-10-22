const sendFormBtn = document.getElementById('send-form');
if (sendFormBtn) {
   sendFormBtn.addEventListener('click', userForm);
}

const cancelFormBtn = document.getElementById('cancel-form');
if (cancelFormBtn) {
   cancelFormBtn.addEventListener('click', cancelForm);
}

const calcBtn = document.getElementById('calc');
if (calcBtn) {
   calcBtn.addEventListener('click', myExcelFuns);
}

function userForm() {
   var firstName = document.getElementById('Fname').value;
   var lastName = document.getElementById('Lname').value;
   var email = document.getElementById('Email').value;
   var address = document.getElementById('Address').value;
   var city = document.getElementById('City').value;
   var province = document.getElementById('Prov').value;
   var membership = document.querySelector('input[name="choice"]:checked').value;

   if (!firstName || !lastName || !email || !address || !city || !province || !membership) {
      alert('please fill in all fields.');
      return;
   }
   const output = document.getElementById('output');
   output.innerHTML = `<p><strong>Full name: </strong> ${firstName} ${lastName}</p> <p><strong>Email: </strong> ${email}</p> <p><strong>Address:</strong> ${address}, ${city}, ${province}</p> <p><strong>Membership: </strong>${membership}`;
}

function cancelForm() {
   var firstName = (document.getElementById('Fname').value = '');
   var lastName = (document.getElementById('Lname').value = '');
   var email = (document.getElementById('Email').value = '');
   var address = (document.getElementById('Address').value = '');
   var city = (document.getElementById('City').value = '');
   var province = (document.getElementById('Prov').value = '');
   var membership = (document.querySelector('input[name="choice"]:checked').value = '');
   const output = document.getElementById('output');
   output.innerHTML = '';
}

function myExcelFuns() {
   var numberStr = document.getElementById('numbers').value.trim();
   var result;
   if (!numberStr) {
      alert('Please enter valid numbers');
   } else {
      var numberArray = numberStr
         .split(/\s+/)
         .filter((value) => !isNaN(value))
         .map(Number);
   }
   if (document.getElementById('sum').checked) {
      result = numberArray.reduce((a, b) => a + b, 0);
   } else if (document.getElementById('avg').checked) {
      let sum = numberArray.reduce((a, b) => a + b, 0);
      result = sum / numberArray.length;
   } else if (document.getElementById('max').checked) {
      result = Math.max.apply(null, numberArray);
   } else {
      result = Math.min.apply(null, numberArray);
   }

   typeCalc = document.querySelector('input[name="EXchoice"]:checked').value;
   document.getElementById('outputCalc').innerHTML = `<p>Result of ${typeCalc}: ${result}</p>`;
}
