import './employee.css';
const Employee=(props)=>{
    return(
        <div className="employee">
            <img src={props.img} alt=""  />
            <div>
                <p className="name">{props.name}</p>
                <p className="pos">{props.pos}</p>
            </div>
        </div>
    );
}
export default Employee;