import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    AttractionContainer: {
        margin: 32
    },
    ImageBackground: {
        width: '100%',
        height: height / 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        paddingHorizontal: 8,
        marginBottom: 10
    },
    miniImage: {
        width: 40,
        height: 40,
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 10
    },
    moreImages: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    moreImagesContainer: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.38)',
        top: 8,
        left: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40
    },
    title: {
        color: '#000'
    },
    city: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: 8,
    },
})

export default styles;