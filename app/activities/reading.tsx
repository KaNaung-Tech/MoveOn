import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import DetailScreenContainer from "@/components/DetailScreenContainer";
import { Octicons } from "@expo/vector-icons";

import QuoteCard from "@/components/QuoteCard";
import { Quotes } from "@/constants/quotes";
import { generateRandomQuotes } from "@/utlis/generateQuotes";

const Categories = [
  {
    id: 1,
    title: "Today",
  },
  {
    id: 2,
    title: "Positive",
  },
  {
    id: 3,
    title: "Selflove",
  },
  {
    id: 4,
    title: "Moveon",
  },
];

const reading = () => {
  const [selected, setSelected] = useState("Today");
  const [readmore, setReadmore] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const colorSchema = useColorScheme();

  const handleNextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  useEffect(() => {
    if (selected === "Today") {
      const randomQuotes = generateRandomQuotes(Quotes, "Today");
      setQuotes(randomQuotes);
    }
  }, [selected]);

  const handleClickCategory = (title: string) => {
    setSelected(title);
    const randomQuotes = generateRandomQuotes(Quotes, title);
    setQuotes(randomQuotes);
  };

  return (
    <DetailScreenContainer image="dd">
      <View style={{ marginTop: 30 }}>
        {/* title */}
        <Text
          style={{
            fontFamily: "PoppinsSemiBold",
            fontSize: 22,
            color: colorSchema === "dark" ? "#fff" : "#000",
          }}
        >
          Quotes
        </Text>

        {/* categories */}
        <View style={styles.categoryContainer}>
          {Categories.map((item) => {
            const { id, title } = item;
            return (
              <TouchableOpacity
                key={id}
                onPress={() => handleClickCategory(title)}
                style={[
                  styles.category,
                  {
                    backgroundColor:
                      selected === title
                        ? "#212330"
                        : colorSchema === "dark"
                        ? "#171913"
                        : "#FEFEFE",
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily:
                      selected === title ? "PoppinsSemiBold" : "PoppinsMedium",
                    fontSize: 14,
                    color:
                      selected === title
                        ? "#fff"
                        : colorSchema === "dark"
                        ? "#fff"
                        : "#000",
                  }}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* card container */}
        <View style={styles.cardContainer}>
          {quotes.map((item, index) => {
            return (
              <QuoteCard
                length={quotes.length}
                key={index + item.author}
                index={index}
                readmore={readmore}
                setReadmore={setReadmore}
                item={item}
                currentIndex={currentIndex}
              />
            );
          })}

          {/* next button */}
          {!readmore && (
            <TouchableOpacity style={styles.nextBtn} onPress={handleNextQuote}>
              <Octicons name="arrow-right" size={30} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </DetailScreenContainer>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: 78,
    height: 35,
    alignItems: "center",
  },
  cardContainer: {
    marginTop: 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  nextBtn: {
    width: 50,
    height: 50,
    backgroundColor: "#202020",
    borderRadius: 40,
    alignItems: "center",
    position: "absolute",
    right: -10,
    top: 100,
    justifyContent: "center",
    zIndex: 1,
  },
});

export default reading;
