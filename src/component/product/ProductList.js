import React, {Component} from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
    showProduct(){
       
            return this.props.product && this.props.product.map(product => (
                <ProductItem {...product} />
            ))
        }
    
    render(){
        return(
            <div className = "row">
                {this.showProduct()}
            </div>
        );
    }
}
export default ProductList;