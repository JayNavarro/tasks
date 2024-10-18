import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🎃 Halloween"
    | "🎄 Christmas"
    | "🎉 New Year's"
    | "🦃 Thanksgiving"
    | "🎆 Independence Day";

const alphabeticalOrder: Record<Holiday, Holiday> = {
    "🎃 Halloween": "🎄 Christmas",
    "🎄 Christmas": "🎉 New Year's",
    "🎉 New Year's": "🦃 Thanksgiving",
    "🦃 Thanksgiving": "🎆 Independence Day",
    "🎆 Independence Day": "🎃 Halloween",
};

const yearOrder: Record<Holiday, Holiday> = {
    "🎉 New Year's": "🎆 Independence Day",
    "🎆 Independence Day": "🎃 Halloween",
    "🎃 Halloween": "🦃 Thanksgiving",
    "🦃 Thanksgiving": "🎄 Christmas",
    "🎄 Christmas": "🎉 New Year's",
};

export function CycleHoliday(): React.JSX.Element {
    // State for the current holiday
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("🎃 Halloween");

    const advanceByAlphabet = () => {
        setCurrentHoliday(alphabeticalOrder[currentHoliday]);
    };

    const advanceByYear = () => {
        setCurrentHoliday(yearOrder[currentHoliday]);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>

            <Button
                onClick={() => {
                    advanceByAlphabet();
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    advanceByYear();
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
