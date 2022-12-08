import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        fontSize: 13,
        color: 'rgba(0,0,0,0.5)',
        paddingVertical: 4
    },
    selectedItem: {
        color: '#000'
    },
    itemContainer: {
        marginBottom: 14,
        marginRight: 17,

    },
    selectedItemContainer: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
})

export default styles;