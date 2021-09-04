import './App.css';
import { useCounter } from './hooks/useCounter';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


function App() {
  const [{ value, step }, { increment, decrement, setStep, reset }] = useCounter({ value: 41.21547, step: 21547.245 });
  return (
    <article style={containerStyle}>
      <h1>{value}</h1>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
      <div>
        <input type="number" value={step}
               onChange={({ currentTarget: { value } }) => setStep(Number(value))} />
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </article>
  );
}

export default App;
