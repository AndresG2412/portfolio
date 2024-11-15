// eslint-disable-next-line react/prop-types
export default function Caja({texto, className}) {
    return(
        <div className={`relative inline-block ${className}`}>
            <div className="absolute left-1 top-1 w-full h-full bg-gray-300" aria-hidden="true"></div>
            <div className="relative bg-white border-2 border-black px-4 py-2 font-bold">
            {texto}
            </div>
        </div>
    );
}