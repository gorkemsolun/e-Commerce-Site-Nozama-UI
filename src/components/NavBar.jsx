import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container  = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content:  space-between;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;
const Center = styled.div`    
    flex: 1;
    text-align: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 1.5px;
`;


const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Nozama-2</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign in</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default NavBar;