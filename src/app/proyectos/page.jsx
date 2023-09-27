import ProyectoContainer from "@/components/Containers/ContainerProyecto";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import proyects from "@/mock/mockProyects";


export default function Proyectos() {
  return (
    <main>
      <SectionTitle bgColor="orange" className='bg-orange' title="Proyectos" />
      <ProyectoContainer proyects={proyects}/>
    </main>
  );
}
