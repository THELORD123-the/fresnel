import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface FavoritsProps {
  imageUri: string;
  title: string;
  size?: number;
}

const Favorits: React.FC<FavoritsProps> = ({
  imageUri,
  title,
  size = 90,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
      />
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
    width: 100,
  },
  image: {
    backgroundColor: '#444',
  },
  title: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default Favorits;
