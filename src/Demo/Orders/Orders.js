import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import UserTaskHeader from './OrdersHeadr'
import UserTaskTable from './OrdersDetail';

import * as DB from './DataBase/OrdersDB';

class Orders extends Component {
    
    componentDidMount(){
        console.log(DB.OrderDetails)

        fetch('https://api.covid19india.org/data.json')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <UserTaskHeader orders={DB.Orders}/>
                        <UserTaskTable OrderDetails={DB.OrderDetails}/>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Orders;