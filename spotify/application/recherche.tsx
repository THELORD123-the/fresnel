import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, } from 'react-native';
 // ou autre pack d'icônes
import style from '../composant/style';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function Recherche() {
  return (
    
    <View style={style.contai}>
      <ScrollView>
      <View>
      <View style={{flexDirection:'row', gap:10, marginLeft:10 , top:10}}>
        <View style={style.avatar}>
          <Text style={{color: 'white'}}>Y</Text>
        </View>
        <Text style={style.title}>Rechercher</Text>
        <View style={{marginLeft:170}}>
        <TouchableOpacity>
          <MaterialIcons name="photo-camera" color="white" size={30}  style={{marginLeft:-10}}/>
        </TouchableOpacity>
        </View>
      </View>

      {/* Barre de recherche */}
      <View style={style.searchBar}>
        <FontAwesome name="search" color="#000" size={24} />
        <TextInput
          placeholder="Que souhaitez-vous écouter ?"
          placeholderTextColor="black"
          style={style.searchInput}
        />
      </View>
       <Text style={style.sectionTitle}>Commencer la navigation</Text>
       <View style={style.grid}>
          <TouchableOpacity style={[style.tiles, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileTexts}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tiles, {backgroundColor: '#009688'}]}>
            <Text style={style.tileTexts}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tiles, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileTexts}>Livres audios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tiles, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileTexts}>Evenement lives</Text>
          </TouchableOpacity>
        </View>
      {/* Scroll pour le contenu */}
        {/* Section Découvrez */}
        <Text style={style.sectionTitle}>Découvrez de nouveaux horizons</Text>
          {/* Ici tu mettras tes cartes */}
          <View style={{gap:10, flexDirection:'row', marginLeft:30,top:70,}}>
          <View style={{width:100, height:160, backgroundColor:'green',borderRadius:10,justifyContent:'center'}}>
            <Text style={{color:'white' ,top:40}}>#rap</Text>
            <Text style={{color:'white',top:40}}>marseillais</Text>
          </View>
          <View style={{width:100, height:160, backgroundColor:'green',borderRadius:10,justifyContent:'center'}}>
            {/* Exemple d'image en background possible */}
            <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
          style={{width:100, height:160, backgroundColor:'green',borderRadius:10,justifyContent:'center',top:9}}
          />
            <Text style={{color:'white',bottom:40}}>#afrobeat</Text>
          </View>
          <View style={{width:100, height:160, backgroundColor:'green',borderRadius:10,justifyContent:'center'}}>
            <Text  style={{color:'white',top:50}}>#hip-hop</Text>
            <Text style={{color:'white',top:50}}>belge</Text>
          </View>
          </View>
        {/* Section Parcourir tout */}
        <Text style={{fontSize:20,color:'white', top:70, marginLeft:20,fontWeight:'bold'}}>Parcourir tout</Text>
        <View>
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>

      
      </View> 
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>
         <View>
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>

      
      </View> 
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>
         <View>
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>

      
      </View> 
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>
         <View>
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>

      
      </View> 
        <View style={style.grid}>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#E91E63'}]}>
            <Text style={style.tileText}>Musique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#009688'}]}>
            <Text style={style.tileText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#673AB7'}]}>
            <Text style={style.tileText}>Événements live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tile, {backgroundColor: '#9C27B0'}]}>
            <Text style={style.tileText}>Conçu spé-  cialement pour vous</Text>
          </TouchableOpacity>
        </View>
        </View>
         {/* Mini player en bas */}

    </ScrollView>
    <View style={style.miniPlayer}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }}
          style={style.albumArt}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={style.songTitle}>CIEL</Text>
          <Text style={style.artistName}>Himra</Text>
        </View>
        <TouchableOpacity>
          <Icon name="play" size={28} color="white" />
        </TouchableOpacity>
    </View>
    </View>
  );
}
{/* Barre de navigation */}
      {/* <View style={style.bottomNav}>
        <TouchableOpacity style={style.navItem}>
          <Icon name="home-outline" size={28} color="white" />
          <Text style={style.navText}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navItem}>
          <Icon name="search-outline" size={28} color="white" />
          <Text style={style.navText}>Recherche</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navItem}>
          <Icon name="library-outline" size={28} color="white" />
          <Text style={style.navText}>Bibliothèque</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navItem}>
          <Icon name="add-circle-outline" size={28} color="white" />
          <Text style={style.navText}>Créer</Text>
        </TouchableOpacity>
      </View> */}



