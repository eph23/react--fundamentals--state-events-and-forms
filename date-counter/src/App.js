import { useState } from "react";
import "./styles.css";
export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div>
            <div>
                <div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={step}
                        onChange={(event) =>
                            setStep(Number(event.target.value))
                        }
                    />
                </div>
                <div>
                    <span>Step: {step}</span>
                </div>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <input
                    type="number"
                    min="0"
                    max="10"
                    value={count}
                    onChange={(event) => setCount(Number(event.target.value))}
                />
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
            <p>
                <span>
                    {count === 0
                        ? "Today is"
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}{" "}
                </span>
                {date.toDateString()}
            </p>
            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleReset}>RESET</button>
                </div>
            ) : null}
        </div>
    );

    /* return (
        <div>
            <div>
                <button onClick={() => setStep((s) => s - 1)}>-</button>
                <span>Step:{step}</span>
                <button onClick={() => setStep((s) => s + 1)}>-</button>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <span>Count:{count}</span>
                <button onClick={() => setCount((c) => c + step)}>-</button>
            </div>
            <p>
                <span>
                    {count === 0
                        ? "Today is"
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}{" "}
                </span>
                {date.toDateString()}
            </p>
        </div>
    ); */
}
