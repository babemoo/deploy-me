import React ,{Component} from "react";

class ProductItem extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        const {ProductName , UnitPrice, thumbnail} = this.props;
        return(
            <div className = "col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">{ProductName}</h5>
                <p className="title text-right">{UnitPrice} THB</p>
                <button className="btn btn-block btn-secondary title">
                    ซื้อ
                </button>
                <hr />
            </div>
       )
    }
}
export default ProductItem;