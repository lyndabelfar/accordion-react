import { useState } from "react"

function Question(props){
    const [showInfo, setShowInfo]= useState(false);

    const handleInfo =()=>{
        setShowInfo(!showInfo)
    }
    
    return(
        <div className='question-div'>
            <div className="top-part">
                <h3 className="title">{props.question.title}</h3>
                <button className="show-more-btn" onClick={handleInfo}>{showInfo? "-":"+"}</button>
            </div>

            {showInfo && <p>{props.question.info}</p>}
            

            
        </div>
    )
}

export default Question