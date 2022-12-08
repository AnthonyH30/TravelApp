import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";



const AttractionsDetails = ({navigation, route}) => {

    const { item } = route?.params || {};

    const onBack = () => {
        navigation.goBack()
    }

    return(
        <SafeAreaView style={styles.AttractionContainer}>
            <Text onPress={onBack} style={{margin: 32}}>Back</Text>
            <Text>{item?.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo(AttractionsDetails);