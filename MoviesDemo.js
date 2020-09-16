import React,{Component} from 'react';
import {Image,StyleSheet,Text,View} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
const MOCKED_MOVIES_DATA =[
    {
        title:'biaoti',
        year:'2005',
        posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}
    }
];

export default class MoviesDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies:null,
        }
        console.log("constructor!");
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount(){
        console.log("componentdidmount is running");
        this.fetchData()
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    movies: responseData.movies,
                });
            });
    }

    renderLoadingView(){
        return(
            <View style={styles.container}>
                <Text>
                    正在加载电影数据。。。。。
                </Text>
            </View>
        )
    }

    renderMovie(movie){
        return (
            <View style={styles.container}>
                <Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }

    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }

        const movie = MOCKED_MOVIES_DATA[0];
        return this.renderMovie(movie)
    }


}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FcFF'
    },
    thumbnail: {
        // backgroundColor: '#123456',
        width: 63,
        height: 88
    },
    rightContainer:{
      flex:1,
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign:'center'
    },
    year:{
        textAlign: 'center',
    }
});


