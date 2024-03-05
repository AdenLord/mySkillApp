import Probars from "./ProBars";

const NewSkillList = ({ newSkill,setNewSkill,setNewProBar }) => {
    return ( 
        <div>
            <ul id="skillBox" className="list-group">
                    {newSkill.map((skill) => (
                       <Probars
                            key={skill.id}
                            skillName={skill.text}
                            setNewSkill={setNewSkill}
                            progress={skill.progress + "%"}
                            setNewProBar={setNewProBar}
                            colour={skill.colour}
                       />
                    ))}
            </ul>
        </div>
     );
}
 
export default NewSkillList;