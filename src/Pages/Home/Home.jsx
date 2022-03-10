import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { url }  from '../../api/api'

import LangCard from "../../Components/LangCard/LangCard"
import TagCard from '../../Components/TagCard/TagCard'
import Footer from '../../Components/Footer/Footer'
import TextCard from '../../Components/TextCard/TextCard'

import { connect } from 'react-redux'
import { SelectLanguageAction } from '../../redux/actions/langAction'

import './Home.css'

import mockData from './mockData.json'

const Home = (props) => {

    const { selectLanguage } = props
    const { selectedLang } = props.language
    const [tags, setTags] = useState(['Le verbe «Être»'])
    const [selectedTag, setSelectedTag] = useState('')
    const [indexList, setIndexList] = useState(0)
    const TextList = mockData.frenchText
    const cardColorList = [
      'rgb(229,36,59)','rgb(221,116,58)','rgb(76,159,56)','rgb(197,25,45)','rgb(255,58,33)','rgb(38,189,226)','rgb(31,195,11)'
    ]
  
    const handleSwipe = (idx) => {
      setIndexList(idx)
    }
  
    // useEffect(async ()=>{
    //   const dados = await axios.get(url +'/sentence/tags')
    //   setTags(dados.data.tags)
    // },[])
  
    const handleClick = (elem) => {
      setSelectedTag(elem)
    }
  
    const handleClose = () => {
      setSelectedTag('')
    }


    const handleSelect = (selectedLanguage) => {
        selectLanguage(selectedLanguage)
    } 

    return(
        <div className="Home">
            {!selectedLang&&(
                <>
                    Selecione o idioma
                    <div className="Lang-Cards">
                        <LangCard handleSelect={handleSelect} language={'Inglês'} />
                        <LangCard handleSelect={handleSelect} language={'Françes'} />
                    </div>
                </>
            )}

            {
                !selectedTag && selectedLang ? <div style={{marginBottom: '5rem'}}>
            
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
                <Footer></Footer>
                </div> : '' }
                { selectedTag && (
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
    )
}

const mapStateToProps = (state) => {
    return {
        language: state,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        selectLanguage: (userState) => {
            dispatch(SelectLanguageAction(userState))
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)