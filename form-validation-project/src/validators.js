export function checkEmail(email, setEmailMessage, setEmailHasError) {
  const emailRegex = /@webdevsimplified\.com$/;
  if (email === "") {
    setEmailMessage("Cannot be blank");
    setEmailHasError(true);
  } else if (!emailRegex.test(email)) {
    setEmailMessage("Must end in @webdevsimplified.com");
    setEmailHasError(true);
  } else {
    setEmailMessage("");
    setEmailHasError(false);
  }
}

export function checkPassword(
  password,
  setPasswordMessage,
  setPasswordHasError
) {
  if (password === "") {
    setPasswordMessage("Cannot be blank");
    setPasswordHasError(true);
  } else if (password.length < 10) {
    setPasswordMessage("Must be at least 10 characters");
    setPasswordHasError(true);
  } else if (!/[a-z]/.test(password)) {
    setPasswordMessage("Must include a lowercase letter");
    setPasswordHasError(true);
  } else if (!/[A-Z]/.test(password)) {
    setPasswordMessage("Must include an uppercase letter");
    setPasswordHasError(true);
  } else if (!/\d/.test(password)) {
    setPasswordMessage("Must include a number");
    setPasswordHasError(true);
  } else {
    setPasswordMessage("");
    setPasswordHasError(false);
  }
}
