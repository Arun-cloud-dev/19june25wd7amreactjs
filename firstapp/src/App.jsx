import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Profile from "./components/Profile.jsx";
import Settings from "./components/Settings.jsx";


import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
import { Link, Routes, Route } from "react-router-dom";



function App() {
  
  const [ selectedTopic, setSelectedTopic ]= useState(); // default selected topic

  function handleSelect(selectedButton) { 
    //string  => componets , jsx , etc.... 
    // console.log(selectedButton);
    setSelectedTopic(selectedButton)
    // console.log(selectedTopic);

  }

  // console.log('App component rendered with tabContent:');
  
  let tabContent = <p> Please Select a Topic </p>;

  if (selectedTopic) {
    tabContent = ( <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>)
  }


  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>|{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}>
              Components
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
          {/* {selectedTopic} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
