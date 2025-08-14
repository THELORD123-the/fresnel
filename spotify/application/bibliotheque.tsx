import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Bibliotheque() {
  const playlists = [
    {
      id: '1',
      title: 'Mes morceaux likés',
      subtitle: 'Playlist • 210 morceaux',
      image: 'https://i.scdn.co/image/ab67706c0000da849dbf81cc3a661b7b07d05d56',
    },
    {
      id: '2',
      title: 'Travail Concentré',
      subtitle: 'Playlist • Spotify',
      image: 'https://i.scdn.co/image/ab67706f000000025aa3b5078a69f17762c2b534',
    },
    {
      id: '3',
      title: 'Chill & Relax',
      subtitle: 'Playlist • Perso',
      image: 'https://i.scdn.co/image/ab67706f000000029905f933bd445bdfc2e7793b',
    },
    // Tu peux ajouter plus de playlists ici
  ];

  const renderItem = ({ item }: { item: typeof playlists[0] }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <Icon name="more-vertical" size={20} color="#aaa" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bibliothèque</Text>
      
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  coverImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 3,
  },
});


