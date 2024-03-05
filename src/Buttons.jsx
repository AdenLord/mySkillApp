import { useNavigate } from "react-router-dom";

const Buttons = () => {
    const navigate = useNavigate();

    return ( 
        <div className="container-fluid p-5 text-center">
            <div className="btn-group">
            <button onClick={() => navigate(-1)}
                    className="btn btn-outline-primary">Back
            </button>

            <button onClick={() => navigate("/")}
                    className="btn btn-outline-primary">Home
            </button>

            <button onClick={() => navigate(+1)}
                    className="btn btn-outline-primary">Next
            </button>
            </div>
        </div>
     );
}
 
export default Buttons;