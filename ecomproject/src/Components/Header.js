import { NavLink } from "react-router-dom";

const Header = () => {
    return(
                <div>
        {/*::header part start::*/}
        <header className="main_menu home_menu">
            <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html"> <img src="aseets/img/logo.png" alt="logo" /> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menu_icon"><i className="fas fa-bars" /></span>
                    </button>
                    <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">about</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link " to="/product" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            product
                        </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link" to="/blog" id="navbarDropdown_2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            blog
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                    <div className="hearer_icon d-flex align-items-center">
                    <a id="search_1" href="javascript:void(0)"><i className="ti-search" /></a>
                    <a href="cart.html">
                        <NavLink to='/cart'><i className="flaticon-shopping-cart-black-shape" /></NavLink>
                    </a>
                    </div>
                </nav>
                </div>
            </div>
            </div>
            {/* <div className="search_input" id="search_input_box">
            <div className="container ">
                <form className="d-flex justify-content-between search-inner">
                <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                <button type="submit" className="btn" />
                <span className="ti-close" id="close_search" title="Close Search" />
                </form>
            </div>
            </div> */}
        </header>
        {/* Header part end*/}
        </div>


    )
}
export default Header;