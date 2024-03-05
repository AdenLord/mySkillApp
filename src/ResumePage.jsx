import Buttons from "./Buttons";
import ProBars from "./ProBars";
import InfoAside from "./InfoAside";
import CntInfo from "./ContatcInfo";

const ResumePage = () => {
    const skills = [{skillName: "js", progress: "45", id:Math.random()*100 ,colour: "yellow"},
                    {skillName: "css", progress: "75", id:Math.random()*100 ,colour : "blue"}]

    return ( 
        <div className="container m-4">
            <div className="row gx-4">
                <div className="col-sm-3">
                    <InfoAside/>    
                </div>

                <div className=" container col-sm-5">
                    <ul className="list-group list-group-flush">
                        {skills.map((skill) => < ProBars 
                            skillName={skill.skillName}
                            progress={skill.progress + "%"}
                            colour={skill.colour}
                            key={skill.id} 
                        />)}
                      </ul>    
                </div>

                <div className="col-sm-4">
                    <CntInfo />
                </div>
            </div>
            <Buttons />
        </div>
     );
}
 
export default ResumePage;