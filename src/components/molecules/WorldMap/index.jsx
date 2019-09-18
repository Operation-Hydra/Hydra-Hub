//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Map
// Basic libs
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
// Data
import mapSelectData from './world-50m.json';
// Settings
const wrapperStyles = {
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
}

const markers = [
    { name: "Enemy 1", coordinates: [13.8506, 46.6086] },
]

const cityScale = scaleLinear()
    .domain([0,37843000])
    .range([1,25])

class BasicMap extends React.Component {
    render() {
        return (
        <div style={wrapperStyles}>
            <ComposableMap
            projectionConfig={{ scale: 205 }}
            width={980}
            height={551}
            style={{
                width: "100%",
                height: "auto",
            }}
            >
            <ZoomableGroup center={[0,20]} disablePanning>
                <Geographies geography={mapSelectData}>
                {(geographies, projection) =>
                    geographies.map((geography, i) =>
                    geography.id !== "ATA" && (
                        <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                            default: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                            },
                            hover: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                            },
                            pressed: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                            },
                        }}
                        />
                ))}
                </Geographies>
                <Markers>
                {markers.map((marker, i) => (
                    <Marker
                    key={i}
                    marker={marker}
                    style={{
                        default: { stroke: "red" },
                        hover: { stroke: "red" },
                        pressed: { stroke: "red" },
                    }}
                    >
                    <g transform="translate(-12, -24)">
                        <path
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        strokeLinejoin="miter"
                        d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                        />
                        <circle
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        strokeLinejoin="miter"
                        cx="12"
                        cy="9"
                        r="3"
                        />
                    </g>
                    </Marker>
                ))}
                </Markers>
            </ZoomableGroup>
            </ComposableMap>
        </div>
        )
    }
}

export default BasicMap