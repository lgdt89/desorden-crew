import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return(
        <div className="flex flex-col items-center h-[500px] bg-black" style={{height:"calc(100vh-500px)"}}>
            <h1 className="text-white text-center">
                PAGINA NO AUTORIZADA
            </h1>
            <Link to="/" className="text-white align-center">
                Regresar al Inicio
            </Link>
             
        </div>
    )
}