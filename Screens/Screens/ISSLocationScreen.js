import React,{Component} from 'react'
import {Text,View,StyleSheet,SafeAreaView,ImageBackground,Alert,Platform,StatusBar,TouchableOpacity,Image} from 'react-native'
import axios from 'axios'
import MapView,{Marker} from 'react-native-map'
import ISSInfo from './ISSInfo'
export default class ISSLocation extends Component{
    constructor(){
        super();
        this.state={
            location:{}
        }
    }
    componentDidMount(){
        this.getISSLocation()
        try{setInterval(async()=>{
            this.getISSLocation()
        },5000)}
        catch(e){console.log(e)}
    }
    getISSLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{this.setState({
            location:response.data
        })})
        .catch(error=>{Alert.alert(error.message)})

    }
    
    render(){
        if(Object.keys(this.state.location).length===0){
        return(
            <View style={styles.container}> 
                <Text>Loading...</Text>
            </View>
        )
        }
        else{
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.androidSafeArea}>
                        <ImageBackground source={require("../assets/bg.png")} style={styles.backgroundImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>ISS Location</Text>
                            </View>
                            <View style={styles.refreshContainer}>
                                <TouchableOpacity style={{width:100,height:'100%',alignItems:'center'}} 
                                onPress={()=>{
                                    this.setState({})
                                }}>
                                    <Image source={require("../assets/refresh_icon.png")} style={{width:50,height:50}}/>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.mapConatiner}>
                                <MapView style={styles.map} 
                                region={{
                                    latitude:this.state.location.latitude,
                                    longitude:this.state.location.longitude,
                                    latitudeDelta:100,
                                    longitudeDelta:100
                                }}>
                                    <Marker coordinate={{latitude:this.state.location.latitude,
                                    longitude:this.state.location.longitude}}>
                                        <Image source={require("../assets/ISS_icon.png")} style={{width:50,height:50}}/>
                                    </Marker>
                                </MapView>
                            </View>
                        </ImageBackground>
                        <ISSInfo/>
                    </SafeAreaView>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    titleContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" }, titleText: { fontSize: 30, fontWeight: "bold", color: "white" }, refeshContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" }, mapContainer: { flex: 0.6 }, map: { width: "100%", height: "100%" } 
  });