export function FormInput({ type, value, onChange, message }) {
  return (
    <>
      <label className="label" htmlFor={type}>
        {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
      </label>
      <input
        className="input"
        type={type}
        id={type}
        value={value}
        onChange={onChange}
      ></input>
      <div className="msg">{message}</div>
    </>
  );
}
