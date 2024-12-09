import React from 'react';
interface SquareProps {
  color: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Square;
