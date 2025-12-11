import React, { useState, useEffect } from "react";
import GuestForm from "./GuestForm";
import GuestList from "./GuestList";
import "./styles.css";

const App = () => {
  const [guests, setGuests] = useState([
    { id: 1, name: "Alice V.", email: "alice@design.co", rsvp: true },
    { id: 2, name: "Bob Chen", email: "bob@arch.net", rsvp: false },
  ]);

  const addGuest = (guestData) => {
    const newGuest = { id: Date.now(), ...guestData, rsvp: false };
    setGuests([...guests, newGuest]);
  };

  const toggleRSVP = (id) => {
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, rsvp: !g.rsvp } : g))
    );
  };

  const removeGuest = (id) => setGuests(guests.filter((g) => g.id !== id));

  const updateGuest = (id, info) => {
    setGuests(guests.map((g) => (g.id === id ? { ...g, ...info } : g)));
  };

  // Stats Calculation
  const totalGuests = guests.length;
  const confirmed = guests.filter((g) => g.rsvp).length;
  const pending = totalGuests - confirmed;

  return (
    <div className="app-container">
      <h1>
        Event
        <br />
        Manifest_01
      </h1>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-label">Total Guests</span>
          <span className="stat-value">
            {totalGuests.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label" style={{ color: "var(--accent)" }}>
            Confirmed
          </span>
          <span className="stat-value" style={{ color: "var(--accent)" }}>
            {confirmed.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Pending</span>
          <span className="stat-value">
            {pending.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      <GuestForm onAddGuest={addGuest} />

      <GuestList
        guests={guests}
        toggleRSVP={toggleRSVP}
        removeGuest={removeGuest}
        updateGuest={updateGuest}
      />
    </div>
  );
};

export default App;
