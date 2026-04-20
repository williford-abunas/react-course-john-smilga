import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from'values.js'
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const addColor = (color)=> {
    try {
      let newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      toast.error("Invalid color format")
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
