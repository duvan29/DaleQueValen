import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Link from "next/link"
import Icon from "@/assets/icons/icon"

export default function Conocenos() {

  return (
    <main>
      <SectionTitle bgColor="green-50" title="contacto" />
      <div className="flex flex-col text-center mb-6">
                    
                    <h1 className='mb-3 text-base'>Redes sociales</h1>
                    
                    <div className='flex justify-evenly mb-6'>
                        <Link className='w-10 hover:text-[#8e83bc]'
                            href={"https://www.instagram.com/dalequevalen/"}
                            target='_blank'>
                            <Icon
                            icon="Instagram"
                            />
                        </Link>
            
                        <Link className='w-10 hover:text-purple'
                            href={"https://www.facebook.com/"}
                            target='_blank'>
                            <Icon
                            icon="Facebook"
                            />
                        </Link>
            
                        <Link className='w-10 hover:text-[#8e83bc]'
                            href={"https://www.linkedin.com/"}
                            target='_blank'>
                            <Icon
                            icon="Linkedin"
                            />
                        </Link>
                    </div>

                    <h1 className='mt-5 mb-3 text-base'>Correo electrónico</h1>
                    <div className='flex justify-center'>
                        <Link
                            className=' w-12 hover:text-[#8e83bc] flex mx-2'
                            href={"https://gmail.com/"}
                            target='_blank'>
                            <Icon
                                icon="Mail"
                            />
                        </Link>
                        <p className='gap-4 mt-2 underline'>
                            dalequevalen@gmail.com
                        </p>
                    </div>

                    <h1 className='mt-5 mb-3 text-base'>Whatsapp</h1>
                    <div className='flex justify-center'>
                        <Link
                            className=' w-10 hover:text-[#8e83bc] flex mx-2'
                            href={"https://web.whatsapp.com/"}
                            target='_blank'>
                            <Icon
                                icon="Whatsapp"
                            />
                        </Link>
                        <p className='gap-6 mt-2'>
                            +54-2612425949
                        </p>
                    </div>
                </div>
    </main>
  );
}