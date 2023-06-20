import { View, SafeAreaView, StyleSheet } from "react-native";
import StepIndicator from "react-native-step-indicator";
// import FormPage2 from "../../Screens/FormPage2";
// import FormPage from "../../Screens/FormPage";

// const pages = [FormPage, FormPage2];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#fe7013",
};

const StepTopIndicator = ({ position }) => {
  //const [currentPage, setCurrentPage] = useState(0);

  // const onStepPress = (position) => {
  //   setCurrentPage(position);
  // };
  return (
    <View>
      <SafeAreaView style={{ backgroundColor: "blue" }} />

      <View>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={position}
          //labels={charities}
          stepCount={3}
          // renderStepIndicator={(position, stepStatus) => {
          //   return (
          //     <View
          //       style={{
          //         margin: 30,
          //         alignItems: "center",
          //       }}
          //     >
          //       {/* <Text style={styles.lblText}>{charities[position].author}</Text>
          //       <Text>{charities[position].title}</Text> */}

          //       <View>{pages[position]}</View>
          //     </View>
          //   );
          // }}
        />
      </View>
    </View>
  );
};

export default StepTopIndicator;

const styles = StyleSheet.create({
  lblContainer: {
    padding: 10,
    paddingLeft: 5,
    borderWidth: 0.5,
    marginTop: 40,
  },
  lblText: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
  },
});
