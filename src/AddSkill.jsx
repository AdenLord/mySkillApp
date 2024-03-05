import shortid from 'shortid';

const AddSkill = ( { newSkill,setNewSkill,inputText,setInputText,newProBar,setNewProBar,newColour, setNewColour }) => {
    
    const addSkillHandler = (e) => {
        const skillNameInput = document.getElementById('skillNameInput');

        if( skillNameInput.value == "" ){
            alert('erorr!')
        }else{
            e.preventDefault();
            setNewSkill([
                ...newSkill,{text: inputText, 
                    id: shortid.generate(),
                     progress: newProBar ,
                     colour: newColour }
            ])
            setInputText("");
            setNewProBar(0);
        }
    }; 

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const inputNumHandler = (e) => {
        setNewProBar(e.target.value);
    };

    const inputColHandler = (e) => {
        setNewColour(e.target.value);
    };

    return ( 
        <div className=" my-5">
            <div className="mb-3 row">
            <div className="mb-3 col-sm-9">
                <label className="form-label">Skill Name : </label>
                <input id='skillNameInput' className="form-control" onChange={inputTextHandler}
                type="text" value={inputText}/>
            </div>

            <div className="mb-3 col-sm-3">
                <label className="form-label">Percent : </label>
                <input className="form-control" onChange={inputNumHandler} 
                min="0" max="100" step="5" type="number" value={newProBar}/>
            </div>
            </div>

            <div className="mb-3">
                <select className="btn btn-outline-primary" onChange={inputColHandler} name="barColour" id="colours">
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                </select>
            </div>

            <button className="mb-3 btn btn-outline-primary" onClick={addSkillHandler}>Add new skill</button>
        </div>
     );
}
 
export default AddSkill;