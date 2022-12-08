import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";
import AttractionsCard from "../../Components/AttractionsCard";
import Categories from "../../Components/Categories";
import Title from '../../Components/Title'
import styles from "./styles";
import jsonData from "../../Data/attractions.json";
import categories from "../../Data/categories.json";
import { useNavigation } from "@react-navigation/native";


const ALL = "All";

const Home = () => {
    const navigation = useNavigation()
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
    },[])

    useEffect(() => {
        if(selectedCategory === ALL){
            setData(jsonData)
        }else{
            const filteredData = jsonData?.filter(item => item?.categories.includes(selectedCategory))
            setData(filteredData)
        }
    },[selectedCategory])

    return(
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    numColumns={2}
                    style={{flexGrow: 1}}
                    ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={(
                        <>
                            <View style={{margin: 32}}>
                                <Title text="Which party" style={{ fontWeight: 'normal'}} />
                                <Title text="do you want to go?" />
                    
                                <Title text="Explore the Parties" style={styles.subtitle} />
                            </View>

                            <Categories
                                selectedCategory={selectedCategory}
                                onCategoryPress={setSelectedCategory}
                                categories={[ALL, ...categories]}
                            />
                        </>
                    )}
                    keyExtractor={(item) => String(item?.id)}
                    renderItem={({item, index}) => (
                        <AttractionsCard
                            style={[index % 2 === 0 ? {marginRight: 12, marginLeft: 32} : {marginRight: 32}]}
                            title={item.name}
                            subtitle={item.country}
                            imageSrc={item.images.length ? item.images[0] : null}
                            onPress={() => navigation.navigate('AttractionsDetails', { item })}
                        />
                    )}
                />
        </SafeAreaView>
    )
}

export default React.memo(Home);