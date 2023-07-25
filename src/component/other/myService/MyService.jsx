import './myService.css';
export default function MyService(props){
    return(
        <div className="myService w-100 d-flex">
            <div className="box1 w-100 d-flex justify-content-between align-items-center">
                <img src={props.icon} alt="" className="icon" style={{background:props.bgIcon}} />
                <h1 className="number">
                    {props.number}
                </h1>
            </div>
            <h1 className="title w-100">
                {props.title}
            </h1>
            <div className="description w-100">
                {props.description}
            </div>
        </div>
    )
}