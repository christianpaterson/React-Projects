import { checkEmail, checkPassword } from "./validators";
import { useState, useEffect } from "react";
import { useRef } from "react";

export function RefForm() {
  const emailRef = useRef();
  const [emailMessage, setEmailMessage] = useState("");
  const [emailHasError, setEmailHasError] = useState(true);
  const passwordRef = useRef();
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
    checkEmail(emailRef.current.value, setEmailMessage, setEmailHasError);
    checkPassword(
      passwordRef.current.value,
      setPasswordMessage,
      setPasswordHasError
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group ${emailHasError ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" ref={emailRef}></input>
        <div className="msg">{emailMessage}</div>
      </div>
      <div className={`form-group ${passwordHasError ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passwordRef}
        ></input>
        <div className="msg">{passwordMessage}</div>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
