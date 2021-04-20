import React , { useState } from "react";
import { StyleSheet, View, Text, StatusBar,FlatList,TouchableOpacity } from "react-native";


export default function Compare({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const goToSearch = () => {
    navigation.navigate("Search");
  };

  const [player, setplayer] = useState([
    {name: 'Select Player', key: '1'},
    {name: 'Select Player', key: '2'},
  ]
  )

  const [playerDetails, setPlayerDetails] = useState([
    {detail: 'No Players', key: '1'},
    {detail: 'No Players', key: '2'},
  ])

  const [playerImage, setPlayerImage] = useState([
    {image: 'Player Image', key: '1'},
    {image: 'Player Image', key: '2'},
  ])

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
        <Text style = {styles.button}>Home</Text>
      </TouchableOpacity>

      <View style = {styles.textContainer}>
        <Text style = {styles.text}>Compare</Text>
      </View>

      <View>
          <FlatList
              data={player}
              numColumns={2}
              renderItem = {({item}) =>{
                return(
                  <View style = {styles.listContainer}>
                    <TouchableOpacity style = {styles.itemContainer} onPress = {goToSearch}>
                      <Text style = {styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }
              
              }
          />

          <FlatList
              data={playerImage}
              numColumns={2}
              renderItem = {({item}) =>{
                return(
                  <View style = {styles.listContainerImage}>
                      <View style = {styles.imageContainer}>
                        <Text style = {styles.item}>{item.image}</Text>
                      </View>
                  </View>
                )
              }
              
              }
          />

          <FlatList
              data={playerDetails}
              numColumns={2}
              renderItem = {({item}) =>{
                return(
                  <View style = {styles.playerDetailsContainer}>
                    <View  style = {styles.playerDetails}>
                          <Text style = {styles.item}>{item.detail}</Text>
                    </View>  
                  </View>
                )
              }
              
              }
          />

      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#313866",
    flex: 1,
  },
  buttonContainer: {
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    width:100,
  },
  button: {
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    left:6
  },
  textContainer: {
    paddingTop:40,
    alignItems:'center'
  },
  text: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    top: 40,
    left: 6,
    color: "white",
    
  },
  item: {
    fontFamily: "FiraSans regular",
    fontSize: 23,
    left: 6,
    color: "white",
    padding:10,
    marginHorizontal: 10
    
  },
  listContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:90,
    paddingTop: 0,
    backgroundColor: "#313866",
  },
  imageContainer:{
    backgroundColor:'#50409A',
    borderRadius:20,
    height:150,
    alignItems:'center',
    justifyContent:'center'
  },

  listContainerImage:{
    flex:1,
    alignItems:'center',
    marginTop:50,
    paddingTop: 0,
    backgroundColor: "#313866",
  },
  itemContainer: {
    backgroundColor:'#964EC2',
    borderRadius:20,
    alignItems:'center'
  
  },
  playerDetailsContainer: {
    flex:1.5,
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center',
    backgroundColor: "#313866",
    
  },
  playerDetails: {
    backgroundColor:'#50409A',
    borderRadius:20,
    height:250,
    width:175,
    justifyContent:'center',
    alignItems:'center'
    
  }
 
});
