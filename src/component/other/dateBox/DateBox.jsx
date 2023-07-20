import './dateBox.css';
export default function DateBox(props){
    return(
        <div className="dateBox">
            <p>
                Date de départ <span style={{color:"red"}}>*</span>
            </p>
            <div className="date">
                <input type="date" name="" id="" />
            </div>
        </div>
    )
}