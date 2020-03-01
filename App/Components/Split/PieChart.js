import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartWithCenteredLabels extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount:5886,
                svg: { fill: '#E61EB6' },
            },
            {
                key: 2,
                amount:2434,
                svg: { fill: '#ECAA0D' }
            },
            
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 0 ]}
                        fill={'#fff'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={13}
                        stroke={'#fff'}
                        strokeWidth={0.2}
                    >
                        {data.amount} .GVT
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 280 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                // spacing={-10}
                outerRadius={'100%'}
                innerRadius= {"0%"}
                padAngle={0}
            >
                <Labels/>
            </PieChart>
        )
    }

}

export default PieChartWithCenteredLabels