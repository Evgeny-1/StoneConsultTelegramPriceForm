import './App.css';
import {Route, Routes} from 'react-router-dom'

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])
  const onClose =() =>{
    tg.close()
  }

  return (
    <div className="App">
      <button>Закрыть</button>
    </div>
  );
}

export default App;
