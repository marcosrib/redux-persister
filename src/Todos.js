import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'


import { Creators as actionsCreators } from '../src/store/ducks/todoSagas'

export default function Todos(props) {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todoSagas)
  

    function add() {
        const array ={
            id:3,
            text: 'ldmcdmcld'
        }
        dispatch(actionsCreators.addTodo('nome'))
    }
    useEffect(() => {
       
    }, [])
    

    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <Button title="add" onPress={add} />
            <Text>{todo.todos}</Text>
        </View>

    )
}




