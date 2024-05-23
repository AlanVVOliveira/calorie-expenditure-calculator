import React from 'react';

interface SelectGenderProps {
  value: string;
  onChange: (newValue: string) => void;
}

const SelectGender: React.FC<SelectGenderProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="col-4">
      <label htmlFor="selectGender">Select gender: </label><br />
      <select className="form-control" name="selectGender" id="selectGender" value={value} onChange={handleChange}>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
    </div>
  );
};

export default SelectGender;
