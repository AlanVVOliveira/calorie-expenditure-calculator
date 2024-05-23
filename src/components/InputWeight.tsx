import React from 'react';

interface InputWeightProps {
    value: number;
    onChange: (newValue: number) => void;
  }

const InputWeight: React.FC<InputWeightProps> = ({ value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        onChange(newValue);
      };

    return (
        <>
            <div className="col-4">
                <label htmlFor="">Weight (kg): </label><br />
                <input className="form-control" type="number" placeholder="Ex 70" value={value} 
                    onChange={handleChange}  step="0.1"/><br />
            </div>
        </>
    )
}

export default InputWeight;