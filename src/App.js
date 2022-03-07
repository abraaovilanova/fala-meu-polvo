import React, { useState, useEffect } from 'react'

// Componentes
import TextCard from './Components/TextCard/TextCard'
import TagCard from './Components/TagCard/TagCard'

import axios from 'axios'
import { url } from './api/api'

function App() {
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState('')
  const [indexList, setIndexList] = useState(0)
  const TextList = ['- Je ne suis pas marié. - Moi non plus.','Je suis une pomme', 
  'Il est un garçon', 'Elle est une orange','Tu es une fille',
  '- Vous êtes de Paris, monsieur Ricard? - Non, je suis de Marseille','- Tu travailles le samedi? - Pas le matin'
]
  const cardColorList = [
    'rgb(229,36,59)','rgb(221,116,58)','rgb(76,159,56)','rgb(197,25,45)','rgb(255,58,33)','rgb(38,189,226)','rgb(31,195,11)'
  ]

  const handleSwipe = (idx) => {
    setIndexList(idx)
  }

  useEffect(async ()=>{
    const dados = await axios.get(url +'/sentence/tags')
    setTags(dados.data.tags)
  },[])

  const handleClick = (elem) => {
    setSelectedTag(elem)
  }

  const handleClose = () => {
    setSelectedTag('')
  }


  return (
    <div className="App">
      {
        !selectedTag ? <div>
          <h3>Escolha uma tag para praticar...</h3>
            { tags.map((elem,idx) => {
              return(
                <TagCard 
                  tagName={elem} 
                  progress={idx*5} 
                  bgColor={cardColorList[idx % 7]} 
                  key={`${idx}-${elem}`}
                  handleClick={()=>handleClick(elem)}
                  />
              )
            }) }
        </div> :
        (
          <TextCard 
            mainText={TextList[indexList]} 
            mainTag={"L'article"}
            textIndex={indexList}
            handleSwipe={handleSwipe}
            handleClick={handleClose}
            textListLength={TextList.length}
            cardColor={cardColorList[indexList % 7]}
          />
        )
      }
  
    </div>
  );
}

export default App;
