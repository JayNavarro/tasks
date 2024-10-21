import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false); // State to control edit mode
    const [userName, setUserName] = useState<string>("Your Name"); // State for user's name
    const [isStudent, setIsStudent] = useState<boolean>(true); // State for student status

    return (
        <div>
            <h3>Edit Mode</h3>
            {/* Add className 'form-switch' to the wrapper for the checkbox */}
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode); // Toggle edit mode
                    }}
                />
                Switch to Edit Mode
            </label>

            {isEditMode ?
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value); // Update name
                        }}
                        placeholder="Enter your name"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent); // Toggle student status
                            }}
                        />
                        I am a student
                    </label>
                </div>
            :   <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
