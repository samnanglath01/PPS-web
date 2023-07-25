import './software.css';
export default function Software(props){
    return(
        <div className="software d-flex ">
            <div className="imgBox">
                <img src={props.img} alt="" />
                <i className='fa-solid fa-arrow-up'></i>
            </div>
            <div className="btnBox d-flex gap-3">
                <div className="button btn1">
                    Client First
                </div>
                <div className="button btn2">
                    Re-Build
                </div>
                <div className="button btn3">
                    Development
                </div>
            </div>
            <h1 className="name">
                {props.name}
            </h1>
        </div>
    )
}