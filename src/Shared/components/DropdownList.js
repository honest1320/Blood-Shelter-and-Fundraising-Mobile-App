import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { hastaneler } from "../../../mock_cities_blood";
import { useDispatch } from "react-redux";
import { setBloodGrp, setCity, setPlace } from "../../Redux/appointmentSlice";

const DropdownList = ({ bloodGroups, cities }) => {
  const [blood, setBlood] = useState(null);
  const [mji, setMji] = useState("Sakarya");
  const [hospital, setHospital] = useState(null);
  const [hospDataArr, setHospDataArr] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();

  //const handleState = (myProp) => {
  useEffect(() => {
    let jibu = hastaneler.find((item) => item.city === mji);

    let hospArray = [];
    hospArray = jibu.hospitals;
    setHospDataArr(jibu.hospitals);
    console.log(hospDataArr);

    //setHospDataArr((prev) => ({ ...prev, hospArray }));
  }, [mji]);
  //};

  const renderLabelBlood = () => {
    if (blood || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "black" }]}>
          Kan Grubu
        </Text>
      );
    }
    return null;
  };

  const renderLabelCities = () => {
    if (mji || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>City</Text>
      );
    }
    return null;
  };

  const renderLabelHospitals = () => {
    if (hospital || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>Nerede</Text>
      );
    }
    return null;
  };

  if (bloodGroups) {
    return (
      <View style={styles.container}>
        {renderLabelBlood()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={bloodGroups}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Blood Group" : "..."}
          value={blood}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setBlood(item.value);
            dispatch(setBloodGrp(item.value));
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Fontisto
              style={styles.icon}
              color={isFocus ? "#D61B1F" : "black"}
              name="blood-drop"
              size={20}
            />
          )}
        />
      </View>
    );
  }

  if (cities) {
    return (
      <View style={styles.container}>
        {renderLabelCities()}

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cities}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "City" : "..."}
          value={mji}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setMji(item.value);
            dispatch(setCity(item.value));

            //handleState(item.value);

            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <FontAwesome5
              style={styles.icon}
              color={isFocus ? "#D61B1F" : "black"}
              name="city"
              size={20}
            />
          )}
        />
      </View>
    );
  }
  if (hastaneler) {
    return (
      <View style={styles.container}>
        {renderLabelHospitals()}

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={hospDataArr}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Hospital" : "..."}
          value={hospital}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setHospital(item.value);
            dispatch(setPlace(item.value));
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <FontAwesome5
              style={styles.icon}
              color={isFocus ? "#D61B1F" : "black"}
              name="city"
              size={20}
            />
          )}
        />
      </View>
    );
  }
};

export default DropdownList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 8,
  },
  dropdown: {
    height: 50,
    width: 220,
    fontSize: 14,
    fontWeight: "500",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "black",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    fontWeight: "bold",
    left: 22,
    //top: 4,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
