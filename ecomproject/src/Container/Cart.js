import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

const Cart = () => {

    let [data, setData] = useState([]);
    let [active, setactive] = useState(true);

    let {id} = useParams();

    useEffect(()=>{
        fetch('http://localhost:3001/product/'+id,{

        }).then(res=>{
            res.json().then(record=>{
                let datarecord = [record]
                setData(datarecord)
            })
            .catch(err=>{
                console.log(err);
            })
        }).catch(err=>{console.log(err)})
    },setData)

    return (
        <div>
            {/* breadcrumb part start*/}
            <section className="breadcrumb_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <h2>cart list</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb part end*/}
            {/*================Cart Area =================*/}
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            {data.map((v,i)=>{
                                return(
                                    <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>                                            
                                            <th scope="col">Price</th>
                                            <th scope="col">Total</th>
                                            
    
                                        </tr>
                                    </thead>
                                    <tbody>
                                     
                                        
                                                <tr>
                                                    <td>
                                                        <div className="media ">
                                                            <div className="d-flex">
                                                                <img src={v.image} />
                                                            </div>
                    
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5>{v.name}</h5>
                                                    </td>
                                                    <td>
                                                        <h5>{v.price} $</h5>
                                                    </td>

                                                    <td>
                                                        <h5>{v.price} $</h5>
                                                    </td>
                                                </tr>
                                        
                                        <tr>
                                            <td />
                                            <td />
                                            <td>
                                                <h5>Subtotal</h5>
                                            </td>
                                            <td>
                                                <h5>{v.price} $</h5>
                                            </td>
                                        </tr>
                                        <tr className="shipping_area">
                                            <td />
                                            <td />
                                            <td>
                                                <h5>Shipping</h5>
                                            </td>
                                            <td>
                                                <div className="shipping_box">
                                                    <ul className="list">
                                                        <li>
                                                            Flat Rate: $5.00
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                        <li>
                                                            Free Shipping
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                        <li>
                                                            Flat Rate: $10.00
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                        <li className="active">
                                                            Local Delivery: $2.00
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                    </ul>
                                          
                                                    <select className="shipping_select">
                                                        <option value={1}>Bangladesh</option>
                                                        <option value={2}>India</option>
                                                        <option value={4}>Pakistan</option>
    
                                                    </select>
                                                    <select className="shipping_select section_bg">
                                                        <option value={1}>Select a State</option>
                                                        <option value={2}>Select a State</option>
                                                        <option value={4}>Select a State</option>
                                                    </select>
                                                    <input className="post_code" type="text" placeholder="Postcode/Zipcode" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                )
                            })}
                           

                            <div className="checkout_btn_inner float-right">
                                <NavLink className="btn_1 m-3" to="/">Continue Shopping</NavLink>
                                <NavLink className="btn_1 checkout_btn_1" to={'/cheakout/'+id}>Proceed to checkout</NavLink>
                            </div>
                        </div>
                    </div>
                </div></section>
            {/*================End Cart Area =================*/}
        </div>

    )
}

export default Cart;