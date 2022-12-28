import { useRef } from "react";
import { Button } from "react-bootstrap";

export default function FileButton({ setFile, handleFile }) {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    beforeUpload(fileUploaded);
    const base64 = await getBase64(fileUploaded);
    console.log(base64);
    setFile(base64);
    handleFile();
  }

  const getBase64 = (img) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.readAsDataURL(img);
    })
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      alert("Solamente se permiten archivos PNG / JPEG");
      return;
    }
  } 

  const onInputClick = (event) => {
    event.target.value = "";
  }

  return(
    <>
      <Button variant="dark" onClick={handleClick}>
        Seleccionar foto
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
        onClick={onInputClick}
      ></input>
    </>
  )
}
