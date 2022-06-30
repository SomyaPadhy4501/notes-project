import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import "./card.css"


const Cards = (props) => {
    return (
        <div> <Card className="card1"
            body
            color="dark"
            inverse>
            <CardImg
                alt="Card image cap"
                src={props.img}
            />

            <CardBody>
                <CardTitle tag="h5">
                    {props.CardTitle}
                </CardTitle>
                <CardText>
                    {props.CardBody}
                </CardText>
            </CardBody>
        </Card>
        </div>
    )
}

export default Cards