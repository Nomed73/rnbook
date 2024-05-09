// File: src/HomeScreen.tsx
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Chpt01: undefined;
  Chpt02: undefined
  Chpt03: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type ChapterItemData = {
  id: string;
  title: string;
  screen: keyof RootStackParamList;
};

type ChapterItemProps = {
  item: ChapterItemData;
  navigate: HomeScreenNavigationProp['navigate'];
};

const chapters: ChapterItemData[] = [
  { id: '1', title: 'Chapter 1', screen: 'Chpt01' },
  { id: '2', title: 'Chapter 2', screen: 'Chpt02' },
  { id: '3', title: 'Chapter 3', screen: 'Chpt03' },
];

const HomeScreen: React.FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  const ChapterItem: React.FC<ChapterItemProps> = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
        renderItem={({ item }) => <ChapterItem item={item} navigate={navigation.navigate} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
