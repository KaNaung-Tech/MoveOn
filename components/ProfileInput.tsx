import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

interface Props {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isPassword?: boolean;
}

const ProfileInput = ({ title, value, setValue, isPassword }: Props) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ rowGap: 10 }}>
      <Text
        style={[
          styles.title,
          {
            color: colorScheme === "dark" ? "#B3B6C4" : "#242426",
          },
        ]}
      >
        {title}
      </Text>
      <View style={{ position: "relative" }}>
        <TextInput
          secureTextEntry={isPassword}
          placeholder="John"
          placeholderTextColor="#575F6E"
          defaultValue={value}
          style={[
            styles.textInput,
            {
              borderColor: colorScheme === "dark" ? "#fff" : "#E2E4E5",
              color: colorScheme === "dark" ? "#fff" : "#242426",
            },
          ]}
          onChangeText={(e) => setValue(e)}
        />
        <TouchableOpacity style={styles.editIcon} onPress={() => {}}>
          <Feather
            name="edit-2"
            size={22}
            color={colorScheme === "dark" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "400",
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 10,
  },
  editIcon: { position: "absolute", right: 10, top: 0 },
});
