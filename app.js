document.getElementById("testForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const response = document.getElementById("response");

  if (name.trim() === "") {
    response.textContent = "Please enter a name!";
    response.style.color = "red";
  } else {
    response.textContent = `Hello, ${name}! Your form works!`;
    response.style.color = "green";
  }
});
