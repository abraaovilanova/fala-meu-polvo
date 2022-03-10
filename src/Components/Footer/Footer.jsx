import './Footer.css'

import {BsFillHouseDoorFill, BsBoxArrowInRight} from "react-icons/bs"
import { connect } from 'react-redux'

import { SelectLanguageAction } from '../../redux/actions/langAction'

const Footer = (props) => {
    const { selectedLang } = props.language
    const { selectLanguage } = props

    return (
    <footer className="footer">
        <ul>
            <li>
                <p>{selectedLang}</p>
            </li>
            <li onClick={()=>selectLanguage('')}>
                <BsFillHouseDoorFill />
                <p>Início</p>
            </li>
            <li>
                <BsBoxArrowInRight />
                <p>Login</p>
            </li>
        </ul>
    </footer> 
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Footer)