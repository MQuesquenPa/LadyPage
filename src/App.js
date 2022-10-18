import './App.css';
import Buttons from './components/Buttons/ButtonSimple';

const {ButtonIcon, ButtonPrimary} =  Buttons

function App() {
  return (
    <div className="App">
        
        <ButtonPrimary title = "COMO ESTAS?" />
        <ButtonIcon title = "DELETE" />

    </div>
  );
}

export default App;
