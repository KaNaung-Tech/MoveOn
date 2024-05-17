import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

import DetailScreenContainer from "@/components/DetailScreenContainer";

const AboutPage = () => {
  const colorSchema = useColorScheme();

  return (
    <DetailScreenContainer title="About App">
      <View style={{ marginTop: 30, rowGap: 30 }}>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              { color: colorSchema === "dark" ? "#fff" : "#000" },
            ]}
          >
            1. Types data we collect
          </Text>
          <Text
            style={[
              styles.text,
              { color: colorSchema === "dark" ? "#B3B6C4" : "#000" },
            ]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Text>

          <Text
            style={[
              styles.text,
              { color: colorSchema === "dark" ? "#B3B6C4" : "#000" },
            ]}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              { color: colorSchema === "dark" ? "#fff" : "#000" },
            ]}
          >
            2. Use of your personal data
          </Text>
          <Text
            style={[
              styles.text,
              { color: colorSchema === "dark" ? "#B3B6C4" : "#000" },
            ]}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae.
          </Text>

          <Text
            style={[
              styles.text,
              { color: colorSchema === "dark" ? "#B3B6C4" : "#000" },
            ]}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit.
          </Text>
        </View>
      </View>
    </DetailScreenContainer>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  textContainer: {
    rowGap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
  },
});
