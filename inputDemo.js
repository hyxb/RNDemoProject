import React,{useState} from 'react';
import {Text,TextInput,View} from 'react-native';

const pizzaTranslator = () => {
    const [text,setText] = useState('');
    return (
        <View style={{padding:10}}>
            <TextInput
                placeholder="Type here to translate!"
                onChangeText={text=>setText(text)}
                defaultValue={text}
                style={{height:40}}/>
            <Text
                style={{padding:10,fontsize:42}}
            >
                {text.split(' ').map((word)=> word && '🍕').join(' ')}
            </Text>
        </View>
    )
}

export default pizzaTranslator;
