import React, { useState } from 'react';
import './styles.scss';
import { Accordion, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Car from './Car';
import Motocycle from './Motocycle';

const Vehicles = () => {
    const [formChosed, setFormChosed] = useState('')

    const handleVehicleClick = (e) => {
        setFormChosed(e.currentTarget.value)
    }
        
    return ( 
        <>
            <Accordion className="col-12" >
                <Accordion.Header className='accordion-palindrome-header' ><h5>Cadastro de veículos</h5></Accordion.Header>
                <Accordion.Body>
                    <Container className='container d-flex flex-column gap-4'>
                        <p>Informe qual tipo de veículo você deseja cadastrar para gerar o formulário corretamente.
                            No formulário, insira todos os campos para a realização do cadastro.
                        </p>
                        <ToggleButtonGroup
                            className='container d-flex gap-3 col-4'
                            type='radio'
                            name='vehicle'
                        >
                            <ToggleButton
                                className='toggle-form-button shadow-none'
                                id={'car'}
                                type='radio'
                                name='vehicle'
                                value='car'
                                onChange={(e) => handleVehicleClick(e)}
                            >
                                Carro
                            </ToggleButton>
                            <ToggleButton
                                className='toggle-form-button shadow-none'
                                id={'motocycle'}
                                type='radio'
                                name='vehicle'
                                value='motocycle'
                                onChange={(e) => handleVehicleClick(e)}
                            >
                                Motocicleta
                            </ToggleButton>
                        </ToggleButtonGroup>
                            <Container>
                                {formChosed === 'motocycle' ? ( 
                                <>
                                    <Container>
                                        <Motocycle />
                                    </Container>
                                </> ) : (
                                    <>
                                        <Container>
                                            <Car />
                                        </Container>
                                    </>
                                )}
                            </Container>
                    </Container>
                </Accordion.Body>
            </Accordion>
        </>
     );
}
 
export default Vehicles
