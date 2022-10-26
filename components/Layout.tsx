import Header from "./Header";
import Footer from "./Footer";
import Toc from "./Toc";

export default function Layout({ children }: { children: React.ReactNode}){
    return(
        <div className="bg-primary">
            <Header/>
            <Toc></Toc>
            <div>{children}</div>
            <Footer/>
        </div>
    )

}