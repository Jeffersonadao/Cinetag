import styles from './NaoEncontrada.module.css'

export function NaoEncontrada() {
    return (
        <section className={styles.container} >
            <h2>Ops!</h2>
            <p> O conteúdo que você procura Não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada