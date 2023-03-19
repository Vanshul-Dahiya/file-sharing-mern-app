import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";

function App() {
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const [file, setFile] = useState("");

  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  // after a file is picked , api call using useEffect
  useEffect(() => {
    // when value of file is changed it will work at that time
    const getImage = () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        // api call
        uploadFile(data);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="container">
      <img src={logo} alt="" />
      <div className="wrapper">
        <h1>Simple file sharing!</h1> <p>Upload and share the download link.</p>
        <button
          onClick={() => {
            onUploadClick();
          }}
        >
          {" "}
          Upload{" "}
        </button>
        {/* pick a file using input and store it using useState */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
    </div>
  );
}

export default App;