import { useState, useEffect } from 'react';
import './App.css';
import Box from "./box";

const App = () => {
  const [user, setUser] = useState("Steve");
  const [photos, setPhotos] = useState([]);

  const arr = [{ name: "Steve" }, { name: "Gary" }, { name: "Tony" }, { name: "Kevin" }]; 

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }, [user]); //everytime user's value changes, useEffect will run again


  // for(let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // };

  // instead of doing the above you can do the below

  // arr.map((item, index) => {
  //   console.log(item.name)
  // })

  // const useState = (initialVal) => {
  //   let state = initialVal;

  //   const setState = (newVal) => {
  //     state = newVal
  //   }

  //   return [state, setState];
  // }

  return (
    <div className="App">
      {photos.map((item, index) => {
        return(
          <div>
            <img src={item.download_url} />
          </div>
        )
      })}
      {/* <Box name={user} />
      {arr.map((item, i) => {
        return (
          <div>
            <Box name={item.name} />
        ) </div>
        );
      })}
      <input onChange={(event) => setUser(event.target.value)} />
      {user && <Box name="Tony" />}
      {user ? <Box name="Jeff" /> : <Box name="Not Jeff" />} */}
    </div>
  );
};

export default App;
