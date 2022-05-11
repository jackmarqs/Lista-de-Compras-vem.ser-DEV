import './App.css';
import {Menu, Layout} from 'antd';
import {PlusOutlined, UnorderedListOutlined, HomeOutlined} from '@ant-design/icons';
import Routes from './routes';
import { useHistory } from 'react-router-dom';
import github from "./pages/assets/github.png";
import linkedin from "./pages/assets/linkedin.png";
import mail from "./pages/assets/mail.png";
const {Header, Footer, Sider, Content} = Layout;

function App() {
  let history = useHistory();

  function handleClick(){
    history.push("/adicionar");
  }

  return (
    <div className="main">
      <Layout className='main_content'>
        <Header className='header'>Lista de Compras do Jack</Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu_section'>
              <Menu.Item key={1} icon={<HomeOutlined />} onClick={() => history.push('/')}>
                Início
              </Menu.Item>
              <Menu.Item key={2} icon={<PlusOutlined />} onClick={handleClick}>
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={3} icon={<UnorderedListOutlined />} onClick={() => history.push('/produtos')}>
                Listar Produtos
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Routes />
          </Content>
      </Layout>
      <Footer className='footer'>
        Todos os direitos reservados ©
        <br/>
        <a href="https://www.github.com/jackmarqs/" alt="github">
          <img src={github} alt='github' className='github'></img>
        </a>
        <a href="mailto:jackmarquesnunes@gmail.com" alt="mail">
          <img src={mail} alt='mail' className='mail'></img>
        </a>
        <a href="https://www.linkedin.com//in/jackmarqs/" alt="linkedin">
          <img src={linkedin} alt='github' className='linkedin'></img>
        </a>
        <br/>
        API de Lista de Compras - 2022
      </Footer>
    </Layout>
    </div>
  );
}

export default App;
