import React from 'react';
import { StyleSheet, Text, TextComponent, View } from 'react-native';
import HeadingComponent from '../components/HeadingComponent';
import ListComponent from '../components/ListComponent';
import { listData } from '../constants/strings';

const Home = () => {
    return (
        <View>
            <HeadingComponent title="TEAM PAKISTAN" />
            <ListComponent 
                listData={listData} 
                listStyle= {{alignItems : 'center'}}
                />
        </View>
    )
};

const styles = StyleSheet.create({});

export default Home;
