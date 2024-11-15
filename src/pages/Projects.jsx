import Card from "../components/Card"

import img1 from "../imgs/projects/img1.jpg"
import img2 from "../imgs/projects/img2.jpg"
import img3 from "../imgs/projects/img3.jpg"

export default function Projects(){
    return(
        <>
            <div className="flex flex-col items-center mt-24 md:mt-0 md:flex md:flex-col md:justify-center">
                <h1 className="text-white text-2xl md:text-4xl text-center mb-12 mt-36">Algunos de mis proyectos finalizados!</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Card 
                            nombre={"Book Club"} 
                            descripcion={"Pagina web con arquitectura CRUD creada en React, usando JavaScript, MySQL, Axios y demas herramientas para la verificacion de datos, ademas de una API de google para el registro dentro de la misma."}
                            codigo={"https://github.com/AndresG2412/Book-Club"} img={img1}/>
                    </div>

                    <div>
                        <Card 
                            nombre={"Cartas de Invitacion"} 
                            descripcion={"Creada con React y Tailwind disponible para cualquier plataforma y/o dispositivo, invitaciones online donde lo que se quiere es llegar a las personas lejanas de cierta localidad y que estas asi mismo confirmen su llegada."}
                            codigo={"https://github.com/AndresG2412/cartas"} img={img2}/>
                    </div>

                    <div>
                        <Card 
                            nombre={"Portafolio"} 
                            descripcion={"Proyecto Front-end con la finalidad de dar a conocerme, y un poco de todo lo que he aprendido y compartir algunos proyectos con la posibilidad de contacto, visualizaicion desde cualquier dispositivo, ademas de entrenar mis habilidades y retarme constantemente."}
                            codigo={"https://github.com/AndresG2412/Portafolio"} img={img3}/>
                    </div>

                    <div>
                        <Card 
                            nombre={"CRUD's"} 
                            descripcion={"Diferentes proyectos CRUD desde diferentes herramientas como Laravel, Vue y Angular que vale la pena compartir, todos conectados a un Back-end y Base de datos MySQL; ademas de el uso de diferentes lenguajes para POO como Python, C++ y JavaScript."}
                            codigo={"https://github.com/AndresG2412/TasksApp"}/>
                    </div>
                </div>
            </div>
        </>
    );
}