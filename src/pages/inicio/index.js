import Banner from 'Components/Banner';
import Card from 'Components/Card';
import Titulo from 'Components/Titulo';
import React, { useEffect, useState } from 'react';

import styles from './inicio.module.css'

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Jeffersonadao/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
        })
    }, [])
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
        
    )
}

export default Inicio;