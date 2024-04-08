import React from "react";
import {Button, Card, Container, Row} from "react-bootstrap";

export default function GlossaryView(props){

    return(
        <Container>
            <Row className="d-flex justify-content-center p-3 pt-5">
                <Card className="max-width-50-rem p-0">
                    <Card.Header className="text-center">Expressions</Card.Header>
                    {props.expression === null ? <p></p> : props.expression.map((exp) => (
                        <Button key={exp} variant="dark" className="mt-2 mb-2 " value={exp} onClick={() => props.fetchExtract(exp)}>
                            {exp}
                        </Button>
                    ))}
                    {props.extract === "" ? <p></p> : <p className="mt-5 text-center">{props.extract}</p>}
                </Card>
            </Row>
        </Container>
    )
}