import { useState } from "react"
import AddCategory from "./components/AddCategory"
export default function GigExpertApp() {
  

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']); // set categories es una funcion que se encarga de actualizar el estado de la lista

  const handleAddCategory = () => {
    setCategories([...categories, 'Naruto']); // toma una copia de la lista y agrega el nuevo valor
  }


  return (
    <>
      {/* titulo */}
      <h1>GigExpertApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories}/>

      {/* lista de gifs */}


      <ol>
        {
          categories.map(catego=>{
            return (
              <li key={catego}>{catego}</li>
            )
          })
        }
      </ol>
      
      {/* gif item */}

    </>
  )
}




