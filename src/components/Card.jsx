
// eslint-disable-next-line react/prop-types
export default function Card({nombre, descripcion, codigo, img}) {
    return(
        <>
            <div className="h-fit md:w-full w-70 mx-auto mb-4 md:mt-12 mt-6">
                <h1 className="font-bold text-2xl md:text-4xl text-white">
                    {nombre}
                </h1>
                <hr className="border-2 border-white"/>
            </div>

            <a href={codigo}>
                <div className="h-[300px] w-70 mx-auto mb-12 md:mb-0 md:w-[500px] group gap-[0.5em] relative flex justify-end flex-col overflow-hidden">
                    
                    <div className="absolute top-0 left-0 h-full w-full bg-[#323232] border-4 border-white"></div>
                    <img src={img} alt="" className="absolute w-full h-full border-4 border-white group-hover:opacity-10 transition-opacity duration-300"/>

                    <div className="container text-black z-[2] relative font-nunito flex flex-col gap-[0.5em] p-4">
                        

                        <div className="flex justify-left items-center h-fit w-full gap-[1.5em]">
                            <div className="w-fit h-fit flex justify-left gap-[0.5em]"></div>
                        </div>
                    </div>

                    <p className="px-4 block text-[#ffffff] relative h-[0em] group-hover:h-[8em] leading-[1.2em] duration-500 overflow-hidden">
                        {descripcion}
                    </p>
                </div>
            </a>
        </>
    );
}
