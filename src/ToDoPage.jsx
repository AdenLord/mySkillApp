import { useState } from "react";
import Buttons from "./Buttons";
import AddSkill from "./AddSkill";
import NewSkillList from "./NewSkillsList";


const ToDoPage = () => {
    const [ inputText,setInputText ] = useState("");
    const [ newSkill,setNewSkill ] = useState([]);
    const [ newProBar , setNewProBar ] = useState(0);
    const [ newColour, setNewColour ] = useState("blue");


    return ( 
        <div>
            <h1>ToDoPage</h1>

            <AddSkill
                newSkill={newSkill}
                setNewSkill={setNewSkill}
                inputText={inputText}
                setInputText={setInputText}
                newProBar={newProBar}
                setNewProBar={setNewProBar}
                newColour={newColour}
                setNewColour={setNewColour}
                />

            <NewSkillList
                newSkill={newSkill}
                setNewSkill={setNewSkill}
            />

            <Buttons />
        </div>
     );
}
 
export default ToDoPage;