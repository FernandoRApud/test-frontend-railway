import './App.css';
import FileButton from './FileButton';
import axios from './axiosInit.js'

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div className="App">
      <FileButton />
    </div>
  );
}

export default App;
