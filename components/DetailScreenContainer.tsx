import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { ReactNode } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";

interface Props {
  title?: string;
  image?: string;
  children: ReactNode;
}

const DetailScreenContainer = ({ title, children, image }: Props) => {
  const colorSchema = useColorScheme();

  return (
    <SafeAreaView
      style={{
        marginTop: 20,
        backgroundColor: colorSchema === "dark" ? "#171913" : "#FEFEFE",
        flex: 1,
      }}
    >
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign
              name="arrowleft"
              size={25}
              color={colorSchema === "dark" ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: colorSchema === "dark" ? "#fff" : "#000",
            }}
          >
            {title ? title : ""}
          </Text>

          {image && (
            <Image
              resizeMode="contain"
              source={require("@/assets/images/girl.png")}
            />
          )}
        </View>

        {children}
      </View>
    </SafeAreaView>
  );
};

export default DetailScreenContainer;

const styles = StyleSheet.create({});
