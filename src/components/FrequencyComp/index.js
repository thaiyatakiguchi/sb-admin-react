import React, { Component } from 'react';
// import { PieCharts, Pie, Sector, ResponsiveContainer } from '../../vendor/recharts';
import {
    LineChart, Tooltip,
    Line, XAxis, YAxis, Area,
    CartesianGrid, AreaChart, Bar, BarChart,
    ResponsiveContainer } from '../../vendor/recharts';
import Sector from '../../vendor/recharts/lib/shape/Sector';
import getConfidentialValue from '../../services/frequencyService';

// import BarChart from '../../vendor/recharts/lib/chart/BarChart';
// import ResponsiveContainer from '../../vendor/recharts/lib/component/ResponsiveContainer';
const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

class BarComp extends Component {
  static propTypes ={
    data: React.PropTypes.array,
    innerRadius: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    outerRadius: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    color: React.PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    // this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
      
    });
  }

  componentDidMount(){
    console.log('component did mount')
    getConfidentialValue();
  }
  // handleClick(e){
  //   this.setState({activeIndex: e,});
  // }

  render() {
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} onClick={Tooltip}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="" stackId="1" fill="#8884d8" />
                <Bar dataKey="uv" stackId="1" fill="#82ca9d" />
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
  }

}


export default BarComp;
