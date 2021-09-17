import React,{useReducer} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = ( state , action ) => {
     if(state.counter + action.payload < 0){
         return state;
     }
     return {...state , counter: state.counter + action.payload}
}

const CounterReducer = () => {

    const [state , dispatch] = useReducer(reducer , { counter : 0})
    const { counter } = state;
    const INC = 1;

    return (
        <View style={styles.root}>
            <Text>COUNTER : {counter}</Text>

            <Button title="Increament" onPress={()=> dispatch({payload:INC})} />
            <Button title="Decreament" onPress={()=> dispatch({payload:-1 * INC})} />
        </View>
    )
}

export default CounterReducer;

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
