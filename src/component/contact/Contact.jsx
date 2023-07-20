import 'bootstrap/dist/css/bootstrap.css';
import './contact.css';
import Radio from '../other/radio/Radio';
import DateBox from '../other/dateBox/DateBox';
export default function Contact() {
    const service=[
        {"label":"Conception d’un logiciel complet","id":"service1"},
        {"label":"Solution web et e-commerce","id":"service2"},
        {"label":"Sécurisation","id":"service3"},
        {"label":"Outils et intégration","id":"service4"},
        {"label":"Maintenance et support","id":"service5"},
        {"label":"Optimisation","id":"service6"},
        {"label":"Test et fiabilité","id":"service7"},
        {"label":"Autres","id":"service8"}
    ]
    return (
            <div className="contact container  d-flex row-gap-5" id='Contact'>
                <div className='row d-flex row-gap-3 py-2 contentDiv'>
                    <h1 className="title col-12 text-center text-uppercase">
                        Nous Contacter
                    </h1>
                    <p className="description col-12 text-center">
                        Remplissez ce formulaire rapide pour nous aider à mieux comprendre vos besoins et à faciliter le processus d'intégration. Vous pourrez planifier un appel gratuit avec nous après avoir soumis le formulaire.
                    </p>
                </div>
                <div className="row detail  d-flex ">
                    <h1 className="col-12 text-uppercase">
                        DETAILS DU PROJECT
                    </h1>
                    <p className="text col-12">
                        Quels sont les services qui vous intéressent ? <span style={{color:"red"}}>*</span>
                    </p>
                    <div className="radioGroup col-12 d-flex gap-2 radioService">
                        {
                            service.map((s,i)=>{
                                return <Radio label={s.label} name="service" id={s.id}/>                        
                            })
                        }
                        
                    </div>
                    <p className="text col-12">
                        Sélectionnez le plan souhaité <span style={{color:"red"}}>*</span>
                    </p>
                    <div className="radioGroup col-12 d-flex gap-2 radioPlan">
                        <Radio label="Baser sur le projet ( devis personnalisé )" name="plan" id="plan1"/>
                        <Radio label="Baser sur un nombre d’heure fixe" name="plan" id="plan2"/>
                    </div>
                    <p className="text col-12">
                        Budget estimé pour le projet ? <span style={{color:"red"}}>*</span>
                    </p>
                    <div className="radioGroup col-12 d-flex gap-2 radioPlan">
                        <Radio label="Budget réduit" name="budget" id="budget1"/>
                        <Radio label="Budget moyen" name="budget" id="budget2"/>
                        <Radio label="Budget élevé" name="budget" id="budget3"/>
                    </div>
                    <DateBox/>
                    
                </div>
            </div>
    )
}