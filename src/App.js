import './App.css';
import FileButton from './FileButton';
import axios from './axiosInit.js'
import { useEffect } from 'react';

function App() {
  
  const getData = async () => {
    const user = await axios('/users')
    console.log(process.env.REACT_APP_API_URL, user);
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <FileButton />
    </div>
  );
}

export default App;
