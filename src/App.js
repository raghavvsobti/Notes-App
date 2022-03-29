import { useMemo, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Background from "./components/Background";
import NoteHeading from "./components/NoteHeading";
import Profile from "./components/Profile";
import { authContext } from "./context";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <authContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Background />} />
          <Route exact path="/notes" element={<NoteHeading />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </authContext.Provider>
  );
}

export default App;
