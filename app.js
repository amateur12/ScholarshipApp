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

// Final submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  updateSummary();
  response.classList.remove("error");
  response.textContent = "Form submitted successfully!";
});

/* Helpers */
function goToStep(stepNumber) {
  currentStep = stepNumber;

  steps.forEach(step => {
    const s = Number(step.getAttribute("data-step"));
    step.classList.toggle("active", s === currentStep);
  });

  updateProgress();
}

function updateProgress() {
  progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
  progressFill.style.width = `${(currentStep / totalSteps) * 100}%`;
}

function validateStep1() {
  clearResponse();
  if (!nameInput.value.trim() || !emailInput.value.trim()) {
    showError("Please enter your name and email.");
    return false;
  }
  return true;
}

function validateStep2() {
  clearResponse();
  if (!companyInput.value.trim() || !roleInput.value.trim() || !projectTypeInput.value) {
    showError("Please complete all fields before continuing.");
    return false;
  }
  return true;
}

function updateSummary() {
  summaryName.textContent = nameInput.value.trim();
  summaryEmail.te
