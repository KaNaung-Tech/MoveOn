import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from "react-native";
import { router } from "expo-router";

import DetailScreenContainer from "../../components/DetailScreenContainer";
import { Profile_Data } from "../../constants/data";
import { LogoutIcon } from "../../assets/icons";

const { height } = Dimensions.get("window");

const Profile = () => {
  const colorScheme = useColorScheme();

  return (
    <DetailScreenContainer title="Profile">
      <View style={styles.container}>
        <View style={{ flexDirection: "column", gap: 20 }}>
          {/* profile */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image
              source={require("../../assets/images/profile.png")}
              resizeMode="contain"
            />
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: colorScheme === "dark" ? "#fff" : "#000",
                }}
              >
                Hnin Yu Hlaing
              </Text>
              <Text style={styles.email}>hninyuhlaing640@gmail.com</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", gap: 30, marginTop: 30 }}>
            {Profile_Data.map((item) => {
              const { id, title, icon, route } = item;
              return (
                <TouchableOpacity
                  key={id}
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                  onPress={() => router.push(route)}
                >
                  <View
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  >
                    {icon}
                  </View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "500",
                      color: colorScheme === "dark" ? "#fff" : "#000",
                    }}
                  >
                    {title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.logoutBtn}>
            <LogoutIcon width={25} height={25} />

            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DetailScreenContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 10,
    justifyContent: "space-between",
    height: height - 160,
  },
  email: {
    color: "#8B8B8B",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "400",
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#00000080",
  },
});
