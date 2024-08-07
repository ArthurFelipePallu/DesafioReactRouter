import { Outlet } from "react-router-dom";
import "./styles.css"
import Header from "../../Components/Header";



export default function Home(){

    return <>
        <Header/>
        <Outlet/>
    </>;
}