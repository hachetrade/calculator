import React from "react";
import Display from "./display";
import Keypad from "./keypad";

const pintaValor = (valor, currentScore) => {
  const element = document.getElementById("nombre");
  console.log(currentScore);
  currentScore ? (element.value = valor) : (element.value += valor);
};
const clearDisplay = () => {
  const element = document.getElementById("nombre");
  element.value = "";
};

const deleteLast = () => {
  const element = document.getElementById("nombre");
  element.value = element.value.slice(0, element.value.length - 1);
};

const result = (setScore, currentScore) => {
  let element = document.getElementById("nombre");
  if (!element.value) return "0";
  element.value = eval(element.value);
  setScore(!currentScore);
};

const Render = () => {
  const [currentScore, setScore] = React.useState(false);
  return (
    <div className='position-absolute top-50 start-50 translate-middle-x translate-middle-y w-25'>
      <Display />
      <Keypad
        fuck={pintaValor}
        clearDis={clearDisplay}
        deleteLast={deleteLast}
        result={result}
      />
    </div>
  );
};

export default Render;
