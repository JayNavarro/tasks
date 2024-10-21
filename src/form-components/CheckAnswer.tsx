import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(""); // Initialize state for user answer

    // Determine if the user's answer is correct
    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => { setUserAnswer(e.target.value); }} // Update state on input change
                placeholder="Type your answer here"
            />
            <div>
                {/* Display check or cross based on correctness */}
                {isCorrect ? "✔️" : "❌"}
            </div>
        </div>
    );
}
