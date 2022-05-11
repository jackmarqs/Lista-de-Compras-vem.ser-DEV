import './styles.css';
import React, {useState} from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import {message, Form, Input, Button, InputNumber} from 'antd';
import Logo2 from '../assets/logo2.png';


export default function AdicionarProduto(){
    const history = useHistory()
    const [disabled, setDisabled] = useState(false)

    async function handleSubmit(produto){
        setDisabled(true);
        api.post('/item', produto)
            .then((response) => {
                if(response.status === 201){
                    message.success('Produto adicionado com sucesso!');
                    history.push('/produtos');
                }
            })
            .catch((err) => {
                message.error("Aconteceu um erro ao adicionar o produto" + err.response.data.message)
            })
        
    }
    return(
        <div className='produto_container'>
                <h1 className='h1_editar'>Adicionar novo produto</h1>
                <br/>
            <div>
                <img src={Logo2} alt='logo2' className='logo'/>
                <Form
                name='submitProduto'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={handleSubmit}
                autoComplete="off"
                >
                    <Form.Item
                    label='Nome do item'
                    name="name"
                    rules={[{required: true, message: "O nome do item precisa estar preenchido!"}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Descrição: '
                    name="description"
                    rules={[{required: true, message: "A descrição do item precisa estar preenchida!"}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Quantidade'
                    name="quantity"
                    rules={[{required: true, message: "A quantidade do item precisa estar preenchida!"}]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item>
                        <Button className='botao' type='primary' htmlType='submit' disabled={disabled} > 
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}