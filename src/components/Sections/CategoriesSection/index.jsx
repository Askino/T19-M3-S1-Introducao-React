// import image1 from '../../../Assets/Category1.svg'
// import image2 from '../../../Assets/Category2.svg'
// import style from "./style.module.scss"
// import { CategoryCard } from "./CategoryCard"
import { categories } from "../../../data/categories"
import { CategoryCard } from "./CategoryCard"

export const CategoriesSection = () => {

    //categoryCard("Sapatos", "http://...")
    return (
        <div className='container'>
            <section >
                <div>
                    <h2 className='title2'>CATEGORIAS</h2>
                    <ul>
                        {/* <li><CategoryCard title="Sapatos" image={image1} /></li>
                        <li><CategoryCard title="Bolsas" image={image2} /></li> */}

                            {
                                categories.map((category) =>{
                                    return(
                                        <li key={category.id}>
                                            <CategoryCard title={category.name} image={category.img} />
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>
            </section>
        </div>
    )
}
