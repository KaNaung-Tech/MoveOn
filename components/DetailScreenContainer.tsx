import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { ReactNode } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

interface Props {
  title?: string;
  children: ReactNode;
}

const DetailScreenContainer = ({ title, children }: Props) => {
  return (
    <SafeAreaView style={{ marginTop: 20, marginHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={25} color={"white"} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
          {title}
        </Text>
        <Text></Text>
      </View>

      {children}
    </SafeAreaView>
  );
};

export default DetailScreenContainer;

const styles = StyleSheet.create({});
