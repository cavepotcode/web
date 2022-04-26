import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { AboutUsPage } from './pages/AboutUs/AboutUsPage';
import { useLayoutEffect } from 'react';
import { ProjectsPage } from './pages/Projects/ProjectsPage';
import { Project } from './pages/Project/Project';
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

        
          <ToTop>
            <Header />
            <div id="container">
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<HomePage />} >
                  <Route path=":menu" element={<HomePage />} />
                </Route>
                <Route path="/web" element={<HomePage />} />
                {/* <Route path="/how-we-do-it" element={<HomePage />} /> */}
                <Route path="/contact" element={<ContactPage />} >
                  <Route path=":frm" element={<ContactPage />} />
                </Route>
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/projects" element={<ProjectsPage />} >
                </Route>
                <Route path="/project/:id" element={<Project />} >
                </Route>
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>

            <Footer />

          </ToTop>
        
      </div>
    </div>
  );
}

export default App;
