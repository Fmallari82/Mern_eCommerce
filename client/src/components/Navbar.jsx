import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge'

const Container = styled.div`
    background-color: black;
    color: white;

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    background-color: black;
    color: white;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    `
const Logo = styled.img`
    width: 200px;
    `

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 25px;

    `
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0px 10px;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>Eng</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"pink", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo src='https://www.wtfmir.shop/uploads/b/5bed1b89b4bc609a6e994e2e7ab0d23ceaad66620c3f25ed13de0b4470104960/eyes_logo_purple_1612730318.png?width=400' />
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary"> 
                    <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar