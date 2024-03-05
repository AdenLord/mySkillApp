const  ProBars  = ({ skillName, progress, colour}) => { 
    
    const style = {
        width: progress ,
        backgroundColor : colour
    }
  
    return (
            <li className="skill list-group-item list-group-item-info">
                <p> Skill :  { skillName } 
                    <span className="badge bg-secondary">
                        {progress} 
                    </span>
                </p>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated"             
                        style={ style }>
                            {progress}
                    </div>
                </div>
                
                <button onClick={(e) => e.target.parentNode.remove()} className="delBtn mt-2 btn btn-sm btn-outline-primary">
                    delete
                </button>
            </li>
        )
}
 
export default ProBars ;