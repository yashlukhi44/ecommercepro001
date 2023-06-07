import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    
    let navigate = useNavigate();

    useEffect(()=>{
        let sessionData = sessionStorage.getItem('username');
        // console.log(sessionData);
    
        if(sessionData==null){
        navigate('/')
        }
    })


    return(
            <div id="main-wrapper">
            <div className="page-wrapper">
                {/* ============================================================== */}
                {/* Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                    <h4 className="page-title">Dashboard</h4>
                    <div className="ml-auto text-right">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                        </nav>
                    </div>
                    </div>
                </div>
                </div>
                {/* ============================================================== */}
                {/* End Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Container fluid  */}
                {/* ============================================================== */}
                <div className="container-fluid">
                {/* ============================================================== */}
                {/* Sales Cards  */}
                {/* ============================================================== */}
                <div className="row">
                    {/* Column */}
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                    <div className="card card-hover">
                        <div className="box bg-cyan text-center">
                        <h1 className="font-light text-white"><i className="mdi mdi-view-dashboard" /></h1>
                        <h6 className="text-white">Dashboard</h6>
                        </div>
                    </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                    <div className="card card-hover">
                        <div className="box bg-danger text-center">
                        <h1 className="font-light text-white"><i className="mdi mdi-border-outside" /></h1>
                        <h6 className="text-white">Tables</h6>
                        </div>
                    </div>
                    </div>
    
        
                    <div className="col-md-6 col-lg-4 col-xlg-3">
                    <div className="card card-hover">
                        <div className="box bg-danger text-center">
                        <h1 className="font-light text-white"><i className="mdi mdi-receipt" /></h1>
                        <h6 className="text-white">Forms</h6>
                        </div>
                    </div>
                    </div>
                    
     
            
                    {/* Column */}
                </div>
                {/* ============================================================== */}
                {/* Sales chart */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                        <div className="d-md-flex align-items-center">
                            <div>
                            <h4 className="card-title">Site Analysis</h4>
                            <h5 className="card-subtitle">Overview of Latest Month</h5>
                            </div>
                        </div>
                        <div className="row">
                            {/* column */}
                            <div className="col-lg-9">
                            <div className="flot-chart">
                                <div className="flot-chart-content" id="flot-line-chart" />
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="row">
                                <div className="col-6">
                                <div className="bg-dark p-10 text-white text-center">
                                    <i className="fa fa-user m-b-5 font-16" />
                                    <h5 className="m-b-0 m-t-5">2540</h5>
                                    <small className="font-light">Total Users</small>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="bg-dark p-10 text-white text-center">
                                    <i className="fa fa-plus m-b-5 font-16" />
                                    <h5 className="m-b-0 m-t-5">120</h5>
                                    <small className="font-light">New Users</small>
                                </div>
                                </div>
                                <div className="col-6 m-t-15">
                                <div className="bg-dark p-10 text-white text-center">
                                    <i className="fa fa-cart-plus m-b-5 font-16" />
                                    <h5 className="m-b-0 m-t-5">656</h5>
                                    <small className="font-light">Total Shop</small>
                                </div>
                                </div>
                                <div className="col-6 m-t-15">
                                <div className="bg-dark p-10 text-white text-center">
                                    <i className="fa fa-tag m-b-5 font-16" />
                                    <h5 className="m-b-0 m-t-5">9540</h5>
                                    <small className="font-light">Total Orders</small>
                                </div>
                                </div>
                                <div className="col-6 m-t-15">
                                <div className="bg-dark p-10 text-white text-center">
                                    <i className="fa fa-table m-b-5 font-16" />
                                    <h5 className="m-b-0 m-t-5">100</h5>
                                    <small className="font-light">Pending Orders</small>
                                </div>
                                </div>
                                <div className="col-6 m-t-15">
                                <div className="bg-dark p-10 text-white text-center">
                                    <i className="fa fa-globe m-b-5 font-16" />
                                    <h5 className="m-b-0 m-t-5">8540</h5>
                                    <small className="font-light">Online Orders</small>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* column */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>


    )
}

export default Dashboard;