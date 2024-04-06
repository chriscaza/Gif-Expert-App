import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = ( newCategory ) => {
    setCategories([ newCategory, ...categories ]) 
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        {/* Cuando una función flecha retorna solo el parametro se puede omitir el parametro */}
        {/* Ej: el siguiente método sería así: (event) => onAddCategory(event), es lo mismo */}
        <AddCategory onNewCategory={ onAddCategory }/>

        {/* listado de Gif */}
        <ol>{ categories.map( category => { return <li key={ category }>{ category }</li> } ) }</ol>
    </>
  )
}
