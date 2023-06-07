import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect,useState } from 'react';

import 'swiper/css';
import { NavLink } from 'react-router-dom';

const Home = () =>{

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
        {/* banner part start*/}
        <section className="banner_part">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                <div className="banner_text">
                    <div className="banner_text_iner">
                    <h1>Best quality
                        pillow</h1>
                    <p>Seamlessly empower fully researched 
                        growth strategies and interoperable internal</p>
                    <a href="product_list.html" className="btn_1">shop now</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="banner_img">
            <img src="aseets/img/banner.png" alt="#" className="img-fluid" />
            <img src="aseets/img/banner_pattern.png " alt="#" className="pattern_img img-fluid" />
            </div>
        </section>
        {/* banner part start*/}
        {/* product list start*/}
        <section className="single_product_list">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="single_product_iner">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-sm-6">
                        <div className="single_product_img">
                        <img src="aseets/img/single_product_1.png" className="img-fluid" alt="#" />
                        <img src="aseets/img/product_overlay.png" alt="#" className="product_overlay img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-6">
                        <div className="single_product_content">
                        <h5>Started from $10</h5>
                        <h2> <a href="single-product.html">Printed memory foam 
                            brief modern throw 
                            pillow case</a> </h2>
                        <a href="product_list.html" className="btn_3">Explore Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single_product_iner">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-sm-6">
                        <div className="single_product_img">
                        <img src="aseets/img/single_product_2.png" className="img-fluid" alt="#" />
                        <img src="aseets/img/product_overlay.png" alt="#" className="product_overlay img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-6">
                        <div className="single_product_content">
                        <h5>Started from $10</h5>
                        <h2> <a href="single-product.html">Printed memory foam 
                            brief modern throw 
                            pillow case</a> </h2>
                        <a href="product_list.html" className="btn_3">Explore Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single_product_iner">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-sm-6">
                        <div className="single_product_img">
                        <img src="aseets/img/single_product_3.png" className="img-fluid" alt="#" />
                        <img src="aseets/img/product_overlay.png" alt="#" className="product_overlay img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-6">
                        <div className="single_product_content">
                        <h5>Started from $10</h5>
                        <h2> <a href="single-product.html">Printed memory foam 
                            brief modern throw 
                            pillow case</a> </h2>
                        <a href="product_list.html" className="btn_3">Explore Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* product list end*/}
        {/* trending item start*/}
        <section className="trending_items">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="section_tittle text-center">
                    <h2>Trending Items</h2>
                </div>
                </div>
            </div>
            <div className="row">
                {adminrecord.map((v,i)=>{
                    return(
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_product_item">
                                <div className="single_product_item_thumb">
                                <NavLink to='/product'><img src={v.image} alt="#" className="img-fluid" style={{height:"300px",width:"300px"}}/></NavLink>
                                </div>
                                <h3> {v.desc}</h3>
                                <p>{v.price}</p>
                                <h5><NavLink to={'/cart/'+v.id}>ADD TO CART</NavLink></h5   >
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </section>
        {/* trending item end*/}
        {/* client review part here */}
        <section className="client_review">
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide >
                <div className="single_client_review">
                    <div className="client_img">
                        <img src="aseets/img/client.png" alt="#" />
                    </div>
                    <p>"Working in conjunction with humanitarian aid agencies,</p>
                    <h5>- Micky Mouse</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide
                ><div className="single_client_review">
                    <div className="client_img">
                        <img src="aseets/img/client_1.png" alt="#" />
                    </div>
                    <p>"Working in conjunction with humanitarian aid agencies,</p>
                    <h5>- Micky Mouse</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="single_client_review">
                    <div className="client_img">
                        <img src="aseets/img/client_2.png" alt="#" />
                    </div>
                    <p>"Working in conjunction with humanitarian aid agencies,</p>
                    <h5>- Micky Mouse</h5>
                </div></SwiperSlide>
            <SwiperSlide>
                <div className="single_client_review">
                    <div className="client_img">
                        <img src="aseets/img/client_1.png" alt="#" />
                    </div>
                    <p>"Working in conjunction with humanitarian aid agencies,</p>
                    <h5>- Micky Mouse</h5>
                </div></SwiperSlide>
            
            </Swiper>
        </section>
        {/* client review part end */}
        {/* feature part here */}
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
        <section className="subscribe_part section_padding">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="subscribe_part_content">
                    <h2>Get promotions &amp; updates!</h2>
                    <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                    <div className="subscribe_form">
                    <input type="email" placeholder="Enter your mail" />
                    <a href="#" className="btn_1">Subscribe</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* subscribe part end */}
        </div>



    )
}

export default Home;