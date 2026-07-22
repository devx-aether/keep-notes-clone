import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import Sidebar from "./components/Sidebar";

const notes = [
  {
    id: 1,
    title: "Shopping",
    body: "Milk, eggs, bread, butter, tomatoes, onions, chicken.",
  },

  {
    id: 2,
    title: "Workout",
    body: "Push Day\nBench Press 4x8\nIncline DB Press 3x10\nLateral Raises 3x15\nTricep Pushdowns 3x12",
  },

  {
    id: 3,
    title: "Ideas",
    body: "Build a Google Keep clone. Then add authentication, note colors, labels, archive, and drag-and-drop ordering.",
  },

  {
    id: 4,
    title: "Movies",
    body: "Interstellar, The Prestige, Blade Runner 2049, Dune Part Two.",
  },

  { id: 5, title: "Reminder", body: "Call the dentist tomorrow morning." },

  {
    id: 6,
    title: "Project",
    body: "Finish the FastAPI backend before starting authentication. Keep commits small and meaningful.",
  },

  {
    id: 7,
    title: "Recipe",
    body: "Chicken, rice, soy sauce, garlic, ginger, sesame oil. Cook chicken first, then vegetables, then rice.",
  },

  {
    id: 8,
    title: "Random Thought",
    body: "Sometimes spending an hour planning saves five hours of rewriting code later.",
  },

  {
    id: 9,
    title: "Books",
    body: "Clean Code\nDesigning Data-Intensive Applications\nThe Pragmatic Programmer",
  },

  {
    id: 10,
    title: "Very Long Note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: 11,
    title: "Vacation",
    body: "Book hotel, renew passport, check flight prices, make packing list, buy travel adapter.",
  },

  {
    id: 12,
    title: "College",
    body: "Complete assignment before Friday. Revise React components and practice DSA for at least one hour.",
  },

  {
    id: 13,
    title: "Meeting Notes",
    body: "Discuss project timeline, API endpoints, deployment strategy, and testing plan.",
  },

  { id: 14, title: "Tiny", body: "Hi." },

  {
    id: 15,
    title: "Weekend",
    body: "Gym, laundry, grocery shopping, meal prep, and maybe watch a movie.",
  },

  {
    id: 16,
    title: "Quote",
    body: "The best way to predict the future is to build it.",
  },

  {
    id: 17,
    title: "Bug",
    body: "Grid spacing looks wrong when the viewport becomes wider than 1200px. Investigate CSS Grid columns.",
  },

  {
    id: 18,
    title: "Goals",
    body: "Learn React properly, finish this project, deploy it, then start a bigger full-stack application.",
  },

  {
    id: 19,
    title: "Another Long Note",
    body: "This note exists only to test how variable-height cards behave inside the grid. It should wrap across multiple lines and become noticeably taller than the other cards. If your layout still looks clean after this, you're on the right track.",
  },

  {
    id: 20,
    title: "Done",
    body: "✔ Backend\n✔ React setup\n⬜ Connect API\n⬜ Authentication\n⬜ Deploy",
  },
];

function App() {
  return (
      <div className="main-container">
        <Header />
        <div className="divider" />
        <div className="content-container">
          <Sidebar />
          <NotesGrid className='notes-grid' notes={notes} />
        </div>
      </div>
  );
}

export default App;
