import { useState } from 'react';

function Div() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);

  return (
    <p>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      /
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      = {num1 / num2}
    </p>
  );
}

export default Div;
