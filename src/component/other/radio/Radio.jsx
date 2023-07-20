import './radio.css';
export default function Radio (props){
    
    return (
        <div className="myRadio">
            <input type="radio" name={props.name} id={props.id} className="radio" value={props.name}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}