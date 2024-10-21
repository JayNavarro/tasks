import React, { useState, useEffect } from "react";
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
    // States for both dice
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    // Ensure initial values of the dice are not the same
    useEffect(() => {
        if (leftDie === rightDie) {
            setRightDie(d6());
        }
    }, [leftDie]);

    // Roll left die
    const rollLeft = () => {
        setLeftDie(d6());
    };

    // Roll right die
    const rollRight = () => {
        setRightDie(d6());
    };

    // Determine the game result message
    let statusMessage = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            statusMessage = "You Lose! Snake Eyes!";
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
