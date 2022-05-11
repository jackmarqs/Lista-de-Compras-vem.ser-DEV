import {useHistory} from 'react-router-dom';
import './styles.css';
import Logo from '../assets/logo.png';
import {Button} from 'antd';

export default function Inicio(){
    const history = useHistory();
    async function listarProdutos(){
        history.push('/produtos')
    }
    return(
        <div className='inicio_container'>
            <section>
            <a href="https://www.instagram.com/jackmarqs/" alt="instagram">
                <img src={Logo} alt='logo' className='center'/>
            </a>
                <br/>
                <Button className='center' onClick={listarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
}