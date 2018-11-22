import React , {Component} from "react";
import { Icon } from 'antd';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount(){
        this.timeID = setInterval(() => this.tick(), 1000);
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){   
        return(
            <div className="container-fluid" style={{backgroundColor: '#EDEEEF'}}>
                <div className = "row" >
                    <div className ="col-md-12 text-left" style={{ marginTop: 15}}>
                        <h1 className ="text-danger"  style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style={{height : 80 }} src ="/image/scg.png" alt =""/>
                       
                        &nbsp;&nbsp;
                            <Icon type="compass" spin/>
                            <span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            
                            <span>
                                &nbsp;
                            </span>
                            NAWAPLASTICS LOGISTICS &nbsp;
                            <img style={{height : 80 }} src ="/image/truck2.png" alt =""/>
                            <span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            {this.state.date.toLocaleTimeString()}
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
    tick(){
        this.setState({date : new Date()});
    }
}
export default Header;