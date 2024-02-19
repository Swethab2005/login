function validate_form() {
  var emailid = document.getElementById("emailid").value;
  var password = document.getElementById("password").value;
  var error_emailid = document.getElementById("error_emailid");
  var error_password = document.getElementById("error_password");
  var text;
  error_emailid.innerHTML = "";
  error_password.innerHTML = "";
  if (emailid.indexOf("@") == -1 || emailid.length < 6) {
    text = " * please enter valid Email Id";
    error_emailid.innerHTML = text;
    return false;
  }
  if (password.length < 8) {
    text = " * Password must be at least 8 characters long.";
    error_password.innerHTML = text;
    return false;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(password)) {
    text =
      " * Password must contain at least one uppercase letter, one lowercase letter, and one digit.";
    error_password.innerHTML = text;
    return false;
  }
  //alert("form submitted successfully.you can login now");
  return true;
}
var text1;

function validation() {
  //     var name = document.getElementById("name").value;
  //     var lname = document.getElementById("lname").value;
  //     var emailid = document.getElementById("emailid").value;
  //     var password = document.getElementById("password").value;
  //     var password1 = document.getElementById("password1").value;
  //     var phno = document.getElementById("phno").value;
  //     var s_add1 = document.getElementById("s_add1").value;
  //     var city = document.getElementById("city").value;
  //     var district = document.getElementById("district").value;
  //     var number = document.getElementById("number").value;
  //     var abtu = document.getElementById("abtu").value;
  //     var error_fname = document.getElementById("error_fname");
  //     var error_lname = document.getElementById("error_lname");
  //     var error_emailid = document.getElementById("error_emailid");
  //     var error_password = document.getElementById("error_password");
  //     var error_password1 = document.getElementById("error_password1");
  //     var error_phno = document.getElementById("error_phno");
  //     var error_s_add1 = document.getElementById("error_s_add1");
  //     var error_s_add2 = document.getElementById("error_s_add2");
  //     var error_city = document.getElementById("error_city");
  //     var error_district = document.getElementById("error_district");
  //     var error_number = document.getElementById("error_number");
  //     var error_abtu = document.getElementById("error_abtu");

  //     error_fname.innerHTML = "";
  //     error_lname.innerHTML = "";
  //     error_emailid.innerHTML = "";
  //     error_password.innerHTML = "";
  //     error_password1.innerHTML = "";
  //     error_phno.innerHTML = "";
  //     error_s_add1.innerHTML = "";
  //     error_s_add2.innerHTML = "";
  //     error_city.innerHTML = "";
  //     error_district.innerHTML = "";
  //     error_number.innerHTML = "";
  //     error_abtu.innerHTML = "";

  //     let success = true;
  //     const pinCodeRegex = /^\d{6}$/;
  //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  //     var nameRegex = /^[A-Za-z\s]+$/;
  //     if (name === '') {
  //       success = false;
  //       setError(name, " * name is required")
  //     }
  //     else if (!nameRegex.test(name)) {
  //       success = false;
  //       setError(name," * please enter a valid name (only letters and spaces allowed)")
  //     }
  //      else {
  //       setSuccess(name)
  //     }
  //     if (lname === "") {
  //       success = false;
  //       setError(lname, " * name is required")
  //     }
  //     else if (!nameRegex.test(lname)) {
  //       success = false;
  //       setError( lname, " * please enter a valid name (only letters and spaces allowed)")
  //     }
  //     else {
  //       setSuccess(lname)
  //     }
  //     if (emailid === '') {
  //       success = false;
  //       setError(emailid, " * Email is required")
  //     }
  //      else if (!validateEmail(emailid)) {
  //       success = false;
  //       setError(emailid, "* please enter valid Email Id")
  //     }
  //      else {
  //       setSuccess(emailid)
  //     }
  //     if (password === "") {
  //       success = false;
  //       setError(password, " * Password is required")
  //     }
  //     else if (password.length < 8) {
  //       success = false;
  //       setError(password, " * Password must be at least 8 characters long.")
  //     }
  //     // Check if the password contains at least one uppercase letter, one lowercase letter, and one digit

  //     else if (!passwordRegex.test(password)) {
  //       success = false;
  //       setError(
  //         password,
  //         " * Password must contain at least one uppercase letter, one lowercase letter, and one digit"
  //       )
  //     }
  //      else {
  //       setSuccess(password)
  //     }
  //     if (password1 === "") {
  //       success = false;
  //       setError(password1, "* password is required")
  //     }

  //     // Check if the password and confirm password match
  //     else if (password !== password1) {
  //       success = false;
  //       setError(password1, " * Password and confirm password do not match")
  //     }
  //     else {
  //       setSuccess(password1)
  //     }
  //     if (phno === "") {
  //       success = false;
  //       setError(phno, " *contact number is required")
  //     }
  //     else if (isNaN(phno) || phno.length != 10) {
  //       success = false;
  //       setError(phno, " * please enter valid phone number")
  //     }
  //     else {
  //       setSuccess(phno)
  //     }
  //     if (s_add1 === "") {
  //       success = false;
  //       setError(s_add1, " *address is required")
  //     } else {
  //       setSuccess(s_add1)
  //     }

  //     if (city === "") {
  //       success = false;
  //       setError(city, " *city is required")
  //     } else if (!nameRegex.test(city)) {
  //       success = false;
  //       setError(city, " *please enter a valid city")
  //     } else {
  //       setSuccess(city)
  //     }
  //     if (district === "") {
  //       success = false;
  //       setError(district, " *district is required")
  //     }
  //     else if (!nameRegex.test(district)) {
  //       success = false;
  //       setError(district, "please enter a valid district")
  //     }
  //     else{
  //         setSuccess(district)
  //     }
  //     if (number === "") {
  //       success = false;
  //       setError(number, " *pincode is required")
  //     }
  //   //   const pinCodeRegex = /^\d{6}$/;
  //     else if(!pinCodeRegex.test(number)){
  //       success=false;
  //       setError(number,'enter a valid 6 digit code')

  //     }
  //     else{
  //       setSuccess(number)
  //     }
  //     if (abtu === "") {
  //       success = false;
  //       setError(abtu, " *required")
  //     }
  //     else if (abtu.length <= 10) {
  //       success=false;
  //       setError(abtu," *please enter more than 10 characters")

  //     }
  //     else{
  //       setSuccess(abtu)
  //     }
  //     if (text1 === "false") {
  //       success=false;
  //     }
  //     else{
  //       alert("form submitted successfully.you can login now");

  //     }
  //   return false;
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;
  var emailid = document.getElementById("emailid").value;
  var password = document.getElementById("password").value;
  var password1 = document.getElementById("password1").value;
  var phno = document.getElementById("phno").value;
  var s_add1 = document.getElementById("s_add1").value;
  var city = document.getElementById("city").value;
  var district = document.getElementById("district").value;
  var number = document.getElementById("number").value;
  var abtu = document.getElementById("abtu");
  var text;
  var error_fname = document.getElementById("error_fname");
  var error_lname = document.getElementById("error_lname");
  var error_emailid = document.getElementById("error_emailid");
  var error_password = document.getElementById("error_password");
  var error_password1 = document.getElementById("error_password1");
  var error_phno = document.getElementById("error_phno");
  var error_s_add1 = document.getElementById("error_s_add1");
  var error_s_add2 = document.getElementById("error_s_add2");
  var error_city = document.getElementById("error_city");
  var error_district = document.getElementById("error_district");
  var error_number = document.getElementById("error_number");
  var error_abtu = document.getElementById("error_abtu");

  error_fname.innerHTML = "";
  error_lname.innerHTML = "";
  error_emailid.innerHTML = "";
  error_password.innerHTML = "";
  error_password1.innerHTML = "";
  error_phno.innerHTML = "";
  error_s_add1.innerHTML = "";
  error_s_add2.innerHTML = "";
  error_city.innerHTML = "";
  error_district.innerHTML = "";
  error_number.innerHTML = "";
  error_abtu.innerHTML = "";

  var nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    error_fname.innerHTML =
      " * please enter a valid name (only letters and spaces allowed)";
    return false;
  }
  if (!nameRegex.test(lname)) {
    error_lname.innerHTML =
      " * please enter a valid name (only letters and spaces allowed)";
    return false;
  }

  if (name.length < 3) {
    text = " * please enter valid name ";
    error_fname.innerHTML = text;
    return false;
  }
  if (emailid.indexOf("@") == -1 || emailid.length < 6) {
    text = " * please enter valid Email Id";
    error_emailid.innerHTML = text;
    return false;
  }
  if (password.length < 8) {
    text = " * Password must be at least 8 characters long.";
    error_password.innerHTML = text;
    return false;
  }

  // Check if the password contains at least one uppercase letter, one lowercase letter, and one digit
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(password)) {
    text =
      " * Password must contain at least one uppercase letter, one lowercase letter, and one digit.";
    error_password.innerHTML = text;
    return false;
  }

  // Check if the password and confirm password match
  if (password !== password1) {
    text = " * Password and confirm password do not match";
    error_password1.innerHTML = text;
    return false;
  }

  if (isNaN(phno) || phno.length != 10) {
    text = " * please enter valid phone number";
    error_phno.innerHTML = text;
    return false;
  }
  if (s_add1.length < 3) {
    text = " * please enter address ";
    error_s_add1.innerHTML = text;
    return false;
  }
  if (!nameRegex.test(city)) {
    error_city.innerHTML = " * please enter a valid city";
    return false;
  }
  if (!nameRegex.test(district)) {
    error_district.innerHTML = " * please enter a valid district";
    return false;
  }
  const pinCodeRegex = /^\d{6}$/;
  if (!pinCodeRegex.test(number)) {
    text = " *Please enter a valid 6-digit pin code.";
    error_number.innerHTML = text;
    return false;
  }
  if (abtu.length <= 10) {
    text = " * please enter more than 10 characters";
    error_abtu.innerHTML = text;
    return false;
  }
  if (text1 === "false") {
    return false;
  }
  alert("form submitted successfully.you can login now");
  return true;
}
const validateEmail = (emailid) => {
  return String(emailid)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

document.addEventListener("DOMContentLoaded", function () {
  refreshCaptcha();
});

function generateCaptcha() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters.charAt(randomIndex);
  }

  return captcha;
}

function refreshCaptcha() {
  const captchaElement = document.getElementById("captcha");
  const newCaptcha = generateCaptcha();
  captchaElement.textContent = newCaptcha;
  text1 = undefined;
}

function submitForm() {
  //   const fileInput = document.getElementById("fileInput");
  //   const errorFile = document.getElementById("error_file");
  //   if (fileInput.files.length === 0) {
  //     errorFile.innerHTML = " * Please choose a file.";
  //     return false;
  //   }
  const captchaInput = document.getElementById("captchaInput");
  const enteredCaptcha = captchaInput.value;

  const captchaElement = document.getElementById("captcha");
  const actualCaptcha = captchaElement.textContent;

  if (enteredCaptcha === actualCaptcha) {
    text1 = "true";
    // alert("CAPTCHA is correct. Form will be submitted!");
  } else {
    alert("CAPTCHA is incorrect. Please try again.");
    refreshCaptcha();
    text1 = "false";
  }
}
