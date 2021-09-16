import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeadingComponent = ({title}) => {
    return (
        <View>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20
    }
});

export default HeadingComponent;
