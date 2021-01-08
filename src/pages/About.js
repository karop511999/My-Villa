import React from 'react'
import styled from 'styled-components';
import Aboutinfo from '../data/Aboutinfo';
const Section =styled.section`
width:100%;
height:100%;
padding: 4rem 0rem;
background: black;
`;
const Container =styled.div`
padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`;
const ColoumLeft =styled.div`
display: flex;
flex-direction: column;
justify-content: initial;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse})=> (reverse ? '2' : '1')};

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #fff;
}
p{
    margin-bottom: 2rem;
    color: #fff;
}
`;
const ColoumRight =styled.div`
padding: 1rem 2rem;
order: ${({reverse})=> (reverse ? '2' : '1')};
display: flex;
justify-content: center;
align-items: center;

img{
    width: 100%;
    height:100%;
    object-fit: cover;

    @media screen and( max-width: 768px){
        width:90%;
        height: 90%
    }
}
`;



export const About = () => {
    return (
        
        <Section>
            <Container>
                <ColoumLeft>
                <h1>{Aboutinfo.heading}</h1>
                <p>{Aboutinfo.paragraphOne}</p>
                <p>{Aboutinfo.paragraphTwo}</p>
                <p>{Aboutinfo.paragraphThree}</p>
                <p>{Aboutinfo.moto}</p>
                <p>{Aboutinfo.greet}</p>
                </ColoumLeft>
                <ColoumRight reverse={Aboutinfo.reverse}>
                <img src={Aboutinfo.image} alt='home'/>
                </ColoumRight>
            </Container>
        </Section>
    )
}

export default About