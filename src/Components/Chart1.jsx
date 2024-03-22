import React from 'react'
import Chart from 'react-google-charts'
function Chart1({ data }) {
    const data1 = [
        ["Status", "Hours per Day"],
    ];
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            if (key === "name") {
                continue;
            }
            data1.push([key, data[key]])
        }
    }
    console.log(data1);

    return (
        <Chart
            chartType="PieChart"
            data={data1}
            width={"100%"}
            height={"100%"}
        />
    );
}

export default Chart1