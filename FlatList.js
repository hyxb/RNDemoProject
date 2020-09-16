import React from 'react';
import {FlatList,StyleSheet,Text,View,SectionList} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22,
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'rgba(247,247,247,1.0)'
    }
});

const SectionListBasics = () => {
    return (
        <View style ={styles.container}>
            <SectionList
                sections={[
                    {title:'D',data:['Devin','Dan','Dominic']},
                    {title:'J',data:['jackson','jiukl','Jinndfg']},
                    {title:'S',data:['Serng','Seefdggg','Sertting']}
                ]}
                renderItem={({item})=><Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item,index) => index}
            />
        </View>
    )
}

const FlatlistBasice =()=>{
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                {key:'Devin'},
                {key:'dan'},
                {key:'Devsfin'},
                {key:'Devinfsfsd'},
                {key:'sdfaDevin'},
                {key:'DeviDdfn'},
                {key:'DevinFgds'},
                {key:'Devindfhydfs'},
            ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    )
}

export default FlatlistBasice;
