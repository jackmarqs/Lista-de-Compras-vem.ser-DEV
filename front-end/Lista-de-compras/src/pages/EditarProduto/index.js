import './styles.css';
import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import { useHistory, useLocation } from 'react-router-dom';
import { message, Input, Button, InputNumber} from 'antd';
import Logo2 from '../assets/logo2.png';

export default function EditarProduto(){
    const history = useHistory();
    const location = useLocation();
    const [produtoEdit, setProdutoEdit] = useState({});

    useEffect(() => {
        console.log(location.state);
        setProdutoEdit({...location.state});
    }, [location])

    async function handleSubmit(produtoEdit){
        api.patch(`/item/${produtoEdit.id}`, produtoEdit )
        .then((response) =>{
            if(response.status === 200){
                message.success('Produto editado com sucesso!', 5, true);
                history.push('/produtos');
            }
        })
        .catch((err) => {
            message.warning("Aconteceu um erro inesperado " + err.response.data.message[0], 5);
        })
    }

    return(
        <div className='produto_container'>
            <h1 className='h1_editar'>Editar Produto</h1>
            <br/>
            <div className='produto_edit'>
            <img src={Logo2} alt='logo2' className='logo'/>
                <div className='produto_campo'>
                    <span className='produto_label'>Nome do produto:</span>
                    <Input value={produtoEdit?.name} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return {...produtoEdit, name: e.target.value};
                        });
                    }}/>
                </div>
                <div className='produto_campo'>
                    <span className='produto_label'>Descrição do produto:</span>
                    <Input value={produtoEdit?.description} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return {...produtoEdit, description: e.target.value}; 
                        });
                    }}/>
                </div>
                <div className='produto_campo'>
                    <span className='produto_label'>Quantidade do produto:</span>
                    <InputNumber value={produtoEdit?.quantity} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return {...produtoEdit, quantity: e}; 
                        });
                    }}/>
                </div>
                <Button type='primary' className='editar_btn' onClick={() => handleSubmit(produtoEdit)}>Finalizar edição</Button>
            </div>
        </div>
    )
}