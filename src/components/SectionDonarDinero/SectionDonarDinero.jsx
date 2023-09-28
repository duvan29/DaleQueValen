'use client'

import Image from "next/image"
import Link from "next/link"
import { Images } from "@/assets/img"
import { useState } from "react"

export default function SectionDonarDinero() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleText= ()=>{
        setIsOpen(!isOpen)
    }

    return(<section>
        <div className="flex w-full mb-3 md:my-8 bg-purple-50 rounded-2xl md:justify-between md:py-10">
            <Image src={Images.Sumate.DonarDinero} className="w-[40%] md:w-[30%] md:max-h-[350px] rounded-2xl object-cover md:mx-auto"/>
            <div className="flex-col w-[60%] md:w-[50%] px-4 py-3 md:pl-0 md:pr-20 md:my-auto">
                <h2 className="text-center text-[12px] mb-2 md:text-purple md:uppercase md:text-[24px] md:mb-5">Donar Dinero</h2>
                <h4 className="text-[10px] md:text-[20px]">Podes ayudarnos a alcanzar nuestros objetivos con una donación económica a través del link de pago al hacer click en ‘Donar’ o a través de una trasferencia bancaria. </h4>
                
                <div className="text-right mt-1 md:flex md:items-center md:justify-start">
                    <h6 className="text-[12px] md:text-left mb-2 text-purple underline md:text-[20px] md:mx-auto cursor-pointer" onClick={toggleText}>{isOpen ? 'Ocultar':'Ver'} Datos Bancarios</h6>
                    <Link href="https://donaronline.org/fundacion-dale-que-valen/pequenos-heroes-grandes-suenos" target="_blank" className="bg-purple px-8 py-3 rounded-xl inline-block text-white">
                        <h2 className="text-[12px] md:text-[24px] md:px-6 md:py-2">Donar</h2>
                    </Link>
                </div>
            </div>
        </div>

        <div className={`flex-col md:flex md:flex-row overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-[500px]':'max-h-0'}`}>
            <div className="flex w-full md:w-[50%] md:mr-3 py-3 md:py-8 mb-3 md:mb-6 bg-purple-50 rounded-2xl justify-center uppercase">
               <div>
                    <h6 className="text-[10px] md:text-[20px]">Banco Credicoop</h6>
                    <p className="text-[10px] md:text-[20px]">
                        Fundacion Dale que Valen<br/>
                        Cta corriente: 191-047-036833/4<br/>
                        CBU: 19100476-55004703683346<br/>
                        Alias: PIANO.ADOBO.FAMA
                    </p>
               </div>
            </div>
            
            <div className="flex w-full md:w-[50%] md:ml-3 py-3 md:py-8 mb-3 md:mb-6 bg-purple-50 rounded-2xl justify-center uppercase">
               <div>
                    <h6 className="text-[10px] md:text-[20px]">Mercado Pago</h6>
                    <p className="text-[10px] md:text-[20px]">
                        FUNDACION DALE QUE VALEN<br/>
                        CVU: 0000003100050876850238<br/>
                        Alias: dale.que.valen.mp<br/>
                        CUIT/CUIL: 30717956628
                    </p>
               </div>
            </div>
        </div>

        </section>
    )
}