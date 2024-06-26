import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: "30 vh"})}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  backgroudn-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 550;
  opacity: 0.5
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
          <Title>{item.title}</Title>
          <Button>Buy</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem