import './App.scss';
import { ClientSay } from './components/clientSay/ClientSay';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { HowWeDoIt } from './components/howWeDoIt/HowWeDoIt';
import { Investigation } from './components/investigation/Investigation';
import { TechnologiesChanges } from './components/technologiesChanges/TechnologiesChanges';
import { TechnologiesThatWeUse } from './components/technologiesThatWeUse/TechnologiesThatWeUse';
import WhatIsCavepot from './components/whatIsCavepot/WhatIsCavepot';
import { Contact } from './components/contact/Contact';
import { WhatDoWeDo } from './components/whatWeDo/WhatDoWeDo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFound/NotFound';


function App() {
  return (
    <div className="app">

      <div className="grid">

        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
