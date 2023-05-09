import Navbar from "@/business/general/navbar/navbar";
import Footer from "@/business/general/footer/footer";
export default function Layout({children}: any) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}