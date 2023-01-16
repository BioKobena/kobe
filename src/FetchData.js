import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { db } from '../firebase/config'
import {ref, onValue} from 'firebase/database'

const FetchData = () => {

    const [todoData, setTodoData] = useState([])

    useEffect(() => {
        const starCountRef = ref(db, 'posts/')
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newPosts = Object.keys(data).map(key =>({
                id:key, 
                ...data[key]
            }))

            console.log(newPosts)
            setTodoData(newPosts)
        })
    })
  return (
    
    <View style={styles.container}>
      <Text style={styles}>FetchData</Text>
      {
        todoData.map((item, index) => {
            return(
                    <View key={index}>
                        <Text style={styles.text}> {item.title} </Text>

                        <Text> {item.body} </Text>
                    </View>
            )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
        fontSize:30, 
        textAlign:"center",
        marginTop:100,
        fontWeight:"bold"
    }, 
    text:{
        fontSize:20,
        textAlign:"center", 
        margin:20
    }
  });

  

export default FetchData