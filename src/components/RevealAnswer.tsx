import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={toggleVisibility} variant="primary">
                {isVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {isVisible && <p>The answer is 42</p>}
        </div>
    );
}
