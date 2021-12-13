import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Field, Formik, Form } from 'formik';
import api from '../../../../services/api'
import './styles.scss'
import Swal from 'sweetalert2';

const Car = () => {
    const [carsList, setCarsList] = useState([])

    
    
    const cleanTable = () => {
        const car = document.querySelector('[data-js="car"]')
        if(!!car.innerHTML) {
            car.innerHTML = 
            `
            <tr>
               <th>Modelo</th>
               <th>Ano de Fabricação</th>
               <th>Marca</th>
               <th>Qntd de Portas</th>
            </tr>
            `
        }
    }

    const firstRender = async () => {
        try {
            const response = await api.get(`/vehicles/car/all`)
            setCarsList(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async ({ modelInfo, yearInfo, brandInfo, doorsInfo }) => {
        if(+doorsInfo !== 2 && +doorsInfo !== 4) {
            Swal.fire({
                title: "Erro de cadastro!",
                icon: 'error',
                html: `Só é permitido informar 2 ou 4 portas no carro!`,
                showCloseButton: true,
                showConfirmButton: false
            })   
            return
        }

        try {
            const response = await api.post(`/vehicles/car`, {
                model: modelInfo,
                year: yearInfo,
                brand: brandInfo,
                doors: doorsInfo
            })
            setCarsList(response.data)
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
            <Formik onSubmit={handleSubmit} initialValues={{ modelInfo: '', yearInfo: '', brandInfo: '', doorsInfo: '' }} >
                <Form className="container d-flex flex-column align-items-center gap-3">
                    <h5>Motocicleta</h5>
                    <Container className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                        <Field
                            className='cars-values p-3'
                            placeholder='Modelo'
                            name='modelInfo'
                            required-type='text'
                            id='modelInfo'
                        />
                        <Field
                            className='cars-values p-3'
                            placeholder='Ano de fabricação'
                            name='yearInfo'
                            required-type='text'
                            id='yearInfo'
                        />
                        <Field
                            className='cars-values p-3'
                            placeholder='Marca'
                            name='brandInfo'
                            required-type='text'
                            id='brandInfo'
                        />
                        <Field
                            className='cars-values p-3'
                            placeholder='Qntd de portas'
                            name='doorsInfo'
                            required-type='number'
                            id='doorsInfo'
                        />
                    </Container>
                        <h5>Carros cadastrados:</h5>
                    <Container className="cars-box-numbers container d-flex flex-column justify-content-center align-items-center p-3">
                        <table data-js='car' className="cars-numbers align-items-center justify-content-center">
                            <tr >
                                <th>Modelo</th>
                                <th>Ano de Fabricação</th>
                                <th>Marca</th>
                                <th>Qntd de Portas</th>
                            </tr>
                            {!!carsList && carsList.map( (car, idx) => {
                                return (
                                    <>
                                        <tr key ={idx}>
                                            <th>{car.model}</th>
                                            <th>{car.year}</th>
                                            <th>{car.brand}</th>
                                            <th>{car.doors}</th>
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
 
export default Car;