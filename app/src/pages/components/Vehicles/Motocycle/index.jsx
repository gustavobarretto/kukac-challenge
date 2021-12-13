import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Field, Formik, Form } from 'formik';
import api from '../../../../services/api'
import './styles.scss';
import Swal from 'sweetalert2';

const Motocyle = () => {
    const [motocyclesList, setMotocyclesList] = useState([])

    
    

    const cleanTable = () => {
        const motocycle = document.querySelector('[data-js="motocycle"]')
        if (!!motocycle.innerHTML) {
            motocycle.innerHTML = `
            <tr>
               <th>Modelo</th>
               <th>Ano de Fabricação</th>
               <th>Marca</th>
               <th>Nº de Passageiros</th>
               <th>Qtd de Rodas</th>
            </tr>
            `
        }
    }

    

    const firstRender = async () => {
        try {
            const response = await api.get(`/vehicles/motocycle/all`)
            setMotocyclesList(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async ({ modelInfo, yearInfo, brandInfo, passengersInfo }) => {
        if(+passengersInfo !== 1 && +passengersInfo !== 2) {
            Swal.fire({
                title: "Erro de cadastro!",
                icon: 'error',
                html: `Só é permitido informar 1 ou 2 passageiros!`,
                showCloseButton: true,
                showConfirmButton: false
            })   
            return
        }
        try {
            const response = await api.post(`/vehicles/motocycle`, {
                model: modelInfo,
                year: yearInfo,
                brand: brandInfo,
                passengers: passengersInfo
            })
            setMotocyclesList(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        cleanTable();
        firstRender();
    }, []);

    return (
        <>
            <Formik onSubmit={handleSubmit} initialValues={{ modelInfo: '', yearInfo: '', brandInfo: '', passengersInfo: '' }} >
                <Form className="container d-flex flex-column align-items-center gap-3">
                    <h5>Motocicleta</h5>
                    <Container className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                        <Field
                            className='motocycles-values p-3'
                            placeholder='Modelo'
                            name='modelInfo'
                            required-type='text'
                            id='modelInfo'
                        />
                        <Field
                            className='motocycles-values p-3'
                            placeholder='Ano de fabricação'
                            name='yearInfo'
                            required-type='text'
                            id='yearInfo'
                        />
                        <Field
                            className='motocycles-values p-3'
                            placeholder='Marca'
                            name='brandInfo'
                            required-type='text'
                            id='brandInfo'
                        />
                        
                        <Field
                            className='motocycles-values p-3'
                            placeholder='Nº de Passageiros'
                            name='passengersInfo'
                            required-type='text'
                            id='passengersInfo'
                        />
                    </Container>
                        <h5>Motocicletas cadastradas:</h5>
                    <Container className="motocycles-box-numbers container d-flex flex-column justify-content-center align-items-center p-3">
                        <table data-js='motocycle' className="motocycles-numbers align-items-center justify-content-center">
                            <tr >
                                <th>Modelo</th>
                                <th>Ano de Fabricação</th>
                                <th>Marca</th>
                                <th>Nº de Passageiros</th>
                                <th>Qntd de Rodas</th>
                            </tr>
                            {!!motocyclesList && motocyclesList.map( (moto, idx) => {
                                return (
                                    <>
                                        <tr key={idx}>
                                            <th>{moto.model}</th>
                                            <th>{moto.year}</th>
                                            <th>{moto.brand}</th>
                                            <th>{moto.passengers}</th>
                                            <th>{moto.wheels}</th>
                                        </tr>

                                    </>
                                )
                            })}

                        </table>
                    </Container>
                    <Container className="container d-flex justify-content-center align-items-center gap-3">
                        <Button className='' type="submit">Cadastrar</Button>
                    </Container>
                </Form>
            </Formik>
        </>
    );
}

export default Motocyle
