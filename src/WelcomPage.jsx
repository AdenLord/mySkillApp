import { useNavigate } from "react-router-dom";

const WelcomPage = () => {
    const navigate = useNavigate();

    return ( 
        <div className="container-fluid p-5 text-center">
            <h3> WELCOM TO MY REACT APP</h3>
            <h1>BlueWeb</h1>
            <p>this app will help me to do my best</p>
            <button onClick={() => navigate("/Home")}
                    className="btn btn-primary">START</button>
        </div>
     );
}
 
export default WelcomPage;
