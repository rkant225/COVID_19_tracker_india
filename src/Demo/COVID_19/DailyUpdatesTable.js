import React, {Component} from 'react';
import { Card, Table} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";


class DailyUpdatesTable extends Component {

    getTotalDeathCount(){
        const cases = this.props.dailyUpdateData && this.props.dailyUpdateData.map(data => data['totaldeceased'] );
        return cases[cases.length - 1];
    }

    getTotalConfirmedCases(){
        const cases = this.props.dailyUpdateData && this.props.dailyUpdateData.map(data => data['totalconfirmed'] );
        return cases[cases.length - 1];
    }

    getTotalRecoveredCases(){
        const cases = this.props.dailyUpdateData && this.props.dailyUpdateData.map(data => data['totalrecovered'] );
        return cases[cases.length - 1];
    }
        
    render() {        

        const detailsRow = this.props.dailyUpdateData.map((record, index) => {
            return(
                <tr key={record.date}>
                    <th scope="row">{index}</th>
                    <td>{record.date}</td>
                    <td>{record.dailyconfirmed}</td>
                    <td>{record.totalconfirmed}</td>
                    <td>{record.dailyrecovered}</td>
                    <td>{record.totalrecovered}</td>
                    <td>{record.dailydeceased}</td>
                    <td>{record.totaldeceased}</td>
                </tr>
            );
        })

        return (
            <Aux>
                <Card.Header>
                    <Card.Title as="h3">COVID-19 Daily Updates</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>SNo.</th>
                                <th>Date</th>
                                <th>Confirmed today</th>
                                <th>Confirmed til date = {this.getTotalConfirmedCases()}</th>
                                <th>Recovered today</th>
                                <th>Recovered till date = {this.getTotalRecoveredCases()}</th>
                                <th>Death today</th>
                                <th>Total Death = {this.getTotalDeathCount()}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailsRow}
                        </tbody>
                    </Table>
                </Card.Body>
            </Aux>
        );
    }
}

export default DailyUpdatesTable;