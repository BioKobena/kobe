// import { View, Text, StyleSheet, TextInput, Button } from "react-native";
// import React, { useState } from "react";
// import { db } from "../firebase/config";
// import { ref, set } from "firebase/database";

// const AddData = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const dataAddOn = () => {
//     set(ref(db, "posts/" + "newPosts" + title), {
//       title: title,
//       body: body,
//     });

//     setTitle("");
//     setBody("");
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Informations de la base de données</Text>
//       <TextInput
//         placeholder="Titre"
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Contenu"
//         value={body}
//         onChangeText={(text) => setBody(text)}
//         style={styles.input}
//       />
//       <Button 
//       title="Envoyer" 
//       onPress={dataAddOn}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //   flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     fontSize: 30,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   input: {
//     width: 300,
//     borderWidth: 1,
//     borderColor: "black",
//     margin: 10,
//     padding: 10,
//     fontSize: 18,
//     borderRadius: 7,
//   },
// });

// export default AddData;


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

            // console.log(newPosts)
            setTodoData(newPosts)
        })
    },[])
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