import { useState } from "react"

export default function GigExpertApp() {
  

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

  console.log(categories)

  return (
    <>
      {/* titulo */}
      <h1>GigExpertApp</h1>

      {/* input */}

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




