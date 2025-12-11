import React, { useState } from "react";

const GuestForm = ({ onAddGuest }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onAddGuest({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h3>New Entry</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="FULL NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add to Manifest</button>
      </form>
    </div>
  );
};

export default GuestForm;
