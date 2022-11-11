import { useEffect, useState } from "react"
import { Card } from '../../components/card/card.js'
import { api } from "../../utils/api/api.js"
import Modal from 'react-modal'
import './home.css'

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',    
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px',
    width: '500px',
    },
    overlay: {
        background: "rgba(150,63,150,0.4)"
    }
};

Modal.setAppElement('#root')

export function Home() {
    const [characters, setCharacterList] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [characterId, setIdList] = useState({})

    async function getCharacterData() {
        const allCharacters = await api.getCharacters()
        setCharacterList(allCharacters)
    }

    function handleModal() {
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        getCharacterData()
    }, [characters])

    return (
        <>
            <div>
                {characters.map((char, index) => { 
                    

                    return (
                        <>
                        <button className="btn-card" onClick={() => {
                        handleModal()
                        setIdList(char)
                        console.log(char)
                    }} key={index}> 
                        <Card
                            key={index}
                            imageUrl={char.imageUrl}
                            name={char.name}
                            films={char.films.length}
                            shortFilms={char.shortFilms.length}
                            tvShows={char.tvShows.length}
                        />
                        </button>
                    </>
                    )
                    
                    
                })}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleModal}
                style={customStyles}
                contentLabel="Informações extras"
            >
                <div className="card-Modal">
                    <section className="info-Modal">
                        <h3>Name: </h3>
                        <p>{characterId.name}</p>
                    </section>
                        <img src={characterId.imageUrl} alt={characterId.name}/>
                    <section className="info-Modal">
                        <h3>Filmes: </h3>
                        <p>{characterId.films}</p>
                    </section>
                    <section className="info-Modal">
                        <h3>Curta-metragens: </h3>
                        <p>{characterId.shortFilms}</p>
                    </section>
                    <section className="info-Modal">
                        <h3>Programas de TV: </h3>
                        <p>{characterId.tvShows}</p>
                    </section>
                    <section className="info-Modal">
                        <h3>Video Games: </h3>
                        <p>{characterId.videoGames}</p>
                    </section>
                    <section className="info-Modal">
                        <h3>Atrações de Parques: </h3>
                        <p>{characterId.parkAttractions}</p>
                    </section>
                    <section className="info-Modal">
                        <h3>Inimigos: </h3>
                        <p>{characterId.enemies}</p>
                    </section>
                    <section className="info-Modal">
                        <h3>Aliados: </h3>
                        <p>{characterId.allies}</p>
                    </section>
                </div>
            </Modal>
        </>
    )
}