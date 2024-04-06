import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]) 
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        {/* Cuando una función flecha retorna solo el parametro se puede omitir el parametro */}
        {/* Ej: el siguiente método sería así: (event) => onAddCategory(event), es lo mismo */}
        <AddCategory onNewCategory={ onAddCategory }/>

        { 
          categories.map( category => 
            <GifGrid key={ category } category={category}/> 
          )
        }

    </>
  )
}
