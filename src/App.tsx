import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { AboutUsPage } from './pages/AboutUs/AboutUsPage';
import { useLayoutEffect } from 'react';
import { ProjectsPage } from './pages/Projects/ProjectsPage';
import { NotProjectPage } from './pages/Projects/NoProject/NotProject';
const ToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className="app">

      <div className="grid">

        <Router>
          <ToTop>
            <Header />
            <div id="container">
              <Routes>
                <Route path="/" element={<HomePage />} >
                  <Route path=":menu" element={<HomePage />} />
                </Route>
                <Route path="/web" element={<HomePage />} />
                {/* <Route path="/how-we-do-it" element={<HomePage />} /> */}
                <Route path="/contact" element={<ContactPage />} >
                  <Route path=":frm" element={<ContactPage />} />
                </Route>
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/projects" element={<ProjectsPage />} >
                  {/* VER PORQUE NO FUNCIONA ASI */}
                  {/*<Route path="planet01" element={<NotProjectPage />} ></Route>
                   <Route path="zanahorario" element={<NotProjectPage />} />
                  <Route path="fillment" element={<NotProjectPage />} />
                  <Route path="learnCloud" element={<NotProjectPage />} />
                  <Route path="nom" element={<NotProjectPage />} />
                  <Route path="ucm" element={<NotProjectPage />} /> */}
                </Route>
                <Route path="/projects/dinamize" element={<NotProjectPage />} />
                <Route path="/projects/planet-rfid" element={<NotProjectPage />} />
                <Route path="/projects/zanahorario" element={<NotProjectPage />} />
                <Route path="/projects/fillment" element={<NotProjectPage />} />
                <Route path="/projects/learnCloud" element={<NotProjectPage />} />
                <Route path="/projects/nom" element={<NotProjectPage />} />
                <Route path="/projects/rcd" element={<NotProjectPage />} />
                <Route path="/projects/virtual-care" element={<NotProjectPage />} />
                <Route path="/projects/*" element={<NotProjectPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>

            <Footer />

          </ToTop>
        </Router>
      </div>
    </div>
  );
}

export default App;
