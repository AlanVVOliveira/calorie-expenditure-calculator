import { useState } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import SelectGender from './components/SelectGender';
import InputAge from './components/InputAge';
import InputWeight from './components/InputWeight';
import Button from './components/Button';

function App() {

  const [gender, setGender] = useState<string>('man');

  const handleGenderChange = (newGender: string) => {
    setGender(newGender);
  }

  const [age, setAge] = useState<number>(0);

  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
  };

  const [weight, setWeight] = useState<number>(0);

  const handleWeightChange = (newWeight: number) => {
    setWeight(newWeight);
  };

  const [calculatedValue, setCalculatedValue] = useState<number | null>(null);

  const handleCalculate = () => {
    const calculatedResult = (): number => {
      if (gender === "man") {
        if(age > 0 && age <=3) return (59.512 * weight) - 30.4;
        else if(age > 3 && age <=10) return (22.706 * weight) + 504.3;
        else if(age > 10 && age <=18) return (17.686 * weight) + 658.2;
        else if(age > 18 && age <=30) return (15.057 * weight) + 692.2;
        else if(age > 30 && age <=60) return (11.472 * weight) + 873.1;
        else if(age > 60) return (11.711 * weight) + 587.7;
      } else {
        if(age > 0 && age <=3) return (58.317 * weight) - 31.1;
        else if(age > 3 && age <=10) return (20.315 * weight) + 485.9;
        else if(age > 10 && age <=18) return (13.384 * weight) + 692.6;
        else if(age > 18 && age <=30) return (14.818 * weight) + 486.6;
        else if(age > 30 && age <=60) return (8.126 * weight) + 845.6;
        else if(age > 60) return (9.082 * weight) + 658.5;
      }
      return 0;
    }

    setCalculatedValue(calculatedResult);
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center p-4 bg-light rounded">
          <Header />
          <div className="d-flex flex-column align-items-center">
            <SelectGender value={gender} onChange={handleGenderChange} />
            <InputAge value={age} onChange={handleAgeChange} />
            <InputWeight value={weight} onChange={handleWeightChange} />
            <Button onClick={handleCalculate} />
            <div>Basal metabolic rate: {calculatedValue?.toFixed(2).replace('.', ',')}</div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App
