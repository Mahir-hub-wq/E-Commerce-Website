export const validateForm = (state) => {
  let errors = {};

  if (!state.fullName.trim()) {
    errors.fullName = "Full Name is required";
  }

  if (!state.email.includes("@")) {
    errors.email = "Enter a valid email";
  }

  if (state.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (state.password !== state.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};