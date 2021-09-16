import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = ({navigation}) => {

    useEffect(
        ()=>{
            setTimeout(()=>{
                navigation.navigate("Home");
            },3000)
        }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.headingStyle}>Demo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingStyle:{
        fontSize: 40
    }

});

export default Splash;

