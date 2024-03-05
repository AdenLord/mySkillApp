import homer from "./img/homer.jpg"

const Home = () => {

    return ( 
        <div className="container-fluid p-5 text-center">
            <div className="row g-5">
                <div className="col-sm-6">
                    <h1>BlueWeb</h1>
                    <p>Wlecom To My React App</p>
                </div>
                <div className="col-sm-6">
                    <div className="bg-primary p-2">
                        <img className="rounded img-fluid"
                            src={homer} 
                            alt="blue" />
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;