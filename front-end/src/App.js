import React,{useState} from "react"
import axios from "axios";
const App = () => {
  const [file,setFile] = useState(null);
  const [fileName,setFileName] = useState(null);
  const [message,setMessage] = useState("");
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      setMessage("It works");
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  return(
    <>
        <input type="file" name="fileToUpload" id="fileToUpload" onChange={saveFile}/>
        <button onClick={uploadFile}>Upload</button> 
        <h1>{message}</h1> 
    </>
  )
}

export default App;