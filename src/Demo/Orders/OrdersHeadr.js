import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Card} from "react-bootstrap";


class OrdersHeadr extends Component {

    getClassName = (status) => {
        switch(status){
            case "rejected":
            case "approved":
                return "text-primary";
            case "pending review":
                return "text-danger";
            case "completed":
                return "text-success";
        }
    }

    render() {
        const orderCards =  Object.keys(this.props.orders.assigned).map(orderKeys => {
            return (
                <Col md={2} xs={6} className="border-right">
                    <h3>{this.props.orders.assigned[orderKeys]}</h3>
                    <h6 className={this.getClassName(orderKeys)}>{orderKeys}</h6>
                    <span className="">Assigned to me: {this.props.orders.assigned[orderKeys] -1}</span>
                </Col> 
            );
        })



        return (
            <Card>                           
                <Card.Header>
                    <h5>Order Summary</h5>
                </Card.Header>

                <Card.Body>
                    <Row>
                        {orderCards}                    
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default OrdersHeadr;