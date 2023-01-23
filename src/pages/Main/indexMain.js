import styled from "styled-components";
import logo from '../../assets/images/logo-fantasy-alt.png';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function MainPage() {

    const [menuVisibility, setMenuVisibility] = useState('hidden');
    const [searchVisibility, setSearchVisibility] = useState('hidden');
    const navigate = useNavigate();

    function handleSearch(e){
        if (e.target.value.length>2){
            setSearchVisibility('visible');
        } else {
            setSearchVisibility('hidden');
        }
    }

    return (
        <>
            <Menu menuVisibility={menuVisibility}>
                <MenuContent>
                    <div className='login'>
                        <h1>Olá, Fulano</h1>
                        <ion-icon name="add-outline" onClick={() => setMenuVisibility('hidden')}/>
                    </div>
                    <div className='options'>
                        <h2 onClick={()=>navigate('/my-account')}>MINHA CONTA</h2>
                        <h2 onClick={()=>navigate('/my-teams')}>MEUS TIMES</h2>
                        <h2 onClick={()=>navigate('/my-leagues')}>MINHAS LIGAS</h2>
                        <h2 onClick={()=>navigate('/simulator')}>SIMULADOR</h2>
                    </div>
                </MenuContent>
            </Menu>
            <Page>
                <TopBar>
                    <ContentBar>
                        <img src={logo} onClick={()=>navigate('/')}/>
                        <div className='button'>
                            <div className="team" onClick={()=>navigate('/my-team')}>Time</div>
                            <div className="bar"/>
                            <ion-icon name="chevron-down-outline"/>
                        </div>
                        <input name='searchBar' onChange={handleSearch}/>
                        <ion-icon name="menu-outline" onClick={()=>setMenuVisibility('visible')}/>
                        <Search searchVisibility={searchVisibility}>
                            <div className="teamSearched">
                                TIME 1
                            </div>
                            <div className="teamSearched">
                                TIME 2
                            </div>
                            <div className="teamSearched">
                                TIME 3
                            </div>
                        </Search>
                    </ContentBar>
                </TopBar>
                <Content>
                    <Ad>
                        BANNER AQUI
                    </Ad>
                    <MainNews>
                        <div className="left">
                            A
                            <ion-icon name="chevron-back-circle"></ion-icon>
                        </div>
                        <div className="center">
                            B
                        </div>
                        <div className="right">
                            C
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                    </MainNews>
                    <News>
                        <New>
                            <img src="https://img.freepik.com/fotos-premium/close-de-um-jogador-de-futebol-que-chuta-a-bola_207634-4089.jpg"/>
                            <div className="info">
                                <h1>Título da Notícia 1</h1>
                                <h2>Aqui vem a informação da notícia 1. Vem um texto grande mas não tão grande assim.</h2>
                                <h3>Há 3 dias</h3>
                            </div>
                        </New>
                        <Line/>
                        <New>
                            <img src="https://ufmg.br/thumbor/D6gTEKc3_MHN6Crovy718VMfhio=/0x0:2052x1371/712x474/https://ufmg.br/storage/d/1/8/2/d182538775b056b88e593bc4dd73b655_15302000519104_1572147793.jpg"/>
                            <div className="info">
                                <h1>Título da Notícia 2</h1>
                                <h2>Aqui vem a informação da notícia 2. Vem um texto grande mas não tão grande assim.</h2>
                                <h3>Há 4 dias</h3>
                            </div>
                        </New>
                        <Line/>
                        <New>
                            <img src="https://img.freepik.com/fotos-gratis/jogadores-de-futebol-em-acao-no-estadio-profissional_654080-1181.jpg"/>
                            <div className="info">
                                <h1>Título da Notícia 3</h1>
                                <h2>Aqui vem a informação da notícia 3. Vem um texto grande mas não tão grande assim.</h2>
                                <h3>Há 8 dias</h3>
                            </div>
                        </New>
                        <div className="seeMore">Ver mais</div>
                    </News>
                </Content>
                <BottomBar>
                    <ContentBottomBar>
                        <img src={logo} onClick={()=>navigate('/')}/>
                            <h2>© Copyright 2000-2023 Brasa Fantasy</h2>
                            <div className="links">
                                <h1>Princípios editoriais</h1><h1>|</h1><h1>Política de privacidade</h1><h1>|</h1><h1>Fale conosco</h1>
                            </div>
                    </ContentBottomBar>
                </BottomBar>
            </Page>
        </>
    )
}

const Page = styled.div`
    background-color: #eaeaea;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: #003cc9;
    display: flex;
    justify-content: center;
    z-index: 1;

    img{
        width: 50px;
        margin-left: 20px;
        cursor: pointer;
    }
`;

const ContentBar = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    position: relative;

    ion-icon{
        color: white;
        font-size: 40px;
        margin-right: 30px;
        position: absolute;
        right: 0px;
        cursor: pointer;
    }

    input{
        width: 300px;
        height: 40px;
        background: white;
        border-radius: 5px;
        border: 1px solid #ffffff;
        position: absolute;
        right: 150px;
        padding-left: 15px;
        color: black;
        font-size: 18px;
        z-index:1;
    }

    h3{
        margin-bottom: 10px;
    }

    h4{
        font-size: 16px;
        margin-left: 15px;
    }

    .button{
        margin-left: 50px;
        width: 200px;
        height: 40px;
        background: #0030a3;
        border-radius: 5px;
        display: flex;
        align-items: center;
        position: relative;
        color: white;
    }
    
    .button ion-icon{
        color: white;
        font-size: 25px;
        position: absolute;
        right: 0 px;
        margin-right: 5px;
        cursor: pointer;
    }

    .team{
        font-size: 16px;
        margin-left: 15px;
        width: 150px;
        overflow-x: hidden;
        overflow-y: hidden;
        cursor: pointer;
    }

    .bar{
        height: 25px;
        background-color: #D3D3D3;
        width: 1px;
    }
`;

const Search = styled.div`
    width: 300px;
    background-color: red;
    position: absolute;
    top: 20px;
    right: 150px;
    padding-top: 45px;
    display: ${props => props.searchVisibility === 'hidden' ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;

    .teamSearched{
        width: 250px;
        height: 50px;
        background-color: blue;
        margin-bottom: 10px;
    }

`;

const Menu = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #62A8F8;
    z-index: 2;
    display: ${props => props.menuVisibility === 'hidden' ? 'none' : 'flex'};
    justify-content: center;
`;

const MenuContent = styled.div`
    position: relative;
    width: 1200px;
    display: flex;
    flex-direction: column;
    color: white;

    .login{
        height: 120px;
        width: 100%;
    }

    .options{
        margin-top: 150px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1{
        margin: 60px auto auto 80px;
        font-size: 25px;
        cursor: default;
    }

    h2{
        font-size: 30px;
        margin-bottom: 50px;
        font-weight: 700;
        cursor: pointer;
    }

    ion-icon{
        color: white;
        font-size: 40px;
        position: absolute;
        right: 30px;
        top: 20px;
        transform: rotate(45deg);
        cursor: pointer;
    }
`;

const Content = styled.div`
    background-color: #f2efef;
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 70px;
`;

const Ad = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    width: 1000px;
    height: 150px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    cursor: pointer;
`;

const MainNews = styled.div`
    margin-bottom: 60px;
    width: 1120px;
    height: 500px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 0;

    ion-icon{
        position: absolute;
        left: 50px;
        top: 220px;
        font-size: 60px;
        color: #F2EFEF;
        cursor: pointer;
    }
    
    .left{
        position: relative;
        background-color: blue;
        height: 100%;
        width: 150px;
        cursor: pointer;
    }

    .center{
        background-color: red;
        height: 100%;
        width: 800px;
        cursor: pointer;
    }

    .right{
        position: relative;
        background-color: green;
        height: 100%;
        width: 150px;
        cursor: pointer;
    }
`;

const News = styled.div`
    margin-bottom: 20px;
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .seeMore{
        width: 100%;
        height: 40px;
        background-color: #003cc9;
        color: #FFFFFF;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const New = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    cursor: pointer;

    img{
        width: 350px;
    }

    .info{
        display: flex;
        flex-direction: column;
    }

    h1{
        font-size: 25px;
        font-weight: 700;
        margin-left: 15px;
        margin-top: 15px;
        color: #003cc9;
    }

    h2{
        font-size: 18px;
        margin-left: 15px;
        margin-top: 20px;
        color: #000000;
    }

    h3{
        font-size: 13px;
        margin-left: 15px;
        margin-top: 20px;
        color: #777777;
    }
`;

const Line = styled.div`
    background-color: #C8C8C8;
    width: 100%;
    height: 2px;
    margin: 10px 0;
`;

const BottomBar = styled.div`
    height: 60px;
    width: 100%;
    background-color: #383636;
    display: flex;
    justify-content: center;
`;

const ContentBottomBar = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    color: #FFFFFF;

    img{
        position: absolute;
        left: 30px;
        top: 5px;
        width: 60px;
        cursor: pointer;
    }

    ion-icon{
        color: white;
        font-size: 40px;
        margin-right: 30px;
        position: absolute;
        right: 0px;
        cursor: pointer;
    }

    h1{
        font-size: 15px;
        margin-left: 10px;
    }

    h2{
        margin-left: 120px;
        margin-bottom: 10px;
        font-size: 10px;
    }

    .links{
        margin-right: 20px;
        margin-bottom: 10px;
        display: flex;
        cursor: pointer;
    }
`;
