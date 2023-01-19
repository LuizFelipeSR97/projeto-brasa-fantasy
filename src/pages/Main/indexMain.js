import styled from "styled-components";

export default function MainPage() {

    return (
        <>
        <TopBar>
            <Content>
                BARRA
            </Content>
        </TopBar>
        Main Page
        </>
    )
}

const TopBar = styled.div`
    height: 70px;
    width: 100%;
    background-color: #A1A1A1;
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    width: 1200px;
    background-color: green;
    display: flex;
    align-items: center;
`