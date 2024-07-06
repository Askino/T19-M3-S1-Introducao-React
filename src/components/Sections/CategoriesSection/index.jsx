import image1 from '../../../Assets/Category1.svg'
import image2 from '../../../Assets/Category2.svg'
import { CategoryCard } from "./CategoryCard"
import style from "./style.module.scss"

export const CategoriesSection = () => {

    //categoryCard("Sapatos", "http://...")
    return (
        <div className='container'>
            <section >
                <div>
                    <h2 className='title2'>CATEGORIAS</h2>
                    <ul>
                        <li><CategoryCard title="Sapatos" image={image1} /></li>
                        <li><CategoryCard title="Bolsas" image={image2} /></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
