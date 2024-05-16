import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import DetailScreenContainer from "@/components/DetailScreenContainer";
import ProfileInput from "@/components/ProfileInput";

const { height, width } = Dimensions.get("window");

const Profile = () => {
  const colorScheme = useColorScheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
  };

  return (
    <DetailScreenContainer title="My Profile">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ flexDirection: "column", gap: 20, height: height }}>
              <View style={{ alignSelf: "center" }}>
                <Image
                  source={require("../../assets/images/profile.png")}
                  resizeMode="contain"
                  width={96}
                  height={96}
                />
              </View>

              <View style={{ marginVertical: 20, rowGap: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: colorScheme === "dark" ? "#fff" : "#000",
                  }}
                >
                  Personal data
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "300",
                    color: colorScheme === "dark" ? "#B3B6C4" : "#575F6E",
                  }}
                >
                  Basic information for your profile
                </Text>
              </View>

              {/* name */}
              <ProfileInput
                title="Full Name"
                value="Hnin Yu Hlaing"
                setValue={() => {}}
              />

              {/* email */}
              <ProfileInput
                title="Email"
                value="hninyuhlaing640@gmail.com"
                setValue={() => {}}
              />

              {/* password */}
              <ProfileInput
                title="Password"
                value="********"
                setValue={() => {}}
                isPassword
              />

              {/* DOB */}
              <View style={{ rowGap: 10 }}>
                <Text
                  style={[
                    styles.title,
                    {
                      color: colorScheme === "dark" ? "#B3B6C4" : "#242426",
                    },
                  ]}
                >
                  Date of Birth
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={() => showDatePicker()}
                    style={[
                      styles.dobBtn,
                      {
                        borderColor:
                          colorScheme === "dark" ? "#fff" : "#E2E4E5",
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: colorScheme === "dark" ? "#fff" : "#242426",
                        fontSize: 15,
                      }}
                    >
                      15.12.1999
                    </Text>

                    <AntDesign
                      name="caretdown"
                      size={12}
                      color={colorScheme === "dark" ? "#fff" : "#E2E4E5"}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[
                  styles.saveBtn,
                  {
                    backgroundColor:
                      colorScheme === "dark" ? "#4361EE" : "#202020",
                  },
                ]}
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>Save</Text>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </DetailScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
  },
  dobBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  saveBtn: {
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: width / 4.5,
    alignSelf: "center",
  },
});

export default Profile;
