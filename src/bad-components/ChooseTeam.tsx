import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    // Adds a member to the team if they are not already in the team
    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]); // Use setTeam to update the state
        }
    }

    // Clears the entire team
    function clearTeam() {
        setTeam([]); // Reset the team to an empty array
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((person: string) => (
                        <div key={person} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => { chooseMember(person); }}
                                size="sm"
                            >
                                {person}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    <ul>
                        {team.map((member: string) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
