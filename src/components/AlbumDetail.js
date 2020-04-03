import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.titlestyle}>{album.title}</Text>
            <Image source={{url:"https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png"}}
            style={{width:28,height:28,marginRight:15}}/>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', album)}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fouricons}>
        <Text style={styles.titlestyle}>{album.title}</Text>
              <Image source={require("../picture/")}
              style={{width:28,height:28}}/>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius:100,
    margin: 5
  },
  headerContentStyle: {
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft: 10,
    flex:1
  },

  titlestyle:{
    fontSize:15,
    fontWeight:"bold",
  },

  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FFFFFF",
    elevation: 1,
    marginTop:5
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 450,
    borderRadius:40,
    marginLeft:10,
    marginRight:10,
    width: null
  },
  fouricons:{
    flexDirection:"row",
    flex:1,
    backgroundColor:"#FF88C2",
    height:50
  }
});

export default AlbumDetail;
