import Container from "Components/Container/indx"
import Cabecalho from "Components/cabecalho"
import Rodape from "Components/rodape"
import FavoritosProvider from "Contextos/Favoritos"
import { Outlet } from "react-router-dom"

export function PaginaBase () {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />

        </main>
    )
}

export default PaginaBase