import Banner from '../../../Assets/Banner.svg'

export const BannerSection = () => {
    return(
        <section>
            <img src={Banner} alt="imagem do Banner" />
            <div>
                <h1 className="title1">Fashion Store</h1>
                <p className="paragraph">Fique por dentro das nossas últimas promoções e novidades</p>
                <a href='LINK' className='btn'>Confira as OFERTAS</a>
            </div>
        </section>
    )
}