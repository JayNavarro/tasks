import React, { useState } from "react";
import { Form } from "react-bootstrap";

// Define a list of unique colors
const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]); // Default to the first color

    return (
        <div>
            <h3>Change Color</h3>
            {/* Render radio buttons for each color */}
            <Form>
                {COLORS.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        id={color}
                        label={color.charAt(0).toUpperCase() + color.slice(1)} // Capitalized label for display
                        name="color-options"
                        value={color} // Set the value to the color
                        checked={selectedColor === color} // Check if this is the selected color
                        onChange={() => { setSelectedColor(color); }} // Update the selected color
                    />
                ))}
            </Form>
            {/* Display the colored box */}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor, // Set background color to selected color
                    color: "white", // Set text color to white for contrast
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                }}
            >
                {selectedColor}{" "}
                {/* Directly display the selected color without modification */}
            </div>
        </div>
    );
}
