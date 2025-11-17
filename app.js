const form = document.getElementById("multiStepForm");
const steps = document.querySelectorAll(".step");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const response = document.getElementById("response");

let currentStep = 1;
const totalSteps = steps.length;

// Inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");
const projectTypeInput = document.getElementById("projectType");

// Summary fields
const summaryName = document.getElementById("summaryName");
const summaryEmail = document.getElementById("summaryEmail");
const summaryCompany = document.getElementById("summaryCompany");
const summaryRole = document.getElementById("summaryRole");
const summaryProjectType = document.getElementById("summaryProjectType");

// Navigation buttons
document.getElementById("next1").addEventListener("click", () => {
  if (!validateStep1()) return;
  goToStep(2);
});

document.getElementById("back2").addEventListener("click", () => {
  goToStep(1);
});

document.getElementById("next2").addEventListener("click", () => {
  if (!validateStep2()) return;
  updateSummary();
  goToStep(3);
});

document.getElementById("back3").addEventListener("click", () => {
  goToStep(2);
});

// Handle final submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  updateSummary(); // refresh in case user went back and changed something

  response.classList.remove("error");
  response.textContent = "Form submitted successfully. Here’s what you entered above.";
});

// Helpers
function goToStep(stepNumber) {
  currentStep = stepNumber;

  steps.forEach((step) => {
    const stepIndex = Number(step.getAttribute("data-step"));
    step.classList.toggle("active", stepIndex === currentStep);
  });

  updateProgress();
}

function updateProgress() {
  progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
  const percent = (currentStep / totalSteps) * 100;
  progressFill.style.width = `${percent}%`;
}

function validateStep1() {
  clearResponse();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    showError("Please enter both your name and email to continue.");
    return false;
  }
  return true;
}

function validateStep2() {
  clearResponse();
  const company = companyInput.value.trim();
  const role = roleInput.value.trim();
  const projectType = projectTypeInput.value;

  if (!company || !role || !projectType) {
    showError("Please complete company, role, and project type before continuing.");
    return false;
  }
  return true;
}

function updateSummary() {
  summaryName.textContent = nameInput.value.trim();
  summaryEmail.textContent = emailInput.value.trim();
  summaryCompany.textContent = companyInput.value.trim();
  summaryRole.textContent = roleInput.value.trim();
  summaryProjectType.textContent = projectTypeInput.value || "(Not selected)";
}

function showError(message) {
  response.textContent = message;
  response.classList.add("error");
}

function clearResponse() {
  response.textContent = "";
  response.classList.remove("error");
}

// Initialize
updateProgress();
