import { StyleSheet, Text, View , Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'

const ItemDetail = ({route}) => {

  const product = useSelector((state)=> state.shop.value.productSelected)
  const images = product.images ? product.images : []



  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[2]}}
            resizeMode='cover's
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.TextDesc}>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow}>
              <Text style={styles.buyNowText}>Comprar</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
        
    },
    content:{
      width:"100%"

    },
    image:{
      resizeMode: 'center',
      width:"100%",
      height:300,
    },
    goBack:{
      width:"100%",
      backgroundColor:colors.green1,
      padding:10,
      paddingStart:40
     },
     containerText:{
      gap:25,
      paddingHorizontal:50,
      paddingVertical:25,
     },
     title:{
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 8,
      fontFamily: 'sans-serif',
      textAlign:'center',
     },
     buyNow:{
      backgroundColor:colors.green1,
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:0,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      width:80,
      marginLeft:10,
    },
    containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10
   },
     buyNowText:{
      color:"white",
      textShadowColor:"black",
      textAlign:'center',
     },
     TextDesc:{
      fontSize: 20,
      fontStyle: 'italic'
     },
     price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'green',
      borderWidth:3,
      borderRadius: 7,
      borderColor: 'black',
      width:100,
      textAlign: 'center',
      paddingTop:5,
      backgroundColor:"white",
      textDecorationLine: 'underline',
    },
})