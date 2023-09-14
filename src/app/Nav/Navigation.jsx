import Link from "next/link"
import Image from "next/image"

import styles from './Navigation.module.css'
import { Images } from "@/assets/img"

const links =[{
    label:'Home',
    route:'/'
  },
  {
    label:'Conocenos',
    route:'/conocenos'
  },
  {
    label:'Acciones',
    route:'/acciones'
  },
  {
    label:'Sumate',
    route:'/sumate'
  },
]

export default function Navigation() {
    return <header className={styles.header}>
        <Image className={styles.logo} src={Images.logos.LogoGreen} alt="DaleQueValen Logo" priority/>
        <nav>
            <ul className={styles.menu}>
                {links.map(({label,route})=>(
                    <li key={route}>
                        <Link href={route}>{label}</Link>
                    </li>
                ))}
                <li><a href="">Contacto</a></li>
            </ul>
        </nav>
    </header>
}