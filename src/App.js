import {useState} from "react";

import * as math from "mathjs";

import "./App.css";
import Button from "./Components/Boutton";
import Input from "./Components/input";

const App = () => {
  const [text, setText] = useState("");
  const [resultat, setResultat] = useState("");

  const addtoText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResultat = () => {
    const input = text.join("")

    setResultat(math.evaluate(input));
  };
  const resetInput = () => {
    setText("");
    setResultat("");
  };

  const buttonColor = "#f2a33c";

  return(
  <div className="App">
    <div className="calc-wrapper">
      <Input text={text} resultat={resultat}/>
      <div className="row">
        <Button  symbole= "7" handleClick={addtoText}/>
        <Button  symbole= "8" handleClick={addtoText}/>
        <Button  symbole= "9" handleClick={addtoText}/>
        <Button  symbole= "/" color={buttonColor} handleClick={addtoText}/>
      </div>
      <div className="row">
        <Button  symbole= "4" handleClick={addtoText}/>
        <Button  symbole= "5" handleClick={addtoText}/>
        <Button  symbole= "6" handleClick={addtoText}/>
        <Button  symbole= "*" color={buttonColor} handleClick={addtoText}/>
      </div>
      <div className="row">
        <Button  symbole= "1" handleClick={addtoText}/>
        <Button  symbole= "2" handleClick={addtoText}/>
        <Button  symbole= "3" handleClick={addtoText}/>
        <Button  symbole= "+" color={buttonColor} handleClick={addtoText}/>
      </div>
      <div className="row">
        <Button  symbole= "0" handleClick={addtoText}/>
        <Button  symbole= "." handleClick={addtoText}/>
        <Button  symbole= "=" handleClick={calculateResultat}/>
        <Button  symbole= "-" color={buttonColor} handleClick={addtoText}/>
      </div>
      <Button symbole="Clear" color="red" handleClick={resetInput}/>
    </div>
  </div>
  );
};

export default App;