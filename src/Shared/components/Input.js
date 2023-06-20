import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error ? "red" : isFocused ? `#00008b` : `#d3d3d3`,
            alignItems: "center",
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ color: `#00008b`, fontSize: 22, marginRight: 10 }}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: `#00008b`, flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: `#00008b`, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: `#ff0000`, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: `#808080`,
  },
  inputContainer: {
    height: 55,
    backgroundColor: `#d3d3d3`,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;
