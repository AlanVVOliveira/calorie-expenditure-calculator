import React from 'react';

interface InputAgeProps {
  value: number;
  onChange: (newValue: number) => void;
}

const InputAge: React.FC<InputAgeProps> = ({ value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        onChange(newValue);
    };

    return (
        <div className="col-4">
            <label htmlFor="">Your age: </label><br />
            <input className="form-control" type="number" placeholder="Ex 18" value={value} onChange={handleChange} /><br />
        </div>
    );
};

export default InputAge;




