import React from "react";
import { View, SafeAreaView } from "react-native";
import Title from '../../Components/Title'

const Home = () => {
    return(
        <SafeAreaView>
            <View>
                <Title />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home);