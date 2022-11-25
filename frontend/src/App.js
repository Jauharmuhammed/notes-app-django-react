import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./compontents/Footer";

import Header from "./compontents/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <Router>
      <div className={darkMode? 'dark': ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-lexend ">
          <section className=" border-sky-600 px-4 md:px-16">
            <Header darkMode={darkMode}  setDarkMode={setDarkMode}/>
            <Routes>
              <Route path="/" exact element={<NotesListPage />} />
              <Route path="/note/:id" element={<NotePage />} />
            </Routes>
            <Footer/>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
