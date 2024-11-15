import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isReadOnly] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };
  
      emailjs.send('service_0fkq5ot', 'template_9v4pv47', templateParams, 'nctrpObNBSEbwL1cc')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Correo enviado correctamente!",
            showConfirmButton: false,
            timer: 2500
          });

          setName('');
          setEmail('');
          setMessage('');

        })
        .catch((err) => {
          console.error('FAILED...', err);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Ups! Algo salió mal. Por favor, intenta más tarde.",
            showConfirmButton: false,
            timer: 2500
          });
          alert('¡Ups! Algo salió mal. Por favor, intenta más tarde.');
        });
    };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col md:px-24 px-6'>
        <label className='text-center text-2xl py-3'>Tu Nombre: </label>
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} 
            className='border-2 border-black rounded px-4 py-2'/>
            
        
        <label className='text-center text-2xl py-3'>Tu Correo: </label>
            <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} 
            className='border-2 border-black rounded px-4 py-2'/>
            
        
        <label htmlFor="" className='text-center text-2xl py-3'>Escribe tu Mensaje: </label>
            <textarea readOnly={isReadOnly} placeholder="Mensaje" value={message} onChange={(e) => setMessage(e.target.value)} 
            className='border-2 border-black rounded px-4 py-2'/>

        <button type="submit" className="mt-8 mb-4 mx-auto w-[150px] md:w-55 bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#4c4c4c] before:to-[rgb(111,111,111)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">Enviar</button>

    </form>
  );
}
