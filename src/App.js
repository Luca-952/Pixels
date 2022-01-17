import logo from './logo.svg';
import './App.css';
import Editor from './Components/Editor';
import { createTheme } from '@mui/material';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
