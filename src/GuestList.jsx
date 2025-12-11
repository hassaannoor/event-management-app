import React, { useState } from "react";

const GuestItem = ({ guest, onToggleRSVP, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(guest.name);
  const [editEmail, setEditEmail] = useState(guest.email);

  const handleSave = () => {
    onUpdate(guest.id, { name: editName, email: editEmail });
    setIsEditing(false);
  };

  return (
    // Dynamic class for the accent color strip
    <div className={`guest-card ${guest.rsvp ? "rsvp-true" : ""}`}>
      <div className="guest-content">
        {isEditing ? (
          <div className="edit-mode">
            <div className="edit-mode-inputs">
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                autoFocus
              />
              <input
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>
            <div className="guest-actions">
              <button className="btn-small" onClick={handleSave}>
                Save
              </button>
              <button className="btn-small" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="guest-info">
            <strong>{guest.name}</strong>
            <span>
              {guest.email} • {guest.rsvp ? "CONFIRMED" : "PENDING"}
            </span>
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="guest-actions">
          <button className="btn-small" onClick={() => onToggleRSVP(guest.id)}>
            {guest.rsvp ? "Revoke" : "RSVP"}
          </button>
          <button className="btn-small" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button
            className="btn-small btn-delete"
            onClick={() => onRemove(guest.id)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

const GuestList = ({ guests, toggleRSVP, removeGuest, updateGuest }) => {
  if (guests.length === 0)
    return (
      <p style={{ opacity: 0.5, fontStyle: "italic" }}>Manifest is empty.</p>
    );

  return (
    <div className="guest-list-container">
      <h3>Guest Manifest</h3>
      <div className="guest-list">
        {guests.map((guest) => (
          <GuestItem
            key={guest.id}
            guest={guest}
            onToggleRSVP={toggleRSVP}
            onRemove={removeGuest}
            onUpdate={updateGuest}
          />
        ))}
      </div>
    </div>
  );
};

export default GuestList;
