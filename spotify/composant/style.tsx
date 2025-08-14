import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  conteneur:{
    flex:1,
    backgroundColor:'#ffffff',
    padding:20,
  },
  contain: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containe: {
    flex: 1,
    backgroundColor: '#000', // 👈 noir complet
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 1,
    marginBottom: 10,
    top:10,
    padding:0,
    alignItems:'center'
  },
  row: {
    flexDirection: 'row', // 👈 aligne horizontalement
    padding: 10,
    gap: 10, // ou margin dans chaque item si `gap` ne marche pas
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    bottom:35
  },
  header: {
    gap:10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
     paddingHorizontal: 16,
     flexDirection:'row'
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    top:10,
    borderRadius: 12,
    marginBottom: 10,
    justifyContent:'center',
    marginLeft:15,
    gap:5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  titre: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  circleImage: {
    width: 150,
    height: 150,
    borderRadius: 3, // moitié de la largeur pour faire un cercle
    borderWidth: 2, // optionnel : bordure autour du cercle
    // borderColor: '#1DB954', // couleur de la bordure
    marginLeft:15,
  },
  circleImag: {
    width: 150,
    height: 150,
    borderRadius: 75, // moitié de la largeur pour faire un cercle
    borderWidth: 2, // optionnel : bordure autour du cercle
    // borderColor: '#1DB954', // couleur de la bordure
    marginLeft:15
  },
  contai: { flex: 1, backgroundColor: '#121212', paddingTop: 50, top:0},
  headers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,

  },
  avatar: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titles: { fontSize: 22, color: 'white', fontWeight: 'bold' },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 50,
    top:40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 19,
    color: 'white',
    fontWeight:'bold',
    fontSize:15
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
    color: 'white',
    marginVertical: 10,
    top:70,
  },
  cards: {
    backgroundColor: '#1A1A1A',
    width: 120,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    padding: 10,
  },
  cardTag: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  cardTitle: { color: 'white', fontSize: 14 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  top:80
  },
  tile: {
    width: '48%',
    height: 90,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  tileText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    bottom:30
  },
  miniPlayer: {
    position: 'absolute',
    top: 650,
    left: 10,
    right: 10,
    height: 60,
    backgroundColor: '#4E2C1F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius:10,
    zIndex:1
  },
  albumArt: {
    width: 40,
    height: 40,
  },
  songTitle: { color: 'white', fontWeight: 'bold' },
  artistName: { color: '#ccc' },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: { alignItems: 'center' },
  navText: { color: 'white', fontSize: 12, marginTop: 3 },
   tiles: {
    width: '48%',
    height: 60,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  tileTexts: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    bottom:15
  },
});
