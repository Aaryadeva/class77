import React,{Component} from 'react'
import {Text,View,StyleSheet,Image,SafeAreaView,StatusBar,TouchableOpacity,Platform,ImageBackground} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea}/> 
                <ImageBackground
                source={require('../assets/bg_image.png')}
                style={styles.backgroundImage}
                >
                <View style={styles.titleBar}>
                <Text style={styles.titleText}>ISS Tracker App</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Text style={styles.knowMore}>{'know more--->'}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image style={{marginTop:-100,marginLeft:110,width:80,height:80}}
                        source={require('../assets/iss_icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Text style={styles.knowMore}>{'know more--->'}</Text>
                        <Text  style={styles.bgDigit}>2</Text>
                        <Image
                        source={require('../assets/meteor_icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Updates</Text>
                        <Text style={styles.knowMore}>{'know more--->'}</Text>
                        <Text style={styles.bgDigit}>3</Text>
                        <Image
                        source={require('../assets/rocket_icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                
                </ImageBackground>
            </View>
        )
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
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    routeCard:{
        flex:0.25,
        borderRadius:30,
        width:200,
        height:150,
        margin:50,
        backgroundColor:'white'
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    routeText:{
        fontSize:35,
        color:'black',
        fontWeight:'bold',
        marginTop:75,
        paddingLeft:30
    },
    knowMore:{
        fontSize:13,
        color:'red',
        paddingLeft:30
    },
    bgDigit:{
        fontSize:80,
        color:'gray',
        paddingLeft:150,
        marginTop:-50
    }
  });