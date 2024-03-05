import { Outlet, Link} from "react-router-dom";

const Layout = () => {
    return ( 
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
            <ul className="navbar-nav ">           
                <li className="nav-item">
                <Link className="nav-link" to="/"> Home </Link> 
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/ToDoPage"> Todo list </Link> 
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/ResumePage"> Resume </Link> 
                </li>
            </ul>
            </div>
        </nav>
        <Outlet />
        </div>
     );
}
 
export default Layout;