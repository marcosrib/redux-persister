import React from 'react'
import { Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Creators as actionsCreators } from '../src/store/ducks/todoSagas'

export default function Todos(props) {
    const dispatch = useDispatch();
    const todo = useSelector(state => state )
    console.log(todo);
    
    function add() {
        dispatch(actionsCreators.addTodo("tets"))
    }

    
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <Button title="add" onPress={add} />
            <Text>jjkjjk</Text>
        </View>

    )
}




