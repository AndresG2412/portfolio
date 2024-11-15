import Form from "../components/Form";

export default function Contact() {

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center mb-12">

        <h1 className="text-white text-3xl md:text-4xl text-center my-12">Contacta Conmigo!</h1>

        <div className='relative inline-block w-70'>
          <div className="absolute left-1 top-1 w-full h-full bg-gray-300" aria-hidden="true"></div>
          <div className="relative bg-white border-2 border-black px-4 py-2 font-bold">
            <Form/>
          </div>
        </div>
      </div>
    </>
  );
}