# 🧱 Dev Stack Builder

Dev Stack Builder is an interactive web application designed to help software engineers and technology leads explore, select, and assemble their ideal software development stacks across frontend, backend, database, and DevOps tooling options.

## 🛠️ Technologies Used
- **Frontend Framework:** React.js (Bootstrapped with Vite)
- **Styling & UI:** Tailwind CSS, DaisyUI
- **Alert Notifications:** React-Toastify
- **Data Source:** Asynchronous JSON data fetching

## ✨ Key Features
1. **Interactive Stack Management:** Add technologies directly to your personalized stack sidebar with duplication prevention and state validation.
2. **Dynamic UI Feedback:** Real-time feedback provided through standard visual cues and toast notifications for user interactions (adding, removing, and clearing items).
3. **Responsive Multi-Column Design:** Clean, adaptive layout designed for seamless user experience across mobile, tablet, and desktop viewports.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like structures directly within JavaScript code. It is used in React because it makes describing UI layout intuitive, readable, and keeps rendering logic together with UI markup in a single component file.

### 2. What is the difference between props and state?
- **Props (Properties):** Immutable data passed down from a parent component to a child component. They are read-only for the receiving component.
- **State:** Mutable, internal data managed within a component that can change over time (e.g., due to user input or network requests). Changing state triggers a re-render of the component.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage reactive state variables. In this project, `useState` was used in `App.jsx` to store the loaded `technologies` list, track the user's selected items in `stack`, and manage the `loading` state during data fetching.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React functional components, such as performing HTTP requests, setting up timers, or directly touching the DOM. In this project, `useEffect` was needed to fetch data from `/technologies.json` once when the application component initially mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React relies on unique `key` props to keep track of individual list elements across re-renders. When items are added, updated, or reordered, keys help React accurately identify which exact DOM elements changed, preventing unnecessary DOM re-renders and preserving state integrity.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the practice of displaying specific visual content or components based on variable conditions or state values. In `StackSidebar.jsx`, conditional rendering was used to show an empty state message when `stack.length === 0`, and render the active stack list with the "Remove All" button when `stack.length > 0`.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** The parent component passes data down by declaring custom attributes (props) on the child element.
- **Child to Parent:** The parent passes down a callback function via props. When an event happens in the child component, it calls that function and passes any data back to the parent as parameters.
