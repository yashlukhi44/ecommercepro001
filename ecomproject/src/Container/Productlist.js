import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';

const Productlist = () => {

    let [adminrecord, setAdminRecord] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/product")
        .then(async (ress)=>{
            let record  = await ress.json();
            if(record){
                setAdminRecord(record);
            }
            else{
                console.log("record not found");
            }
        })
        .catch((err)=>{
            console.log("Something wrong");
        })
    }, setAdminRecord);



    return(
        <div>
        {/* breadcrumb part start*/}
        <section className="breadcrumb_part">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="breadcrumb_iner">
                    <h2>product list</h2>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* breadcrumb part end*/}
        {/* product list part start*/}
        <section className="product_list section_padding">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <div className="product_sidebar">
                    <div className="single_sedebar">
                    <form action="#">
                        <input type="text" name="#" placeholder="Search keyword" />
                        <i className="ti-search" />
                    </form>
                    </div>
                    <div className="single_sedebar">
                    <div className="select_option">
                        <div className="select_option_list">Category  </div>
                        <div className="select_option_dropdown">
                            <p><a href="#">Mens</a></p>
                            <p><a href="#">Women</a></p>
                            <p><a href="#">Electronics</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-8">
                <div className="product_list">
                    <div className="row">
                    {adminrecord.map((v,i)=>{
                        return(
                            <div className="col-lg-6 col-sm-6">
                                <div className="single_product_item">
                                <img src={v.image} alt="#" className="img-fluid"  style={{height:"270px",width:"300px"}} />
                                <h3> <a href="single-product.html">{v.desc}</a> </h3>
                                <p>From {v.price} $</p>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
 
        <section className="feature_part section_padding">
            <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                <div className="feature_part_tittle">
                    <h3>Credibly innovate granular
                    internal or organic sources
                    whereas standards.</h3>
                </div>
                </div>
                <div className="col-lg-5">
                <div className="feature_part_content">
                    <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
                </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                    <img src="aseets/img/icon/feature_icon_1.svg" alt="#" />
                    <h4>Credit Card Support</h4>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                    <img src="aseets/img/icon/feature_icon_2.svg" alt="#" />
                    <h4>Online Order</h4>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                    <img src="aseets/img/icon/feature_icon_3.svg" alt="#" />
                    <h4>Free Delivery</h4>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                    <img src="aseets/img/icon/feature_icon_4.svg" alt="#" />
                    <h4>Product with Gift</h4>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* feature part end */}
        {/* subscribe part here */}

        {/* subscribe part end */}
        </div>

    )
}

export default Productlist;