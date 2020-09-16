

export default class MineCommonItem extends Component{
    static defaultProps={
        leftTitle:'',
        isSwitch:false,
        rightTitle:undefinded,
    }

    rightSubView(){
        if(this.props.rightTitle.length === undefined){
            return;
        }
        if(this.props.rightTitle.length > 0){}
        return (<Text style={{color:'gray'}}></Text> )
    }
}
