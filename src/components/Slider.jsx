import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import {sliderItems} from "../data";
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex*-100}vW);
`
const Slide = styled.div`
    width: 100vW;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=>props.bg};
`
const ImageContainer = styled.div`
    height: 100%;
    display: 1;
`
const InfoContainer = styled.div`
    display: 1;
`
const Image = styled.img`
    height: 80%;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 3px;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined>
            </ArrowLeftOutlined>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>Buy Button</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined>
            </ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider