import React from 'react';
import {View, Pressable,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { scale } from '../search/stylessound/responsiveSize';

export default function Bibliotheque() {
  const playlists = [
    {
      id: '1',
      title: 'Mes morceaux likés',
      subtitle: 'Playlist • 210 morceaux',
    },
    {
      id: '2',
      title: 'Travail Concentré',
      subtitle: 'fresnel • Spotify',
    },
    {
      id: '3',
      title: 'Chill & Relax',
      subtitle: 'Playlist • Perso',
    },
    // Tu peux ajouter plus de playlists ici
  ];

  const renderItem = ({ item }: { item: typeof playlists[0] }) => (
    <Pressable style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <Icon name="more-vertical" size={20} color="#aaa" />
    </Pressable>
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
    
    paddingTop: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
     paddingHorizontal: 16,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
     marginLeft:(50),
    alignItems: 'center',
    marginBottom: 20,
  },
  coverImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    // marginRight: 15,
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


