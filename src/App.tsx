import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>New Header where we at?</h1>
            <img
                src="https://th.bing.com/th/id/R.1a1f10b6714487c2ce8f56baf90f3c15?rik=YaLjGFUF5m5ZcQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f9%2f9b%2fPhoto_of_a_kitten.jpg&ehk=D%2bCxp6dPLSkHfYa8JvraOQ0MScRDCwP95fuL7yMpZ7E%3d&risl=&pid=ImgRaw&r=0"
                alt="Me after coding all day long"
            />
            <ul>
                <li>Finish 275</li>
                <li>372</li>
                <li>450</li>
            </ul>
            {/* Two Column Layout with Red-filled Rectangles */}
            <div style={{ padding: "10px" }}>
                <Container>
                    <Row>
                        <Col>
                        
                            <div
                                style={{
                                    width: "100px",
                                    height: "200px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "200px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jasmyn Navarro Hello World
            </p>
        </div>
    );
}

export default App;
