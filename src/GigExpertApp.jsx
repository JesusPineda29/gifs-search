import { useState } from "react"
import AddCategory from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"




export default function GigExpertApp() {

  const [categories, setCategories] = useState(['One Punch']); // set categories es una funcion que se encarga de actualizar el estado de la lista

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]); // toma una copia de la lista y agrega el nuevo valor
  }


  return (
    <>

      <h1>GigExpertApp</h1>


      <AddCategory

        onNewCategory={onAddCategory}
        currentCategories={categories}
        
      />





      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }




    </>
  )
}




