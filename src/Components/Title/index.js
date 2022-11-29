import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Title = () => {
    return(
        <Text style={styles.title}>Teste</Text>
    )
}

Title.defaultProps ={
    text: 'Default Text'
}

export default React.memo(Title);
