import logo from './logo.svg';
import './App.css';
import ImageGallery from './ImageGallery';
import { useRef, useState } from 'react';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    //apiURL
    const endpointURL = `https://pixabay.com/api/?key=29521906-3bc94794544b91e232d8db34e&q=${ref.current.value}&image_type=写真`
    //apiを叩く（データフェッチング）
    fetch(endpointURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      })
      .catch(error => console.log(error))
  }

  return (
  <div className="container">
    <h2>My pixabay</h2>
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <input type="text" placeholder='画像を探す' ref={ref} />
    </form>
    <ImageGallery fetchData = {fetchData} />
  </div>
)};

export default App;
