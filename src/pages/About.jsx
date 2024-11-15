import Caja from "../components/Box"
import Icon from "../imgs/img.png"

export default function About() {
    return(
        <>
            <div className="md:flex md:h-screen md:w-55 items-center mx-auto mt-32 md:mt-0">
                <div className="md:pr-16 mb-16 md:mb-0 flex flex-col items-center">
                    <img src={Icon} alt="icono_camilo" className="mx-auto mb-6"/>
                    <Caja texto="ANDRES CAMILO GAVIRIA BOLAÑOS" className="w-80 md:w-96 text-center text-3xl"/>
                </div>

                <div className="flex flex-col items-center ">
                    
                    <Caja texto="Un poco sobre mi:" className="w-96 text-center text-3xl mb-12"/>

                    <Caja 
                    texto="Ingeniero de Sistemas programador de software usando diferentes lenguajes de programacion, especializado en React y 
                    el manejo de datos con experiencia en bases de datos, front end y back end ademas de frameworks, APIs y otras utilidades.
                    Graduado de la Universidad Santiago de Cali, con un nivel de ingles intermedio, aprendiendo constantemente buscando pulir mis 
                    habilidades y descubrir nuevos retos, siempre pensando a futuro." 
                    
                    className="md:text-lg mx-24 md:mx-0"/>
                </div>
            </div>
        </>
    );
}