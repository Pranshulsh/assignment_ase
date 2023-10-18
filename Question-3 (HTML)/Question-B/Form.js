function submitForm() {
  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;

  const genderCheckboxes = document.querySelectorAll(
    'input[name="gender"]:checked'
  );
  const genderValues = Array.from(genderCheckboxes).map(
    (checkbox) => checkbox.value
  );

  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Validate the form
  if (!firstName) {
    alert("Fill the First Name");

    return;
  } else if (!lastName) {
    alert("Fill the last Name");
    return;
  } else if (!dob) {
    alert("Fill the DOB");
    return;
  } else if (!country) {
    alert("Fill the Country");
    return;
  } else if (genderValues.length === 0) {
    alert("Check the Gender");
    return;
  } else if (!email) {
    alert("Fill the Email");
    return;
  } else if (!mobile) {
    alert("Fill the Mobile Number");
    return;
  }

  // Display results in the popup
  const resultHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${genderValues.join(", ")}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

  document.getElementById("popupResult").innerHTML = resultHTML;
  showPopup();
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}


function showPopup() {
  // Build and display the popup content
  var popupResult = document.getElementById("popupResult");
  var formElements = document.getElementById("surveyForm").elements;

  for (var i = 0; i < formElements.length / 10; i++) {
    if (formElements[i].type !== "button") {
      popupResult.innerHTML +=
        "<p><strong>" + formElements[i].name + ":</strong> " + "</p>";
    }
  }

  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("surveyForm").reset();
}
