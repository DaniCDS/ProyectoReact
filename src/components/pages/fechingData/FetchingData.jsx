import Albums from "./Albums";
import { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // const tarea = fetch("https://jsonplaceholder.typicode.com/albums");
    // tarea
    //   .then((res) => res.json())
    //   .then((res) => setAlbums(res))
    //   .catch((err) => console.log(err));
    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
    tarea.then((res) => setAlbums(res.data)).catch((err) => console.log(err));
  }, []);

  const crear = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     userId: 2,
    //     title: "nuevo album",
    //   }),
    //   // headers: {
    //     "authorization": "holaMundo123",
    // }
    axios.post("https://jsonplaceholder.typicode.com/albums", {
      userId: 2,
      title: "nuevo album",
    });
  };
  //   return <Albums albums={albums} crear={crear} />;
  return <Albums albums={albums} crear={crear} />;
};

export default FetchingData;
