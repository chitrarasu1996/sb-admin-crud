import { useState } from "react";
import "../styles/dashboard.css"
import { Link } from "react-router-dom";

const Cards = () => {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };



    return (





        < div className="page-top">

            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                <ul className={style} id="accordionSidebar">

                    {/*  <!-- Sidebar - Brand --> */}
                    <li className="sidebar-brand d-flex align-items-center justify-content-center">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <Link to={"/"} className="sidebar-brand-text text-white text-decoration-none mx-3">
                            < div   > SB Admin <sup>2</sup></div> </Link>
                        <div className="text-center d-none d-md-inline">

                        </div>
                    </li>

                    {/*   <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/*  <!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                        <Link to={"/"} className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span > Dashboard</span></Link>
                    </li>

                    {/*  <!-- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/*   <!-- Heading --> */}
                    <div className="sidebar-heading">
                        Interface
                    </div>

                    {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Custom Components:</h6>
                                <Link class="collapse-item" to={"/buttons"}> Buttons</Link>
                                <Link class="collapse-item" to={"/cards"}>Cards</Link>
                            </div>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Utilities Collapse Menu --> */}

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i class="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Custom Utilities:</h6>
                                <Link class="collapse-item" to={"/colors"}>Colors</Link>
                                <Link  class="collapse-item" to={"/borders"}> Borders</Link> 
                                <Link  class="collapse-item" to={"/animations"}>Animations</Link> 
                                <Link class="collapse-item" to={"/other"}> Other</Link> 
                            </div>
                        </div>
                    </li>





                    {/*  <!-- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/* <!-- Heading --> */}
                    <div className="sidebar-heading">
                        Addons
                    </div>

                    {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <Link className="collapse-item" to={"/login"}> Login</Link>   
                                  <Link to={"/registor"} className="collapse-item">Register</Link> 
                                   <Link to={"/forgot"} className="collapse-item">Forgot Password</Link> 
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                 
                                  <Link to={"/page"} className="collapse-item"> 404 Page</Link> 
                                 
                                  <Link className="collapse-item" to={"/blank"}>Blank Page</Link> 
                            </div>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Charts --> */}
                    <li className="nav-item">
 <Link className="nav-link" to={"/charts"} > <i className="fas fa-fw fa-chart-area"></i><span>Charts</span></Link>   
       
        
</li>

                    {/*  <!-- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider d-none d-md-block" />


                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                    </div>

                </ul>
                {/* <!--end sidebar --> */}


                <div id="content-wrapper" class="d-flex flex-column">

                    <div id="content">

                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            {/* <!-- Topbar Search --> */}
                            <form
                                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* <!-- Topbar Navbar --> */}
                            <ul class="navbar-nav ml-auto">

                                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                <li class="nav-item dropdown no-arrow d-sm-none">
                                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-search fa-fw"></i>
                                    </a>
                                    {/* <!-- Dropdown - Messages --> */}
                                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form class="form-inline mr-auto w-100 navbar-search">
                                            <div class="input-group">
                                                <input type="text" class="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button">
                                                        <i class="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                {/* <!-- Nav Item - Alerts --> */}
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-bell fa-fw"></i>
                                        {/* <!-- Counter - Alerts --> */}
                                        <span class="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/* <!-- Dropdown - Alerts --> */}
                                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 class="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-primary">
                                                    <i class="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 12, 2019</div>
                                                <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-success">
                                                    <i class="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-warning">
                                                    <i class="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>

                                {/* <!-- Nav Item - Messages --> */}
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-envelope fa-fw"></i>
                                        {/* <!-- Counter - Messages --> */}
                                        <span class="badge badge-danger badge-counter">7</span>
                                    </a>
                                    {/* <!-- Dropdown - Messages --> */}
                                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 class="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..." />
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div class="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..." />
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div class="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                                    alt="..." />
                                                <div class="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..." />
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>

                                <div class="topbar-divider d-none d-sm-block"></div>

                                {/* <!-- Nav Item - User Information --> */}
                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img class="img-profile rounded-circle"
                                            src="img/undraw_profile.svg" />
                                    </a>
                                    {/* <!-- Dropdown - User Information --> */}
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>
                            {/* < --navbarend--> */}
                        </nav>


                        <div class="container-fluid">

                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Cards</h1>
                            </div>

                            <div className="row">

                                {/*  <!-- Earnings (Monthly) Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Earnings (Monthly)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800  ">$40,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Earnings (Monthly) Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Earnings (Annual)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Earnings (Monthly) Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-info shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                                    </div>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-auto">
                                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 ms-2">50%</div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="progress progress-sm mr-2">
                                                                <div className="progress-bar bg-info a1" role="progressbar"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Pending Requests Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-warning shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Pending Requests</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <--row Finished--> */}
                            


                            <div class="row">


                                <div class="col-lg-6">

                            {/* <!-- Default Card Example --> */}
                            <div class="card mb-4">
                                <div class="card-header">
                                    Default Card Example
                                </div>
                                <div class="card-body">
                                    This card uses Bootstrap's default styling with no utility classes added. Global
                                    styles are the only things modifying the look and feel of this default card example.
                                </div>
                            </div>

                            {/* <!-- Basic Card Example --> */}
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                                </div>
                                <div class="card-body">
                                    The styling for this basic card example is created by using default Bootstrap
                                    utility classes. By using utility classes, the style of the card component can be
                                    easily modified with no need for any custom CSS!
                                </div>
                            </div>

                        </div>

                            <div class="col-lg-6">

                            {/* <!-- Dropdown Card Example --> */}

                            <div class="card shadow mb-4">


                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Card Body --> */}
                                <div class="card-body">
                                    Dropdown menus can be placed in the card header in order to extend the functionality
                                    of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                                    icon in the card header can be clicked on in order to toggle a dropdown menu.
                                </div>
                            </div>

                            {/* <!-- Collapsable Card Example --> */}
                            <div class="card shadow mb-3">
                                {/* <!-- Card Header - Accordion --> */}
                                <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
                                    role="button" aria-expanded="true" aria-controls="collapseCardExample">
                                    <h6 class="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                                </a>
                                {/* <!-- Card Content - Collapse --> */}
                                <div class="collapse show" id="collapseCardExample">
                                    <div class="card-body">
                                        This is a collapsable card example using Bootstrap's built in collapse
                                        functionality. <strong>Click on the card header</strong> to see the card body
                                        collapse and expand!
                                    </div>
                                </div>
                            </div>

                        </div>


                        </div>

                        </div>

                    </div>
                    <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Chitrarasu Website 2020</span>
                    </div>
                </div>
            </footer>
                </div>
            </div>

            <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

        </div>




    )
};



export default Cards;




