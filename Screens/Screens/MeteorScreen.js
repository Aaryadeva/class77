import React,{Component} from 'react'
import {Text,View,StyleSheet,Alert,SafeAreaView,Platform,StatusBar,FlatList,ImageBackground,Image,Dimensions} from 'react-native'
import axios from 'axios'
export default class MeteorScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            meteors:{}
        }
    }
    componentDidMount(){
        this.getMeteors()
        try{setInterval(async()=>{
            this.getMeteors()
        },5000)}
        catch(e){console.log(e)}
    }
    getMeteors=()=>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=LODd4WAYlkMeD656pJ1tcMfyqzfCnEOFdX8uca0E")
        .then(response=>{this.setState({
            meteors:response.data.near_earth_objects
        })})
        .catch(error=>{Alert.alert(error.message)})

    }
    renderItem=({item})=>{
        var meteor=item
        var bg_Img,size,speed
        if(meteor.threat_score<=30){
            bg_Img=require("../assets/meteor_bg1.png")
            speed=require("../assets/meteor_speed3.png")
            size=100
        }
        else if(meteor.threat_score<=75){
            bg_Img=require("../assets/meteor_bg2.png")
            speed=require("../assets/meteor_speed3.png")
            size=150
        }
        else{
            bg_Img=require("../assets/meteor_bg3.png")
            speed=require("../assets/meteor_speed3.png")
            size=200
        }
        return(
            <ImageBackground source={bg_Img}>
            <View style={styles.infoContainer}>               
                <Image
                source={speed}
                />
                <Text style={styles.infoText}>{item.name}</Text>
                <Text style={styles.infoText}>closest to earth-{item.close_approach_data[0].close_approach_data_full}</Text>
                <Text style={styles.infoText}>minimum diameter(km)-{item.estimated_diameter.kilometers.estimated_diameter_min}</Text>
                <Text style={styles.infoText}>maximum diameter(km)-{item.estimated_diameter.kilometers.estimated_diameter_max}</Text>

                <Text style={styles.infoText}>velocity(km/h):{item.close_approach_data[0].relative_velocity.kilometers_per_hour}</Text>
                <Text style={styles.infoText}>missing by earth(km):{item.close_approach_data[0].relative_miss_distance.kilometers}</Text>

            </View>
            </ImageBackground>
        )
    }
    render(){
        if(Object.keys(this.state.location).length===0){
        return(
            <View style={styles.container}> 
                <Text>Loading...</Text>
            </View>
        )
        }
        else{}
            
        
    }
}
const styles = StyleSheet.create({ infoContainer: { flex: 0.2, backgroundColor: 'white', marginTop: -10, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30 }, infoText: { fontSize: 20, fontWeight: "bold",marginBottom:10,color:'white', } });