import {item} from "./data.js";

function PurchaseInfo(){
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

export default function ShopItemFunc(){
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