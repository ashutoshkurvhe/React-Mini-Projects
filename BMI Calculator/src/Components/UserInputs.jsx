import { useMemo, useState } from "react";

const UserInputs = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  useMemo(() => {
    if (height === 0 || weight === 0) {
      setBmi(0);
      return;
    }
    const heightInMeters = height / 100;
    const BMI = (weight / Math.pow(heightInMeters, 2)).toFixed(1);
    setBmi(BMI);
  }, [weight, height]);

  return (
    <div className="input-container">
      <label htmlFor="user-weight">Weight: {weight} kg</label>
      <input
        type="range"
        id="user-weight"
        min="30"
        max="200"
        step="0.5"
        value={weight}
        onChange={(e) => setWeight(parseFloat(e.target.value))}
      />
      <label htmlFor="user-height">Height: {height} cm</label>
      <input
        type="range"
        id="user-height"
        min="120"
        max="220"
        step="1"
        value={height}
        onChange={(e) => setHeight(parseFloat(e.target.value))}
      />
      <p>Your BMI is</p>
      <p className="result">{bmi > 0 ? bmi : "0"}</p>
      {bmi > 0 && <p>Category: {getBMICategory(bmi)}</p>}
    </div>
  );
};

export default UserInputs;
