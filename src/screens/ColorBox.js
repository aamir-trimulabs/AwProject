import React, {useReducer} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const reducer = (state , action) => {
    console.log(action)
    switch(action.colorToChange){
        case 'red':
            if(state.red + action.amount < 0 || state.red + action.amount > 255){
                return state
            }
            return {...state , red:state.red + action.amount};
        case 'green':
            if(state.green + action.amount < 0 || state.green + action.amount > 255){
                return state
            }
            return {...state , green:state.green + action.amount};
        case 'blue':
            if(state.blue + action.amount < 0 || state.blue + action.amount > 255){
                return state
            }
            return {...state , blue:state.blue + action.amount};
        default:
            return state;
    }
}

const ColorBox = () => {

    const [state , dispatch] = useReducer(reducer , {red:0 , green:0 , blue:0});
    const {red , green , blue} = state;
    console.log(red)

    const COLOR_INC = 5;

    return (
        <View style={styles.root}>
            <Text style={styles.titleStyle}>RED</Text>
            <Button title="increase red" onPress={()=> dispatch({colorToChange: 'red' , amount: COLOR_INC})} />
            <Button title="decrease red" onPress={()=> dispatch({colorToChange: 'red' , amount : -1 * COLOR_INC})} />
            <Text style={styles.titleStyle}>GREEN</Text>
            <Button title="increase green" onPress={()=> dispatch({colorToChange: 'green' , amount: COLOR_INC})} />
            <Button title="decrease green" onPress={()=> dispatch({colorToChange: 'green' , amount : -1 * COLOR_INC})} />
            <Text style={styles.titleStyle}>BLUE</Text>
            <Button title="increase blue" onPress={()=> dispatch({colorToChange: 'blue' , amount: COLOR_INC})} />
            <Button title="decrease blue" onPress={()=> dispatch({colorToChange: 'blue' , amount : -1 * COLOR_INC})} />

            <Text style={styles.titleStyle}>BOX</Text>
            <View style={[styles.colorBox, {backgroundColor: `rgba(${red}, ${green}, ${blue}, 1.0)`}]} />
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1
    },
    buttonsArea:{

    },
    colorBox:{
        height: 200,
        width: 200,
        alignSelf: 'center'
    },
    titleStyle:{
        fontSize: 20,
        fontWeight: '700'
    }
});

export default ColorBox;

