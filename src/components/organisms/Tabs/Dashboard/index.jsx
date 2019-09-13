//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { 
  MDBRow,
  MDBCol
} from 'mdbreact';

//> Libraries
// chart.js
import { Chart, Line } from 'react-chartjs-2';
// chart.js zoom plugin
import zoom from 'chartjs-plugin-zoom';

//> Components
// Create Record dialog (modal)
import CreateRecordDialog from '../../../pages/Dashboard/createRecordDialog';

function generateRandom(amount) {
  //** Amount = weeks */
  let i;
  let data = [];
  for (i = 0; i < amount; i++) { 
    data.push(Math.floor(Math.random() * 11));
  }
  return data;
}

function generateRandomFeeling(amount) {
  //** Amount = weeks */
  let i;
  let data = [];
  for (i = 0; i < amount; i++) { 
    data.push(Math.floor(Math.random() * 10) - 4);
  }
  return data;
}

function generateRandomLabels(amount){
  let i;
  let labels = [];
  for (i = 0; i < amount; i++) { 
    labels.push("Week "+i);
  }
  return labels;
}

//** Score Chart data */
const chart_score = {
  labels: generateRandomLabels(30),
  datasets: [
    {
      label: 'Sleep (hours)',
      fill: true,
      backgroundColor: "rgba(54, 162, 235,.1)",
      borderColor: "rgba(54, 162, 235, .4)",
      data: generateRandom(30),
    }, {
      label: 'Food quantity',
      fill: false,
      backgroundColor: "rgba(75, 192, 192,.1)",
      borderColor: "rgba(75, 192, 192,.4)",
      data: generateRandom(30),
    }, {
      label: 'Food quality',
      fill: false,
      backgroundColor: "rgba(75, 192, 192,.1)",
      borderColor: "rgba(75, 192, 192,.7)",
      borderDash: [5, 5],
      data: generateRandom(30),
    }, {
      label: 'Average feeling',
      backgroundColor: "rgba(255, 99, 132, .4)",
      borderColor: "rgba(255, 99, 132, .6)",
      data: generateRandomFeeling(30),
      fill: true,
    }, {
      label: 'Work (hours)',
      backgroundColor: "rgba(255, 187, 51, .1)",
      borderColor: "rgba(255, 187, 51, .4)",
      data: generateRandom(30),
      fill: true,
    }, {
      label: 'School (hours)',
      backgroundColor: "rgba(0, 0, 0, .1)",
      borderColor: "rgba(0, 0, 0, .2)",
      data: generateRandom(30),
      fill: true,
    }
  ]
};

const chart_score_options = {
  responsive: true,
  title: {
    display: true,
    text: 'Overall view'
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Value'
      },
      ticks: {
        suggestedMin: -4,
        suggestedMax: 10
      }
    }]
  },
  pan: {
			enabled: true,
      speed: 0.7,
      // Direction
			mode: 'x',
			rangeMin: {
				x: null,
				y: null
			},
			rangeMax: {
				x: null,
				y: null
			},
		},
  zoom:{
			enabled: true,
			drag: false,
      // Direction
			mode: 'x',
      step: 10,
			sensitivity: 0.5,
      speed: 0.9 // would be a percentage
  }
}

class TabDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }

    componentWillMount(){
        Chart.plugins.register(zoom);
    }

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
          this.setState({
            activeItem: tab
          });
        }
      }
    
      togglePills = tab => e => {
        if (this.state.activePills !== tab) {
          this.setState({
            activeItemPills: tab
          });
        }
      }
    
      toggleVerticalPills = tab => e => {
        if (this.state.activeItem3 !== tab) {
          this.setState({
            activeItemVerticalPills: tab
          });
        }
      }
      toggleClassicTabs1 = tab => e => {
        if (this.state.activeItemClassicTabs1 !== tab) {
          this.setState({
            activeItemClassicTabs1: tab
          });
        }
      }
    
      toggleClassicTabs2 = tab => e => {
        if (this.state.activeItemClassicTabs2 !== tab) {
          this.setState({
            activeItemClassicTabs2: tab
          });
        }
      }
    
      toggleOuterTabs = tab => e => {
        if (this.state.activeItemOuterTabs2 !== tab) {
          this.setState({
            activeItemOuterTabs: tab
          });
        }
      }
    
      toggleInnerPills = tab => e => {
        if (this.state.activeItemInnerPills !== tab) {
          this.setState({
            activeItemInnerPills: tab
          });
        }
      }
    
    // End: Generic functions

    render() {
        return (
          <div className="text-center">
            <CreateRecordDialog/>
          
            <MDBRow className="text-center tab-dashboard">
              <MDBCol md="12" className="score-board">
                  <Line data={chart_score} options={chart_score_options} />
              </MDBCol>
              <MDBCol md="6">
                  
              </MDBCol>
              <MDBCol md="4" className="py-4">
                  
              </MDBCol>
              <MDBCol md="4" className="py-4">
                  
              </MDBCol>
              <MDBCol md="4" className="py-4">
                 
              </MDBCol>
            </MDBRow>
          </div>
        );
    }
}

export default TabDashboard;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
