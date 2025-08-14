import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface SongCardProps {
  title: string;
  imageUri: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

const SongCard: React.FC<SongCardProps> = ({
  title,
  imageUri,
  width = 300,
  height = 90,
  backgroundColor = '#1e1e1e',
}) => {
  return (
    <View style={[styles.container, { width, height, backgroundColor }]}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SongCard;
