//no se scentra muy bien para celulares

// eslint-disable-next-line react/prop-types
export default function Skill({img, nombre}){
    return(
        <>
            <div className="md:flex md:mx-0 md:flex-col items-center mt-6 md:mt-0">
                <img src={img} alt="s1" className="w-[70px] h-[70px] border-[3px] border-black rounded-lg mx-[42px]"/>
                <p className="text-center font-bold text-white md:mt-4">{nombre}</p>
            </div>
        </>
    );
}