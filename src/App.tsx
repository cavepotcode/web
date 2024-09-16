import './App.scss';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { AboutUsPage } from './pages/AboutUs/AboutUsPage';
import { useLayoutEffect } from 'react';
import { ProjectsPage } from './pages/Projects/ProjectsPage';
import { Project } from './pages/Project/Project';
import { Header, Footer } from '@cavepotcode/ui-toolkit';
import { headerWeb } from './helpers/header';
import { footerWeb } from './helpers/footer';
import { Logo } from './components/logo/Logo';

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
            <Header {...headerWeb} logo={<Logo/>}/>
            <div id="container">
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<HomePage />} >
                  <Route path=":menu" element={<HomePage />} />
                </Route>
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

            <Footer {...footerWeb} />

          </ToTop>
        
      </div>
    </div>
  );
}

export default App;
