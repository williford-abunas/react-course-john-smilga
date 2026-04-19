import { useState } from "react";
import text from "./data";
import SectionContainer from "./SectionContainer";
import LoremIpsumForm from "./LoremIpsumForm";

const App = () => {
 

  return <SectionContainer>
    <LoremIpsumForm text={text} />
  </SectionContainer>;
};
export default App;
