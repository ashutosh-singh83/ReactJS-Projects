import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import ContactHeader from "./components/Contact Header/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
