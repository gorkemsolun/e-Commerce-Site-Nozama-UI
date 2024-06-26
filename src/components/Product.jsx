import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined, SearchOutlined, StarBorderOutlined} from "@material-ui/icons"


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  position: relative;
  transition: all 0.5s ease;

  &:hover ${Info} {
    opacity: 1;
    
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlined></ShoppingCartOutlined>
        </Icon>
        <Icon>
          <SearchOutlined></SearchOutlined>
        </Icon>
        <Icon>
          <StarBorderOutlined></StarBorderOutlined>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product