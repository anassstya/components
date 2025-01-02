import {item} from "./data.js";
import React from "react";


class PurchaseInfo extends React.Component{
   render(){
       return (
           <div className="purchase-info">
               <div className="price">
                   {item.currency}
                   {item.price}
               </div>
               <button>Добавить в корзину</button>
           </div>
       )
    }
}
export default class ShopItemClass extends React.Component {
    render(){
        return(
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">{item.descriptionFull}</div>
                <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                <div className="divider"></div>

                <PurchaseInfo/>
            </div>
        )
    }
}