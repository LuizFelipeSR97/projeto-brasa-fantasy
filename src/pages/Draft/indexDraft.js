import styled from "styled-components";
import logo from '../../assets/images/logo-fantasy-alt.png';
import field from '../../assets/images/soccer-field.jpg';
import genericPerson from '../../assets/images/generic-person.jpg';
import genericPerson2 from '../../assets/images/generic-person-2.png';
import genericLogo from '../../assets/images/generic-logo.png';
import fotoJogador from '../../assets/images/19110282.png';
import fotoTime from '../../assets/images/AVA.png';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function DraftPage() {

    const [page, setPage] = useState('availables');
    const navigate = useNavigate();
    console.log(page)

    return (
        <>
            <Page>
                <TopBar>
                    <ContentBar>
                        <img src={logo}/>
                        <div className='button'>
                            <div className="team">Time</div>
                        </div>
                        <ion-icon name="add-outline" onClick={() => navigate('/my-team')}/>
                    </ContentBar>
                </TopBar>
                <Content>
                    <ChoicesOrder>
                        <div className="round">
                            <h1>Rodada: 1</h1>
                            <h2>36</h2>
                        </div>
                        <div className="choice">
                            <div className="previousChoice"/>
                            <div className="pick">#5</div>
                            <div className="name">NOME DO JOGADOR</div>
                            <img src={fotoJogador}/>
                        </div>
                        <div className="bar"/>
                        <div className="choice">
                            <div className="previousChoice"/>
                            <div className="pick">#6</div>
                            <div className="name">NOME DO JOGADOR</div>
                            <img src={fotoJogador}/>
                        </div>
                        <div className="bar"/>
                        <div className="choice">
                            <div className="currentChoice"/>
                            <div className="pick">#7</div>
                            <div className="name">NOME DO TIME</div>
                            <img src={genericPerson2}/>
                        </div>
                        <div className="bar"/>
                        <div className="choice">
                            <div className="pick">#8</div>
                            <div className="name">NOME DO TIME</div>
                            <img src={genericPerson2}/>
                        </div>
                        <div className="bar"/>
                        <div className="choice">
                            <div className="pick">#9</div>
                            <div className="name">NOME DO TIME</div>
                            <img src={genericPerson2}/>
                        </div>
                    </ChoicesOrder>
                    {page==='availables' ? 
                    <>
                    AVAILABLES
                    </>
                    :
                    page==='myTeam' ? 
                    <>
                        <Left>
                            <img src={field}/>
                            <div className="TEC"><img src={fotoJogador}/></div>
                            <div className="GK"><img src={fotoJogador}/></div>
                            <div className="LAT1"><img src={genericPerson}/></div>
                            <div className="ZAG1"><img src={fotoJogador}/></div>
                            <div className="ZAG2"><img src={fotoJogador}/></div>
                            <div className="LAT2"><img src={genericPerson}/></div>
                            <div className="MEI1"><img src={genericPerson}/></div>
                            <div className="MEI2"><img src={fotoJogador}/></div>
                            <div className="MEI3"><img src={fotoJogador}/></div>
                            <div className="ATA1"><img src={fotoJogador}/></div>
                            <div className="ATA2"><img src={genericPerson}/></div>
                            <div className="ATA3"><img src={genericPerson}/></div>
                            <div className="bancoRes"/>
                            <div className="RES1"><img src={genericPerson}/></div>
                            <div className="RES2"><img src={genericPerson}/></div>
                            <div className="RES3"><img src={genericPerson}/></div>
                            <div className="RES4"><img src={genericPerson}/></div>
                            <div className="RES5"><img src={genericPerson}/></div>
                            <div className="RES6"><img src={genericPerson}/></div>
                        </Left>
                        <Right>
                            <div className="player">
                                <img className="photo" src={fotoJogador}/>
                                <div className="info">
                                    <h1>André Balada</h1>
                                    <h2>ATA</h2>
                                </div>
                                <img className="logo" src={fotoTime}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={fotoJogador}/>
                                <div className="info">
                                    <h1>André Balada</h1>
                                    <h2>ATA</h2>
                                </div>
                                <img className="logo" src={fotoTime}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                            <div className="player">
                                <img className="photo" src={genericPerson}/>
                                <div className="info">
                                    <h1>Jogador</h1>
                                    <h2>POS</h2>
                                </div>
                                <img className="logo" src={genericLogo}/>
                            </div>
                        </Right>
                    </>
                    : 
                    <>
                    CHOICES
                    </>}
                </Content>
                <BottomBar>
                    <ContentBottomBar>
                        <div className="option" onClick={() => setPage('myTeam')}>
                            MEU TIME
                        </div>
                        <div className="bar"/>
                        <div className="option" onClick={() => setPage('availables')}>
                            DISPONÍVEIS
                        </div>
                        <div className="bar"/>
                        <div className="option" onClick={() => setPage('choices')}>
                            ESCOLHAS
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
        cursor: default;
    }
`;

const ContentBar = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    position: relative;

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

    .team{
        font-size: 16px;
        margin-left: 15px;
        width: 170px;
        overflow-x: hidden;
        overflow-y: hidden;
        cursor: default;
    }

    ion-icon{
        color: #FFFFFF;
        font-size: 40px;
        position: absolute;
        right: 10px;
        top: 15px;
        transform: rotate(45deg);
        cursor: pointer;
    }
`;

const Content = styled.div`
    background-color: #f2efef;
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const BottomBar = styled.div`
    height: 60px;
    width: 100%;
    background-color: #003cc9;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const ContentBottomBar = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    color: #FFFFFF;
    box-sizing: border-box;

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

    .bar{
        height: 40px;
        width: 2px;
        background-color: gray;
    }

    .option{
        font-size: 15px;
        width: 150px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;

const ChoicesOrder = styled.div`
    margin-top: 10px;
    margin-left: 200px;
    margin-right: 200px;
    background-color: black;
    color: white;
    width: 900px;
    height: 140px;
    display: flex;
    align-items: center;
    border-radius: 25px;

    .round{
        background-color: #0030A3;
        height: 100%;
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 25px 0 0 25px;

        h1{
            font-size: 20px;
            margin-bottom: 20px;
        }

        h2{
            font-family: 'LCD', sans-serif;
            font-size: 70px;
        }
    }

    .choice{
        height: 100%;
        width: 140px;
        margin-left: 5px;
        position: relative;

        .pick{
            font-size: 15px;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .name{
            font-size: 20px;
            text-align: center;
            height: 40px;
            position: absolute;
            left: 10px;
            width: 120px;
            overflow-x: hidden;
            overflow-y: hidden;
        }

        .currentChoice{
            background-color: rgba(173, 216, 230, 0.4);
            z-index: 2;
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .previousChoice{
            background-color: rgba(206, 61, 61, 0.4);
            z-index: 2;
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }

    .bar{
        height: 120px;
        width: 2px;
        background-color: gray;
        margin-left: 5px;
    }

    img{
        width: 70px;
        height: 70px;
        position: absolute;
        bottom: 0;
        left: 35px;
        border-radius: 30px 30px 0 0;
    }
`;

const Left = styled.div`
    background-color: green;
    width: 400px;
    height: 600px;
    position: relative;
    margin-top: 45px;
    margin-bottom: 45px;

    img{
        width: 400px;
        height: 600px;
        cursor: default;
    }

    .bancoRes{
        position: absolute;
        width: 50px;
        height: 470px;
        background-color: #CACACA;
        right: -50px;
        top: 70px;
        border-radius: 0 15px 10px 0;
    }

    .TEC{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 10px;
        left: 10px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .GK{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 15px;
        left: 175px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .LAT1{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 140px;
        left: 40px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .LAT2{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 140px;
        right: 40px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .ZAG1{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 120px;
        left: 120px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .ZAG2{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 120px;
        right: 120px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .MEI1{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 280px;
        left: 80px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .MEI2{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 280px;
        right: 175px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .MEI3{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        bottom: 280px;
        right: 80px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .ATA1{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 120px;
        left: 60px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .ATA2{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 80px;
        left: 175px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .ATA3{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 120px;
        right: 60px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .RES1{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 80px;
        right: -40px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .RES2{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 160px;
        right: -40px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .RES3{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 240px;
        right: -40px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .RES4{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 320px;
        right: -40px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .RES5{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 400px;
        right: -40px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    .RES6{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: absolute;
        top: 480px;
        right: -40px;
    
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }
`;

const Right = styled.div`
    width: 650px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 35px;

    .player{
        height: 60px;
        width: 300px;
        color: blue;
        background-color: #FFFFFF;
        border: 1px solid #CACACA;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-left: 15px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .info{
            background-color: #F2EFEF;
            height: 100%;
            width: 200px;
            margin-left: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .photo{
            position: absolute;
            left: 0;
            bottom: 0;
            height: 50px;
            width: 50px;
        }

        .logo{
            position: absolute;
            right: 10px;
            height: 30px;
            width: 25px;
        }

        h1{
            font-size: 20px;
            margin-left: 10px;
            color: #000000;
        }

        h2{
            font-size: 12px;
            font-weight: 700;
            margin-top: 10px;
            margin-left: 10px;
            color: #707070;
        }
    }
`;