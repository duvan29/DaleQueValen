import Link from "next/link";
import Image from "next/image";

import styles from './Navigation.module.css';
import { Images } from "@/assets/img";

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Conócenos',
    route: '/conocenos'
  },
  {
    label: 'Acciones',
    route: '/acciones'
  },
  {
    label: 'Súmate',
    route: '/sumate'
  },
];

export default function Navigation() {
  return (
    <div className="pr-[40px] pl-[40px] absolute">
      <header className={styles.header}>
        <div>
          <Image className={styles.logo} src={Images.logos.LogoGreen} alt="DaleQueValen Logo" priority />
        </div>
        <nav className="flex justify-end">
          <ul className={styles.menu}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}