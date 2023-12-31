import React from 'react';
import { Dimensions, View} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Line } from 'react-native-svg';

export const grafico = () => {
    <View>
    <Text>Bezier Line Chart</Text>
    <LineChart data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                ]
            }
        ]
    }}
    width={Dimensions.get("window").width}
    height={220}
    yAxisLabel={$}
    yAxisSuffix="k"
    yAxisInterval={1}
    chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    }}
    bezier
    style={{
        marginVertical: 8,
        borderRadius: 16
    }}
    />
</View>
}