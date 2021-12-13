import React, { useState } from 'react'
import './styles.scss'
import { Accordion, Button, Container } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import CEP from './CEP'
import api from '../../../services/api'

const CEPs = () => {
    const [cepsList, setCepsList] = useState([])
    const handleSubmit = async ({ cep_1, cep_2, cep_3, cep_4, cep_5 }) => {
        try {
            const response = await api.post(`/ceps`, {
                arr: [
                    cep_1.match(/\d/g).join(''),
                    cep_2.match(/\d/g).join(''),
                    cep_3.match(/\d/g).join(''),
                    cep_4.match(/\d/g).join(''),
                    cep_5.match(/\d/g).join('')
                ]
            })
            console.log(response.data)
            setCepsList(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Accordion className="col-12" >
                <Accordion.Header className='accordion-ceps-header' ><h5>Busca de CEPs</h5></Accordion.Header>
                <Accordion.Body>
                    <Formik onSubmit={handleSubmit} initialValues={{ cep_1: '', cep_2: '', cep_3: '', cep_4: '', cep_5: '' }}>
                        <Form className="container d-flex flex-column align-items-center gap-3">
                                    <h5>Digite os CEPs:</h5>
                                    <p>Informe os cinco CEPs que deverão ser consultados e aguarde aparecer o botão informativo ao lado direito da coluna.</p>
                            <Container className='container d-flex'>
                                <Container className="input-ceps container d-flex flex-column align-items-center justify-content-center gap-3">
                                    <Container className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                                        <label>Endereço 1:</label>
                                        <Field
                                            className='ceps-values p-3'
                                            placeholder='CEP'
                                            name='cep_1'
                                            required-type='number'
                                            id='cep_1'
                                        />
                                    </Container>
                                    <Container className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                                        <label>Endereço 2:</label>
                                        <Field
                                            className='ceps-values p-3'
                                            placeholder='CEP'
                                            name='cep_2'
                                            required-type='number'
                                            id='cep_2'
                                        />
                                    </Container>
                                    <Container className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                                        <label>Endereço 3:</label>
                                        <Field
                                            className='ceps-values p-3'
                                            placeholder='CEP'
                                            name='cep_3'
                                            required-type='number'
                                            id='cep_3'
                                        />
                                    </Container>
                                    <Container className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                                        <label>Endereço 4:</label>
                                        <Field
                                            className='ceps-values p-3'
                                            placeholder='CEP'
                                            name='cep_4'
                                            required-type='number'
                                            id='cep_4'
                                        />
                                    </Container>
                                    <Container className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                                        <label>Endereço 5:</label>
                                        <Field
                                            className='ceps-values p-3'
                                            placeholder='CEP'
                                            name='cep_5'
                                            required-type='number'
                                            id='cep_5'
                                        />
                                    </Container>
                                </Container>
                                <Container className="ceps-box-numbers p-3">
                                    <Container data-js='ceps' className="ceps-numbers container d-flex flex-column gap-3 justify-content-center align-items-center">
                                        {!!cepsList && cepsList?.map((cep, idx) => {
                                            return (
                                                <CEP
                                                    key={idx}
                                                    uf={cep.uf}
                                                    cep={idx + 1}
                                                    logradouro={cep.logradouro}
                                                    bairro={cep.bairro}
                                                    cidade={cep.localidade}
                                                />
                                            )
                                        })}

                                    </Container>
                                </Container>
                            </Container>
                            <Container className="container d-flex justify-content-center align-items-center gap-3">
                                <Button className='' type="submit">Procurar</Button>
                            </Container>
                        </Form>
                    </Formik>
                </Accordion.Body>
            </Accordion>
        </>
    );
}

{ } export default CEPs;