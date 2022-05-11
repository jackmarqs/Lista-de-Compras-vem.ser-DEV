import React, {useEffect, useState} from "react";
import api from '../../services/api';
import { useParams, useHistory } from "react-router-dom";
import './styles.css';
import { Card, message, Button, Modal} from "antd";
import { ExclamationCircleOutlined, EditOutlined } from '@ant-design/icons';
import Logo2 from '../assets/logo2.png';

export default function DetalhesProduto(){
    const [produto, setProduto] = useState([])
    const history = useHistory()
    let {id} = useParams()
    
    const { confirm } = Modal;

    function showConfirm(produto) {
        confirm({
            title: 'Confirma a exclusão do produto?',
            icon: <ExclamationCircleOutlined />,
            content: produto.name,
            onOk() {
                console.log("Confirmar")
                handleDelete(produto.id)
            },
            onCancel() {
            console.log('Cancel');
            },
        });
    }

    function handleDelete(id){
        api.delete(`/item/${id}`)
        .then((response) =>{
            if(response.status === 200){
                message.success("Produto excluído com sucesso!")
                history.push('/produtos')
            }
        })
        .catch((err) =>{
            message.error("Aconteceu um erro inesperado!")
        })
    }

    useEffect(() =>{
        api.get(`/item/${id}`)
        .then((response) =>{
            setProduto(response.data)
        })
        .catch((err) =>{
            message.error("Aconteceu um erro inesperado!")
        })
    }, [id])

    return(
        <div className="produto_container">
            <h1 className="h1_editar">Detalhes do produto</h1>
            <br/>
            <div className="produto_card_container">
                <img src={Logo2} alt='logo2' className='logo'/>
                <Card key={produto.id} title={produto.name} bordered={false}>
                    <p>ID: {produto.id}</p>
                    <p>Descrição: {produto.description}</p>
                    <p>Quantidade: {produto.quantity}</p>
                    <p>UpdatedAt: {produto.updatedAt}</p>
                    <hr/>
                    <div className="produto_card_actions">
                        <Button type="primary" icon={<EditOutlined/>} onClick={() =>  history.push(`/editar/${produto.id}`, produto)}>Editar</Button>
                        <Button type="primary" danger onClick={() => showConfirm(produto)}>Excluir</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}