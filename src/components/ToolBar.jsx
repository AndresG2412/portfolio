
export default function ToolBar() {
    return(
        <>
            <nav className="w-full bg-white fixed top-0 flex justify-center text-xl md:text-3xl py-6 z-10 border-b-4 border-red-600">
                <a href="#about" className="mx-2 md:mx-6 px-4 relative overflow-hidden transition-all duration-500 ease-out rounded-xl hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#8b1f1f] before:via-red-500 before:to-[#8b1f1f] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black hover:text-white">Sobre Mi</a>
                <a href="#skills" className="mx-2 md:mx-6 px-4 relative overflow-hidden transition-all duration-500 ease-out rounded-xl hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#8b1f1f] before:via-red-500 before:to-[#8b1f1f] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black hover:text-white">Habilidades</a>
                <a href="#projects" className="mx-2 md:mx-6 px-4 relative overflow-hidden transition-all duration-500 ease-out rounded-xl hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#8b1f1f] before:via-red-500 before:to-[#8b1f1f] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black hover:text-white">Proyectos</a>
                <a href="#contact" className="mx-2 md:mx-6 px-4 relative overflow-hidden transition-all duration-500 ease-out rounded-xl hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#8b1f1f] before:via-red-500 before:to-[#8b1f1f] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black hover:text-white">Contacto</a>
            </nav>
        </>
    );
}