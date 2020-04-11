import React, {Component} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Chart from "react-apexcharts";
import Aux from "../../hoc/_Aux";


class DataChart extends Component {

        
    render() {        

        const chartData = {
            type: 'area', height: 100,
            options: { chart: { sparkline: { enabled: true } },
                dataLabels: { enabled: false },
                colors: [this.props.strokeColor],
                stroke: { curve: 'smooth', width: 2, },
                tooltip: { fixed: { enabled: false },
                    x: { show: false }, 
                    y: { title: { formatter: (seriesName) => 'Ticket ' } },
                    marker: { show: false }
                }
            },
            series: [{
                data: this.props.series
            }]
        }
        

        return (
            <Aux>
                <Col md={2} xl={4}>
                    <Card>
                        <Card.Body className='pb-0'>
                            <h3 className="m-0">Today : {this.props.series[this.props.series.length -1]}</h3>
                        </Card.Body>
                        <Card.Body className='p-0'>
                            <Chart {...chartData} />
                        </Card.Body>
                        <Card.Footer className={`${this.props.colorClass} text-white`}>
                            <Row className='text-center'>
                                <h3 className="m-0 text-white">{this.props.label}</h3>                                
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                    
            </Aux>
        );
    }
}

export default DataChart;