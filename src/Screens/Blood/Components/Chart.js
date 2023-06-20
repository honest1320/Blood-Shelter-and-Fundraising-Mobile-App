import { Grid, LineChart } from "react-native-svg-charts";

export default Chart = ({ chart }) => {
  return (
    // <LineChart
    //   yMin={0}
    //   yMax={10}
    //   data={chart}
    //   style={{ flex: 2 }}
    //   svg={{
    //     stroke: "#D61B1F",
    //     strokeWidth: 1.25,
    //   }}
    //   contentInset={{ left: 12, right: 12 }}
    // ></LineChart>

    <LineChart
      yMin={0}
      yMax={10}
      style={{ height: 130 }}
      data={chart}
      svg={{ stroke: "#D61B1F", strokeWidth: 1.25 }}
      contentInset={{ top: 20, bottom: 20 }}
    ></LineChart>
  );
};
