import './feature.css';
export default function Feature (){
    return(
        <div className="feature">
            <div className="contentDiv">
                <div className="iconDiv">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div className="content">
                    <h6 className="name">
                        Collaboration d'équipe
                    </h6>
                    <p className="text">
                        Partagez l'histoire avec votre équipe et faites-lui personnaliser chaque démo en quelques secondes grâce à notre outil de publication.
                    </p>
                </div>
            </div>
        </div>
    )
}