import React from 'react'
import styled from 'styled-components';
import Contactinfo from '../data/Contactinfo';
import {NavLink} from 'react-router-dom';
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
const ColoumRight =styled.div`

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



 const Contact = () => {
    return (
        
        <Section>
            <Container>
                <ColoumLeft reverse={Contactinfo.reverse}>
                <img src={Contactinfo.image} alt='home'/>
                </ColoumLeft>
                <ColoumRight >
                <h1>{Contactinfo.heading}</h1>
                <p>{Contactinfo.paragraphTwo}</p>
                <p> NAME       :  <input type="text" required></input></p>
                <p> Mobile No  :  <input type="number"></input></p>
                <p> E-Mail     :  <input type="text"></input></p>
                <p> Subject    :  <input type="text"></input></p>
                <p> Message    :  <input type="textarea"></input> </p>
                <NavLink to="/Thank" >Submit</NavLink> 
                <p></p>
                <p>{Contactinfo.greet}</p>
                </ColoumRight>
            </Container>
        </Section>
    )
}

export default Contact