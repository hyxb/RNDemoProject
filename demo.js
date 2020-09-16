import React, {useState} from 'react';
import {View,Text,Image,ScrollView,TextInput,Button} from 'react-native';


const name = "huabei!"

const App =()=>{
    // return(
    //     <ScrollView>
    //         <Text>
    //             Some Text
    //         </Text>
    //         <View>
    //             <Text>Some more Text</Text>
    //         <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width:200,height:200}}></Image>
    //         </View>
    //         <TextInput
    //             style={{height:40,borderColor:'gray',borderWidth:1}}
    //             defaultValue={"you can type in me"}
    //            />
    //         <Text>
    //             Hello , i am you  cat
    //         </Text>
    //     </ScrollView>
    //
    //     )
    return(
        <View>
            <Text>
                {Counter(123)}
            </Text>
        </View>
    )
}
function Counter(number) {
    const [count, setCount] = useState(number);
    return(
        <View>
            <Text>
            Count:{count}
            </Text>
            <Button title={"1"} onClick={()=> setCount(number)} />
            <Button title={"-"} onClick={()=> setCount(count=> count-1)}/>
            <Button title={"+"} onClick={()=> setCount(count=> count+1)}/>
        </View>
    )
}

function Cat(props){
    const [isHungre,setIsHungry] = useState(true);
    return(
        <View>
            <Text>
                i am {props.name} ,and i am {isHungre ? "hungry": "full"}！
            </Text>
            <Button onPress={()=> {
                setIsHungry(false)
            }}
                    disabled={!isHungre}
                    title={isHungre ? "Pour me some milk,please!":"thank you!"}/>

        </View>
    )
}

const Cafe=()=>{
    return (
        <View>
            <Cat name={'huabei'}/>
            <Cat name={"mayi"}/>
        </View>
    )
}

export default Cafe;
