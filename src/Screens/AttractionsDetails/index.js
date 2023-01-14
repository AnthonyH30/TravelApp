import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View, Pressable } from "react-native";
import styles from "./styles";
import Title from '../../Components/Title'
import InfoCard from "../../Components/InfoCard";

const AttractionsDetails = ({navigation, route}) => {

    const { item } = route?.params || {};

    const mainImage = item?.images.length ? item?.images[0] : null;
    const slicedImages = item?.images.length ? item?.images?.slice(0,5) : [];
    const diffImages = item?.images?.length - slicedImages.length;

    const onBack = () => {
        navigation.goBack()
    }
    const onGalleryNavigate = () => {
        navigation.navigate('Gallery', { images: item?.images})
    }

    return(
        <SafeAreaView style={styles.AttractionContainer}>
            <ImageBackground
            style={styles.ImageBackground}
            imageStyle={{ borderRadius: 20}}
            source={{uri: mainImage}}
            >
                <View style={styles.header}>
                    <Pressable onPress={onBack} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../Assets/back.png')} />
                    </Pressable>
                    <Pressable hitSlop={8}>
                        <Image style={styles.icon} source={require('../../Assets/share.png')} />
                    </Pressable>
                </View>
                <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                    {slicedImages?.map( (image, index) => (
                        <View key={image}>
                            <Image source={{uri: image}} style={styles.miniImage}/>
                            {diffImages > 0 && index === slicedImages.length - 1 ? (
                                <View style={styles.moreImagesContainer}>
                                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                </View>
                            ) : null}
                        </View>
                    ) )}
                </Pressable>
            </ImageBackground>
            <View style={styles.headerContainer}>
                <View>
                    <Title text={item?.name} style={styles.title} />
                    <Text style={styles.city}>{item?.city}</Text>
                </View>
                <Title text={item?.entry_price} style={styles.title} />
            </View>

            <InfoCard icon={require('../../Assets/location_circle.png')} text={item?.adress} />
            <InfoCard
            icon={require('../../Assets/time.png')}
            text={`OPEN
${item?.opening_time}`} />
        </SafeAreaView>
    )
}

export default React.memo(AttractionsDetails);