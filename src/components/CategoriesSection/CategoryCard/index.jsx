export const CategoryCard = ({title, image}) =>{
    return(
        <>
        <img src={image} alt={`Categoria ${title}`}/>
        <h3>{title}</h3>
        
        
        </>
    )
}

// const categoryCard = (title, image) =>{
//     return {title, image}
// }