import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'

class BarChartExample extends React.PureComponent {
    render() {
        const fill = 'rgb(134, 65, 244)'
        const data = [50, 10, 40, 95, 15, 22, 55, 88, 5, 12, 36, 48]

        return (
            <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
        )
    }
}

export default BarChartExample;
