import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import StackNavigation from "./src/Navigation/StackNavigation";
import OnBoardingScreen from "./src/Screens/OnBoardingScreen";
import Donations from "./src/Screens/Donations";
import LoginScreen from "./src/Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import Address from "./src/Screens/Address";
import ProfileScreen from "./src/Screens/ProfileScreen";
import MapComponent from "./src/Screens/MapComponent";
import Success from "./src/Screens/Success";
import Payment from "./src/Screens/Payment";
import { StripeProvider } from "@stripe/stripe-react-native";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import FormPage from "./src/Screens/FormPage";
import StepTopIndicator from "./src/Shared/components/StepTopIndicator";
import FormPage2 from "./src/Screens/FormPage2";
import FormPage3 from "./src/Screens/FormPage3";
import ShelterModal from "./src/Shared/components/ShelterModal";
import FindDonors from "./src/Screens/FindDonors";
import HomeScreen from "./src/Screens/Home/HomeScreen";
import Shelters from "./src/Screens/Shelters";
import Appointments from "./src/Screens/Appointments";

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <StatusBar backgroundColor="white" />
        <View style={styles.main}>
          {/* <Donations /> */}
          {/* <OnBoardingScreen /> */}

          <StripeProvider publishableKey="pk_test_51MC0UUHz4zy12I5lQsF1KVeIvg0pgHOEZtKdns0A1XjwGaeycrV3SgBuPFJ6zjwkVfNGdcUCzKOrKfcGTFMUT5XN00PD1uK5Wa">
            <NavigationContainer>
              {/* <LoginScreen /> */}
              {/* <Payment /> */}
              <StackNavigation />
              {/* <Appointments /> */}
              {/* <Shelters /> */}
              {/* <HomeScreen /> */}
              {/* <ShelterModal /> */}
              {/* <FormPage /> */}
              {/* <StepTopIndicator /> */}
              {/* <SignUpScreen /> */}
            </NavigationContainer>
          </StripeProvider>
        </View>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
  },
});
