import React, { useState } from 'react';
import Square from './square';

const ColorRender = () => {
  const [colors, setColors] = useState(['red', 'green']);
  //Optional Render a history of users actions
  const [history, setHistory] = useState<string[]>([]);

  const handleCLick = (index: number) => {
    // click green => change current element to red + add 1 new green element to the end of the list
    const newColors = [...colors];
    if (colors[index] === 'green') {
      newColors[index] = 'red';
      newColors.push('green');
      setHistory([...history, `Change color of ${colors[index]} to red`]);
    }
    //click red delete current element
    else if (colors[index] === 'red') {
      newColors.splice(index, 1);
      setHistory([...history, `Delete color ${colors[index]}`]);
    }
    setColors(newColors);
  };

  //Optional Add button to reset de list of color to a initial state
  const handleReset: any = () => {
    setColors(['red', 'green']);
    setHistory([]);
  };

  return (
    //Use the square component to render all squares from the colors list
    <div>
      <h1>Color Render</h1>
      {colors.map((color, index) => (
        <Square color={color} key={index} onClick={() => handleCLick(index)} />
      ))}
      <h3>History</h3>
      {history.map((action, index) => (
        <p key={index}>{action}</p>
      ))}

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ColorRender;
