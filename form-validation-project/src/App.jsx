import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailHasError, setEmailHasError] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(true);
  const [areNoErrors, setAreNoErrors] = useState(false);

  useEffect(() => {
    if (!passwordHasError && !emailHasError) {
      setAreNoErrors(true);
      alert("Success");
    }
  }, [emailHasError, passwordHasError]);

  function handleSubmit(e) {
    e.preventDefault();

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

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className={`form-group ${emailHasError ? "error" : ""}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="msg">{emailMessage}</div>
        </div>

        <div className={`form-group ${passwordHasError ? "error" : ""}`}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="text"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="msg">{passwordMessage}</div>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
