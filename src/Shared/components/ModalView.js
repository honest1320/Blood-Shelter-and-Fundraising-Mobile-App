import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { text } from "../../../text";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ModalView = () => {
  const navigation = useNavigation();
  const [complianceModal, setComplianceModal] = useState(true);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={complianceModal}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalHeader}>ONAM FORMU</Text>
                <Text>{text}</Text>

                <TouchableOpacity
                  style={{
                    ...styles.closeButton,
                    backgroundColor: "#e24a57",
                    //backgroundColor: toggleCheckBox ? "#e24a57" : "grey",
                  }}
                  //disabled={!toggleCheckBox}
                  onPress={() => {
                    setComplianceModal(false);
                    navigation.navigate("FormPage3");
                  }}
                >
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.6)",
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#D61B1F",
  },
  closeButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
  },
});
