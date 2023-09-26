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
        <div className="flex w-full mb-3 bg-purple-50 rounded-2xl">
            <Image src={Images.logos.LogoBlackWhite} className="w-[40%] rounded-3xl"/>
            <div className="flex-col w-[60%] px-4 py-3">
                <h2 className="text-center text-[12px] mb-2">Donar Dinero</h2>
                <h4 className="text-[10px]">Podes ayudarnos a alcanzar nuestros objetivos con una donación económica a través del link de pago al hacer click en ‘Donar’ o a través de una trasferencia bancaria. </h4>
                
                <div className="text-right mt-1">
                    <h6 className="text-[12px] mb-2 text-purple underline" onClick={toggleText}>{isOpen ? 'Ocultar':'Ver'} Datos Bancarios</h6>
                    <Link href="#" className="bg-purple px-8 py-3 rounded-xl inline-block text-white">
                        <h2 className="text-[12px]">Donar</h2>
                    </Link>
                </div>
            </div>
        </div>

        <div className={`flex-col overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-[500px]':'max-h-0'}`}>
            <div className="flex w-full py-3 mb-3 bg-purple-50 rounded-2xl justify-center uppercase">
               <div>
                    <h6 className="text-[10px]">Banco Credicoop</h6>
                    <p className="text-[10px]">
                        Fundacion Dale que Valen<br/>
                        Cta corriente: 191-047-036833/4<br/>
                        CBU: 19100476-55004703683346<br/>
                        Alias: PIANO.ADOBO.FAMA
                    </p>
               </div>
            </div>
            
            <div className="flex w-full py-3 my-3 bg-purple-50 rounded-2xl justify-center uppercase">
               <div>
                    <h6 className="text-[10px]">Mercado Pago</h6>
                    <p className="text-[10px]">
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