import React, {Component} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import DailyUpdatesTable from './DailyUpdatesTable';
import DataCharts from './DataCharts';


class COVID_19 extends Component {

    state={dailyUpdateData : []}
    
    componentDidMount(){

        fetch('https://api.covid19india.org/data.json')
            .then(res => res.json())
            .then(data => this.setState({dailyUpdateData : data.cases_time_series}))
            .catch(err => console.log(err))
    }


    render() {

        

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <DataCharts dailyUpdateData={this.state.dailyUpdateData} />
                            
                            <DailyUpdatesTable dailyUpdateData = {this.state.dailyUpdateData}/>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default COVID_19;