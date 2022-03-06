/* ===== CODE GIVEN BY ITC ===== */

// added a const to fetch name
const GITHUB_URL = "https://api.github.com/users/danielhaiem";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById('myName');
    myName.innerText = data.name;
  });

 /* ===== Footer All - This page was built using ===== */
//  https://stackoverflow.com/questions/53879088/join-an-array-by-commas-and-and

const codingLanguages = ["HTML", "CSS", "JavaScript"];

// WORKS
function makeString(codingLanguages) {
  if (codingLanguages.length === 1) 
  return 'This page was built using: ' + codingLanguages[0];
  const firsts = codingLanguages.slice(0, codingLanguages.length - 1);
  const last = codingLanguages[codingLanguages.length - 1];
  return 'This page was built using: ' + firsts.join(', ') + ' and ' + last;
}

// textContent returns concatenation of all elements in a single text node w/ string value
document.getElementById("languages").textContent = makeString(codingLanguages);


/* ===== ABOUT ===== */
//BUTTONS
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const myCities = document.querySelectorAll('.cities p'); //where it should select the city options from, the class in the html
let currentlySelected = 0;
// 
let citySelectID = '';

prevBtn.addEventListener('click', function() {
  myCities[currentlySelected].classList.remove("active");
  currentlySelected--;
  myCities[currentlySelected].classList.add("active");
  nextBtn.disabled = false;

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }

  // Followed example in code given by ITC for Github. I implemented the Template Strings ${citySelectID} (paramater/input) to change the google maps src (end point) to the prev city/country based on the id. frontendMaster.usingJavaScriptInWebsites.changeEvent&fetchingDataSolution.interactingWithTheDom
  let citySelectID = myCities[currentlySelected].id;

  // Must remove &amp; to work.
  let iframeSrc = `https://maps.google.com/maps?width=100%25&height=100%&hl=en&q=${citySelectID}+()&t=&z=12&ie=UTF8&iwloc=B&output=embed`;

  iframeValue = document.getElementById("iframeID");
  iframeValue.src = iframeSrc;

  // Now I need to make the iframe google map to reinput to the new city/country (id). I did this by creating a function to reload on click
  function reinput() {
    iframeValue.src += "";
    } btn.onclick = reinput(); 
  reinput();

}); 

nextBtn.addEventListener('click', function() {
  myCities[currentlySelected].classList.remove("active"); /* if the user clicks a button, then we hide the current selection */
  currentlySelected ++; /* user clicks next so it chooses the next one */
  myCities[currentlySelected].classList.add("active");
  prevBtn.disabled = false;

  if (myCities.length === currentlySelected + 1) { /* how we know we are at the end of selection */
    nextBtn.disabled = true; //next button disabled
  }


  let citySelectID = myCities[currentlySelected].id;

  // Must remove &amp; to work
  let iframeSrc = `https://maps.google.com/maps?width=100%25&height=100%&hl=en&q=${citySelectID}+()&t=&z=12&ie=UTF8&iwloc=B&output=embed`;

  // You can also use document.queryselector('#iframeID')
  iframeValue = document.getElementById("iframeID");
  iframeValue.src = iframeSrc;

  // Now I need to make the iframe google map to reinput to the new city/country (id). I did this by creating a function to reload on click
  function reinput() {
    iframeValue.src += "";
    } btn.onclick = reinput(); 
  reinput();

}); 


/* ===== Contact ===== */
// https://stackoverflow.com/questions/65943680/enable-submit-button-only-when-all-fields-are-not-empty-type-file-select
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// ? conditional operator ie. condition ? expressionIfTrue:expressionIfFalse. alternative to if...else

function validate(){
  let submit = document.getElementById('button-send');
  let fname = document.getElementById('fname').value === ""? false: true; 
  let phone = document.getElementById("phone").value === ""? false: true;
  let email = document.getElementById("email").value === ""? false: true;
  let sapurpose = document.getElementById("sapurpose").value === ""? false: true;
  let comments = document.getElementById("comments").value===""?false: true;
  let filled =(fname && phone&& email && sapurpose && comments);
  filled? submit.disabled=false: submit.disabled=true;
  // https://stackoverflow.com/questions/26236196/trying-to-log-to-console-with-onclick-event
  submit.onclick = function() {
    console.log('First Name: '+document.getElementById('fname').value + ', Last Name: '+document.getElementById('lname').value + ', Email: '+document.getElementById('email').value + ', Comment: '+document.getElementById('comments').value+ ', Phone Number: '+document.getElementById('phone').value + ', Select a Purpose: '+document.getElementById('sapurpose').value + '.');
};

let form = document.querySelector('form');

form.onsubmit = function(e){
  e.preventDefault(); 
};
}
