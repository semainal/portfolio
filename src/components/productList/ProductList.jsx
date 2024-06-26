import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="productList">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Planet Bee.</h1>
           <p className="pl-desc">
        Planet Bee is a creative portfolio that your work has been waiting for. Beautiful websites, creative notebooks disagn, stunning portfolio styles & a whole lot more awaits inside.
           </p>
            </div>

            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>

        </div>
    )
}

export default ProductList;