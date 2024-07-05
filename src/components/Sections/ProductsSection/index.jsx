import { ProductCard } from "./ProductCard"
import Product1 from '../../../Assets/Product1.svg'
import Product2 from '../../../Assets//Product2.svg'
import Product3 from '../../../Assets/Product3.svg'
import Product4 from '../../../Assets/Product4.svg'
export const ProductsSection = () => {
    return (
        <section>
            <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
            <ul>
                <li><ProductCard title="Blazer Branco Elegante" price={490} image={Product1}/></li>
                <li><ProductCard title="Sapatos Amarelos" price={490} image={Product2}/></li>
                <li><ProductCard title="Blazer Laranja" price={320} image={Product3}/></li>
                <li><ProductCard title="Calça Preta" price={140} image={Product4}/></li>
            </ul>
        </section>
    )
}