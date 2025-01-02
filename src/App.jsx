import ShopItemFunc from "./components/ShopItemFunc.jsx";
import ShopItemClass from "./components/ShopItemClass.jsx";

import {item} from "./components/data.js";
export default function App(){
    return (
        <div className="container">
            <div className="background-element"></div>
            <div class='content'>
                <div className="highlight-window">
                    <div className='highlight-overlay'></div>
                </div>
                <div className="window">

                    <ShopItemFunc item={item} />
                </div>
            </div>
            <div className='content'>
                <div className="highlight-window">
                    <div className='highlight-overlay'></div>
                </div>
                <div className="window">
                    <ShopItemClass item={item} />
                </div>
            </div>

        </div>
    )
}