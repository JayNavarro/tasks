import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// The button to change the color
function ChangeColor({
    colorIndex,
    setColorIndex,
}: {
    colorIndex: number;
    setColorIndex: (newIndex: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length); // Cycle through colors
            }}
        >
            Next Color
        </Button>
    );
}

// The preview box to show the current color
function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex], // Update based on the current colorIndex
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

// The main ColoredBox component that manages state
export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX); // Manage color state

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                {/* Pass state and update function to ChangeColor and ColorPreview */}
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
                <ColorPreview colorIndex={colorIndex} />
            </div>
        </div>
    );
}
