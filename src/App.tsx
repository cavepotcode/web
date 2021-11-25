import './App.scss';
import { ClientSay } from './components/clientSay/ClientSay';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { HowWeDoIt } from './components/howWeDoIt/HowWeDoIt';
import { Investigation } from './components/investigation/Investigation';
import { TechnologiesChanges } from './components/technologiesChanges/TechnologiesChanges';
import { TechnologiesThatWeUse } from './components/technologiesThatWeUse/TechnologiesThatWeUse';
import WhatIsCavepot from './components/whatIsCavepot/WhatIsCavepot';
import { WhatDoWeDo } from './components/whatWeDo/WhatDoWeDo';


function App() {
  return (
    <div className="app">
      <div className="grid">
        <Header />
        <TechnologiesChanges />
        <WhatIsCavepot />
        {/*  <WhatDoWeDo />
        <HowWeDoIt/>
        <TechnologiesThatWeUse/>
        <ClientSay/>
        <Investigation/>
        <Footer/> */}
      </div>
    </div>
  );
}

export default App;
