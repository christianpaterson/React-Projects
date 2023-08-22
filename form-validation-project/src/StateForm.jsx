import { checkEmail, checkPassword } from "./validators";
import { useState, useEffect } from "react";
import { FormInput } from "./FormInput";

export function StateForm() {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailHasError, setEmailHasError] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!passwordHasError && !emailHasError) {
      if (formSubmitted) {
        alert("Success");
        setFormSubmitted(false);
      }
    }
  }, [formSubmitted, emailHasError, passwordHasError]);

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
    checkEmail(email, setEmailMessage, setEmailHasError);
    checkPassword(password, setPasswordMessage, setPasswordHasError);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group ${emailHasError ? "error" : ""}`}>
        <FormInput
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          message={emailMessage}
        />
      </div>
      <div className={`form-group ${passwordHasError ? "error" : ""}`}>
        <FormInput
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          message={passwordMessage}
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
