import Layout from "@/business/general/layout/layout";
import Header from "@/business/views/header/header";
import CallToAction from "@/business/views/callToAction/callToAction";
import Bienvenido from "@/business/views/bienvenido/bienvenido";
import Menu from "@/business/views/menu/menu";
import Reserva from "@/business/views/reserva/reserva";

export default function Home() {
    return (
        <>
            <Layout>
                <Header/>
                <CallToAction/>
                <Bienvenido/>
                <Menu/>
                <Reserva/>

            </Layout>
        </>
    )
}
