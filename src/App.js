import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import SlideComponent from './component/slideComponent';
import ElementComponent from './component/elemntComponent';
import SectionsComponent from './component/sectionsComponent';
import ComplexComponent from './component/complexComponent';
import SectionLogo from './component/sectionLogo';
import PricingComponent from './component/pricingComponent';
import BlockComponent from './component/BlockComponent';
import InfoComponent from './component/infoComponent';
import FooterComponent from './component/footerComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <SlideComponent />
      <div className='contaniar'>
        <ElementComponent />
        <SectionsComponent />
        <ComplexComponent />
        <SectionLogo />
        <PricingComponent />
        <BlockComponent />
        <InfoComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
