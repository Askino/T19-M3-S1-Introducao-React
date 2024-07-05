import image1 from '../../../Assets/Sapatos.svg'
import image2 from '../../../Assets/Bolsas.svg'
import { CategoryCard } from "./CategoryCard"

export const CategoriesSection = () => {

    //categoryCard("Sapatos", "http://...")
    return (
        <section>
            <h2 className="title2">CATEGORIAS</h2>
            <ul>
                <li><CategoryCard title="Sapatos" image={image1}/></li>
                <li><CategoryCard title="Bolsas" image={image2}/></li>
            </ul>
        </section>
    )
}