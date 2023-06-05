import { useEffect, useState } from "react";
const ShowTitleInput = () => {

  const [ShowTitle, setShowTitle] = useState("");
  const [progress, setprogress] = useState(0);
  const [showprogress, setshowprogress] = useState([]);
  const [fetchtitle, setfetchtitle] = useState();
  const [videos, setVideos] = useState(" ");
  const [visible, setvisible] = useState(false);
  const [introvisibilty, setintrovisibility] = useState(false);
  const [transfervisibility, settransfervisibility] = useState(false);






  const handleprogress = async (amount) => {
    const newprogress = progress + amount;
    setprogress(Math.min(newprogress, 100));
    localStorage.setItem('progress', newprogress);
  }
  useEffect(() => {
    const storedprogress = localStorage.getItem('progress');
    if (storedprogress) {
      setprogress(parseInt(storedprogress))
    }
  }, []);
  const clickbutton = () => {
    setvisible(!visible);
  }
  const introHandler = () => {
    setintrovisibility(!introvisibilty);
  }
  const transferHandler = () => {
    settransfervisibility(!transfervisibility);
  }

  return {
    setShowTitle,
    setprogress,
    setVideos,
    setshowprogress,
    setfetchtitle,
    setvisible,
    visible,
    ShowTitle,
    progress,
    videos,
    showprogress,
    fetchtitle,
    handleprogress,
    clickbutton,
    introvisibilty,
    transfervisibility,
    transferHandler,
    introHandler,

    // handleclick,

  }

}
export default ShowTitleInput;