import React from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Gallery = ({ route, navigation }) => {

    const { images } = route?.params || {}

    const goBack = () => {
        navigation.goBack()
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={images}
                    renderItem={(({item}) => (
                        <Image source={{uri: item}} style={styles.image} />
                    ))}
                    style={{paddingHorizontal: 24, marginBottom: 24, paddingTop: 24}}
                />
                <TouchableOpacity onPress={goBack} style={styles.backContainer}>
                    <Image source={require('../../Assets/back.png')} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Gallery);