export function UserCard({ name, phoneNumber, age, email }) {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Email:</div>
        <div>{email}</div>
      </div>
    </div>
  );
}
