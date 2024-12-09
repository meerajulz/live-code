import { useState } from 'react';
import Circle from './circle';

const ColorCircles = () => {
  const [color, setColor] = useState(['red', 'green']);
  const [history, setHistory] = useState<string[]>([]);

  const handleColorChange = (index: number) => {
    //if click green add red circle
    //need array
    const newColor = [...color];
    if (color[index] === 'green') {
      newColor[index] = 'red';
      newColor.push('green');
      setHistory([...history, `Change color of ${color[index]} to red`]);
    } else if (color[index] === 'red') {
      newColor.splice(index, 1);
      setHistory([...history, `Delete color ${color[index]}`]);
    }

    setColor(newColor);
  };

  const resetButton = () => {
    setColor(['red', 'green']);
    setHistory([]);
  };

  return (
    <div>
      <h1>Color Circles</h1>
      {color.map((color, index) => (
        <Circle
          color={color}
          key={index}
          onClick={() => handleColorChange(index)}
        />
      ))}
      <button onClick={resetButton}>Reset</button>
      {history.map((action, index) => (
        <p key={index}>{action}</p>
      ))}
    </div>
  );
};

export default ColorCircles;
