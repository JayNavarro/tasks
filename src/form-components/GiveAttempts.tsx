import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3); // Initialize attempts left to 3
    const [requestedAttempts, setRequestedAttempts] = useState<number | "">(""); // State for requested attempts

    // Function to handle gaining attempts
    const gainAttempts = () => {
        const parsedAttempts = parseInt(String(requestedAttempts), 10);
        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts); // Increase attempts if valid
            setRequestedAttempts(""); // Clear the input box
        }
    };

    // Function to handle using an attempt
    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts - 1); // Decrease attempts if available
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <strong>Attempts Left: {attemptsLeft}</strong>
            </div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => {
                    const value = e.target.value;
                    setRequestedAttempts(value === "" ? "" : parseInt(value)); // Update requested attempts
                }}
                placeholder="Request attempts"
            />
            <div>
                <button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                    Use
                </button>
                <button onClick={gainAttempts}>Gain</button>
            </div>
        </div>
    );
}
