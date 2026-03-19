/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  if (typeof password !== "string") {
    return "weak";
  }
  let rating = 0;

  if (password.length >= 8) {
    rating++;
  }
  if (hasUpperCase(password)) {
    rating++;
  }
  if (hasLowerCase(password)) {
    rating++;
  }
  if (hasNumber(password)) {
    rating++;
  }
  if (hasSpecialCharacter(password)) {
    rating++;
  }

  if (rating <= 1 || password.length === 0) {
    return "weak";
  } else if (rating <= 3 && rating > 1) {
    return "medium";
  } else if (rating === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}

function hasUpperCase(password) {
  return /[A-Z]/.test(password);
}

function hasLowerCase(password) {
  return /[a-z]/.test(password);
}

function hasNumber(password) {
  return /[0-9]/.test(password);
}

function hasSpecialCharacter(password) {
  return /[!@#$%^&*()_+={}|;:,.<>?]/.test(password);
}
