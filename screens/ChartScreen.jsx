import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { Svg, Rect, Line, G, Text as SVGText } from 'react-native-svg';
import { scaleBand, scaleLinear, scaleTime } from 'd3-scale';
import { timeFormat } from 'd3-time-format';
import { extent } from 'd3-array';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';



const ChartScreen = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coinone.co.kr/public/v2/chart/KRW/BTC?interval=1m');
        const data = await response.json();
        if (data.result === 'success') {
          setChartData(data.chart);
        } else {
          throw new Error(data.error_code || 'Error fetching chart data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onPinchEvent = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setScale(Math.max(1, event.nativeEvent.scale));
    }
  };

  const screenWidth = Dimensions.get('window').width;
  const candleWidth = 10;
  const chartWidth = screenWidth * scale; // Use screenWidth to determine the total width dynamically

  const scaleY = scaleLinear()
    .domain([extent(chartData, d => parseFloat(d.low))[0], extent(chartData, d => parseFloat(d.high))[1]])
    .range([200, 0]);

  const scaleX = scaleTime() // Use scaleTime for the x-axis
    .domain(extent(chartData, d => new Date(d.timestamp)))
    .range([0, chartWidth]);

  const dateFormat = timeFormat("%Y-%m-%d %H:%M");

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <PinchGestureHandler onGestureEvent={onPinchEvent}>
      <ScrollView horizontal style={styles.container}>
      <Svg width={chartWidth} height={300}>
  {chartData.map((candle, index) => (
    <G key={index} x={scaleX(new Date(candle.timestamp)) - candleWidth / 2}>
      <Rect
        y={scaleY(Math.max(parseFloat(candle.open), parseFloat(candle.close)))}
        width={candleWidth}
        height={Math.abs(scaleY(parseFloat(candle.open)) - scaleY(parseFloat(candle.close)))}
        fill={parseFloat(candle.open) > parseFloat(candle.close) ? '#FF0000' : '#00FF00'}
      />
      <Line
        x1={candleWidth / 2}
        y1={scaleY(parseFloat(candle.high))}
        x2={candleWidth / 2}
        y2={scaleY(parseFloat(candle.low))}
        stroke={'#000'}
      />
    </G>
  ))}
</Svg>





      </ScrollView>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default ChartScreen;
