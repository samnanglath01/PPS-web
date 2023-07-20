
import './mybutton.css';
export default function MyButton(props){
 
    return (
        <button className={`${props.active===props.index ? "myButton active":"myButton"} `} onClick={()=>{props.setActive(props.index)}}>
            <i class={props.icon}></i>
            {props.name}
        </button>
    );
}