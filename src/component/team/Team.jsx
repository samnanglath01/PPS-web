import { useState ,useEffect} from 'react';
import './team.css';
import 'bootstrap/dist/css/bootstrap.css';
import Employee from './employee/Employee';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Team(){
    const [active,setActive]=useState("france");
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const employee=[
        {img:"./Assets/emp1.png",name:"Madam Fongdu",pos:"Project Manager",country:"cambodia"},
        {img:"./Assets/emp2.png",name:"Serey Vicheka",pos:"Team Leader",country:"cambodia"},
        {img:"./Assets/emp3.png",name:"Em Borey",pos:"Developer",country:"cambodia"},
        {img:"./Assets/emp1.png",name:"Jonh Stone",pos:"Developer",country:"cambodia"},
        {img:"./Assets/emp2.png",name:"Men tisurkea",pos:"Tester QA",country:"cambodia"},
        {img:"./Assets/emp3.png",name:"Meas Piseth",pos:"Team Leader",country:"cambodia"},
        {img:"./Assets/emp1.png",name:"Pech Bunna",pos:"Accounting",country:"cambodia"},
        {img:"./Assets/emp2.png",name:"Teng Sreyneang",pos:"Human Resource",country:"cambodia"},
        {img:"./Assets/emp3.png",name:"Prom Vitou",pos:"Human Resource",country:"cambodia"},
        {img:"./Assets/rose.png",name:"Jonh steven",pos:"Project Manager",country:"france"},
        {img:"./Assets/rose.png",name:"Michel",pos:"Team Leader",country:"france"},
        {img:"./Assets/rose.png",name:"Licado",pos:"Developer",country:"france"},
        {img:"./Assets/rose.png",name:"Limma",pos:"Developer",country:"france"},
        {img:"./Assets/rose.png",name:"Marry",pos:"Tester QA",country:"france"},
        {img:"./Assets/rose.png",name:"Brado",pos:"Team Leader",country:"france"},
        {img:"./Assets/rose.png",name:"Kevin debruyne",pos:"Accounting",country:"france"},
        {img:"./Assets/rose.png",name:"Son hoengmin",pos:"Human Resource",country:"france"},
        {img:"./Assets/rose.png",name:"Jonh Stone",pos:"Human Resource",country:"france"},

    ];
    
    
    return(
        <div className="team container-fluid d-flex ">
            <h1 className="row title text-uppercase text-center">
                Notre équipe
            </h1>
            <p className="text row">
                Voici notre équipe ...
            </p>
            <div className="location row">
                <div className="france col-6 country">
                    <img src="./Assets/france.png" alt="" />
                    <h6 className="name">France</h6>
                    <input type="checkbox" checked={active=== "france"} name="checkbox" id="france" onChange={()=>{setActive("france")}}/>
                </div>
                <div className="cambodia col-6 country">
                    <img src="./Assets/cambodia.png" alt="" />
                    <h6 className="name">Cambodia</h6>
                    <input type="checkbox" checked={active==="cambodia"} name="checkbox" id="cambodia" onChange={()=>{setActive("cambodia")}}/>
                </div>
            </div>
            <div className="emp row d-flex">
                {
                    employee.filter(emp=>emp.country===active).map((emp,i)=>{  
                        return(
                            <div data-aos="zoom-in" key={i} className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-6 col-8 empDiv">
                                <Employee  img={emp.img} name={emp.name} pos={emp.pos}/>
                            </div>
                        )                        
                    })
                }
                
            </div>
        </div>
    )
}