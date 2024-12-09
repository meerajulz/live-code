import React from 'react';
interface CircleProps {
  color: string;
  onClick: () => void;
}

const Circle: React.FC<CircleProps> = ({ color, onClick }) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color,
      }}
      onClick={onClick}
    ></div>
  );
};

export default Circle;
