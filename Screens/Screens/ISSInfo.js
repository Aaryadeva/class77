import React,{Component} from 'react'
import {Text,View,StyleSheet,Alert} from 'react-native'
import axios from 'axios'
export default class ISSInfo extends Component{
    constructor(props){
        super(props);
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
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>latitude:{this.state.location.latitude}</Text>
                    <Text style={styles.infoText}>longitude:{this.state.location.longitude}</Text>
                    <Text style={styles.infoText}>altitude:{this.state.location.altitude}</Text>
                    <Text style={styles.infoText}>velocity:{this.state.location.velocity}</Text>
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({ infoContainer: { flex: 0.2, backgroundColor: 'white', marginTop: -10, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30 }, infoText: { fontSize: 15, color: "black", fontWeight: "bold" } });