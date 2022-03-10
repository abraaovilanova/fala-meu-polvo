import './LangCard.css'

export default ({ language, handleSelect }) => {
    return(
        <div className="lang-card" onClick={()=>handleSelect(language)}>
            { language }
        </div>       
    )
}