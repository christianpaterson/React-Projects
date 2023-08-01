import React from "react";
import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";

export default function App() {
  return (
    <UserCard
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      email={user.email}
    />
  );
}
