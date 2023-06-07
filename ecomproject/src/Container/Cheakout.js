import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";


const Cheakout = () => {

    let [data, setData] = useState([]);

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
            <section class="breadcrumb_part">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb_iner">
                                <h2>checkout</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="checkout_area section_padding">
                <div class="container">
                    <div class="billing_details">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="order_box">
                                    <h2>Your Order</h2>
                                    {data.map((v,i)=>{
                                        return(
                                           <div>
                                                <ul className="list">
                                                    <li>
                                                    <a href="#">Product
                                                        <span>Total</span>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="#">{v.name}
                                                       
                                                        <span className="last">{v.price} $</span>
                                                    </a>
                                                    </li>
                                                </ul>
                                                <ul className="list list_2">
                                                    <li>
                                                    <a href="#">Subtotal
                                                        <span>{v.price} $</span>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="#">Shipping
                                                        <span>Free</span>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="#">Total
                                                        <span>{v.price} $</span>
                                                    </a>
                                                    </li>
                                                </ul>
                                                </div>

                                        )
                                    })}
                                    
                                    <div class="payment_item">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option5" name="selector" />
                                            <label for="f-option5">Check payments</label>
                                            <div class="check"></div>
                                        </div>
                                        <p>
                                            Please send a check to Store Name, Store Street, Store Town,
                                            Store State / County, Store Postcode.
                                        </p>
                                    </div>
                                    <div class="payment_item active">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option6" name="selector" />
                                            <label for="f-option6">Paypal </label>
                                            <img src="img/product/single-product/card.jpg" alt="" />
                                            <div class="check"></div>
                                        </div>
                                        <p>
                                            Please send a check to Store Name, Store Street, Store Town,
                                            Store State / County, Store Postcode.
                                        </p>
                                    </div>
                                    <div class="creat_account">
                                        <input type="checkbox" id="f-option4" name="selector" />
                                        <label for="f-option4">I’ve read and accept the </label>
                                        <a href="#">terms & conditions*</a>
                                    </div>
                                    <a class="btn_3" href="#">Proceed to Paypal</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cheakout;