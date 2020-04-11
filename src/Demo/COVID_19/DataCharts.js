import React, {Component} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Chart from "react-apexcharts";
import DataChart from './DataChart';
import Aux from "../../hoc/_Aux";


class DataCharts extends Component {

        
    render() {        

       const labels = ["+ve per day", "Recovery per day", "Death per day"];
       const types = ['dailyconfirmed','dailyrecovered' ,'dailydeceased'];
       const colorClasses = ['bg-primary', 'bg-success', 'bg-danger']
       const strokeColors = ['#0000ff', '#00ff00', '#ff0000']

       const charts = [];

       labels.forEach((elem,index)=>{
        charts.push(<DataChart key={strokeColors[index]} series={this.props.dailyUpdateData && this.props.dailyUpdateData.map(data => data[types[index]] )} label={labels[index]} colorClass={colorClasses[index]} strokeColor={strokeColors[index]}/>)
       })

        

        return (
            <Aux>
                <Row>
                    {charts}
                </Row>
            </Aux>
        );
    }
}

export default DataCharts;