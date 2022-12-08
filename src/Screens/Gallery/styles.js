import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Gallerycontainer: {
        flex: 1
    },
    subtitle: {
        fontSize: 20,
        marginTop: 40,
        color: 'black'
    },
    row:{
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    emptyText:{
        textAlign: 'center',
        marginTop: 24,
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)'
    }
})

export default styles;