import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class UpdatesScreen extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <Text>Updates Screen</Text>
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

  });