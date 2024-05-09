// src/Chapters/chpt01/chpt01.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chpt01Screen = () => (
  <View style={styles.container}>
    <Text>Chapter 03</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Chpt01Screen;
