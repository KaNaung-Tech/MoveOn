import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OnboardingStep2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MoveOn!</Text>
      <Text style={styles.description}>
        This app helps you move on from past relationships with helpful
        activities and reflections.
      </Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('OnboardingStep2')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default OnboardingStep2;
