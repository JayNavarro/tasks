import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Initialize state for both dice
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    // Ensure initial dice values are not the same
    while (leftDie === rightDie) {
        setRightDie(d6());
    }

    // Roll left die
    const rollLeft = () => {
        const newRoll = d6();
        setLeftDie(newRoll);
    };

    // Roll right die
    const rollRight = () => {
        const newRoll = d6();
        setRightDie(newRoll);
    };

    // Check game status
    let statusMessage = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            statusMessage = "You Lose!";
        } else {
            statusMessage = "You Win!";
        }
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {statusMessage && <div>{statusMessage}</div>}
        </div>
    );
}
