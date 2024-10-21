import React, { useState } from "react";
import { Button } from "react-bootstrap";

// MoveableBox component which takes a position prop
function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px", // Use the position prop
            }}
        ></div>
    );
}

// Button that will "shove" the box
function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(position + 4); // Increase the position by 4 pixels
            }}
        >
            Shove the Box
        </Button>
    );
}

// Main ShoveBox component that manages the position state
export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10); // Initial position

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}px</span>
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox position={position} />{" "}
                {/* Pass position to MoveableBox */}
            </div>
        </div>
    );
}
