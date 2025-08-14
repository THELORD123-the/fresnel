import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const BAR_WIDTH = width * 0.9;
const BAR_HEIGTH = height * 0.06;

interface PlaysProps {
  title: string;
  artist: string;
  progress: number; // entre 0 et 1
}

const Plays: React.FC<PlaysProps> = ({ title, artist, progress }) => {
  const progressWidth = progress * BAR_WIDTH;
 const progressHeigth = progress * BAR_HEIGTH;
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
      </View>
      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: progressWidth }]} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  position: 'absolute',
  bottom: 50, // réduit l'espace entre la barre et le bas de l'écran
  alignSelf: 'center',
  width: BAR_WIDTH,
  height: BAR_HEIGTH,
  backgroundColor: '#222',
  borderRadius: 4,
  paddingVertical: 10, // réduit la hauteur du bloc
  paddingHorizontal: 12,
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 3,
},

  info: {
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  artist: {
    color: '#aaa',
    fontSize: 10,
    marginTop: 2,
  },
  progressBackground: {
    height: 1,
    backgroundColor: '#555',
    borderRadius: 3,
  },
  progressFill: {
    height: 5,
    backgroundColor: '#1DB954',
    borderRadius: 3,
    bottom:6
  },
});

export default Plays;
