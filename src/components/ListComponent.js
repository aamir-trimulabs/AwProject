import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListComponent = ({listData,listStyle}) => {
    return (
        <FlatList
            contentContainerStyle={listStyle} 
            data={listData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Text style={styles.textItemStyle}>
                    {item.name}
                </Text>
            )}
        />
    )
};

const styles = StyleSheet.create({
    textItemStyle:{
        fontSize: 20,
        marginVertical: 10,
        fontWeight: '400'
    }
});

export default ListComponent;

