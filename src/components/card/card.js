import './card.css'

export function Card({ imageUrl, name, films, shortFilms, tvShows }) {
    
        return (
        <div className='card-comp'>
            <h3>{name}</h3>
            <section className='card-img'>
                <img srcSet={imageUrl} alt={name} />
            </section>
            
            <section className='card-data'>
                <h4>Filmes:</h4>
                <p>{films}</p>
            </section>
            <section  className='card-data'>
                <h4>Curta-metragens:</h4>
                <p>{shortFilms}</p>
            </section>
            <section className='card-data'>
                <h4>Programas de TV:</h4>
                <p>{tvShows}</p>
            </section>
        </div>
    )
}