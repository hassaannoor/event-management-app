# Event Manifest_01

> **A Neo-Brutalist React Interface for Guest Management.**

**Event Manifest_01** is a React-based state management demonstration built for **CS-343: Web Engineering**. It moves beyond standard CRUD operations by implementing a distinct "International Editorial" design language, featuring high-contrast typography, strict grid layouts, and complex state batching logic.

<img width="469" height="712" alt="image" src="https://github.com/user-attachments/assets/4080a5ae-2e4c-4b0a-b131-3894edf01c99" />

---

## ⚡ Features

### Core Functionality

- **State-Driven Management**: Real-time addition, removal, and modification of guest data.
- **Deep State Updates**: Implements immutable state patterns to handle nested object properties (RSVP toggling).
- **Live Statistics**: Derived state calculations for "Confirmed" vs. "Pending" guests.
- **Batching Analysis**: logic to demonstrate React's asynchronous state updating (Event Loop processing).

### UI/UX Design ("The Manifest")

- **Neo-Brutalist Aesthetic**: Hard shadows (`8px`), heavy borders, and paper textures.
- **Typography-First**: Uses _Syne_ for aggressive headlines and _Manrope_ for legible UI data.
- **Micro-Interactions**: Staggered CSS entrance animations and reactive hover states.
- **Conditional Styling**: Visual indicators change dynamically based on guest status (Confirmed/Pending).

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── GuestForm.jsx    # Controlled inputs & validation
│   └── GuestList.jsx    # List rendering, conditional logic, & edit modes
├── App.jsx              # Global state container & batching logic
├── index.css            # CSS Variables, Animations, & Texture overlays
└── main.jsx             # Entry point
```

---

## 🚀 Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/hassaannoor/event-management-app.git
    ```

2.  **Install dependencies**

    ```bash
    cd event-manifest-01
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

---

## 🎨 Aesthetic Guidelines

The design uses a strict CSS variable system defined in `index.css`.

- **International Orange (`#ff3c00`)**: Used strictly for "Confirmed" stats and primary interactions.
- **Off-Black (`#0f0f0f`)**: Used for the body background to contrast with the paper-white container.
- **Paper (`#f2f0e9`)**: The main surface color, overlaid with an SVG noise filter for texture.

---

## 📝 License

MIT
