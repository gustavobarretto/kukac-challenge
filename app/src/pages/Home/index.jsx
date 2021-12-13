import React from 'react'
import './styles.scss'
import {Container} from 'react-bootstrap';

import Palindrome from '../components/Palindrome';
import Purchase from '../components/Purchase';
import CEPs from '../components/CEPs';
import Vehicles from '../components/Vehicles';




const Home = () => {
    
    

    return ( 
        <>
        

            <Container className='home container col-6 d-flex flex-column align-self-center justify-self-center'>
                <h1 className="title-home">Kukac Challenge</h1>
                <p>Desafio apresentado pela empresa 'tech' Kukac.</p>
                <Palindrome />
                <Purchase />
                <CEPs />
                <Vehicles />
            </Container>
       
        </>
     );
}
 
export default Home;