import './assets/App.css';
import Botones from './components/Botones';
import CampoDatos from './components/CampoDatos';
import IconsPanel from './components/IconsPanel';
import PanelError from './components/PanelError';
import PanelHistorial from './components/PanelHistorial';
import Resultado from './components/Resultado';
import Theme from './components/Theme';
import CalculatorContainer from './containers/CalculatorContainer';

function App() {
  return (
    <>
       <CalculatorContainer>
         
          <CampoDatos />

          <Resultado />

          <IconsPanel />

          <PanelHistorial />

          <Botones />

          <PanelError />
        
                    
       </CalculatorContainer>

       <Theme />
     </>
  );
}

export default App;
