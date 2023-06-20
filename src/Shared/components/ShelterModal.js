import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Animated,
  Button,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
const { width, height } = Dimensions.get("window");

const ShelterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        toration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height, height - 680],
  });

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",

              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            height: "100%",
            top: modalY,
            padding: 10,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "white",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: "black",
              }}
            >
              Yeni Randevu
            </Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default ShelterModal;
