import React from 'react';
import api from '../../../services/api';
import { Container, Button, Accordion} from 'react-bootstrap';
import { Formik, Form, Field} from 'formik';
import './styles.scss'

const Purchase = () => {

    const handleSubmit = async ({productValue, payment}) => {
        try {
            const response = await api.get(`/purchases/${productValue}/${payment}`)
            const total = document.querySelector('[data-js="purchase"]')
            if(!!total.textContent) {
                total.textContent = ''
            }
            total.innerHTML = `
            <tr >
                <th>Troco</th>
                <th>Quantidade de notas de $100</th>
                <th>Quantidade de notas de $10</th>
                <th>Quantidade de notas de $1</th>
            </tr>
            <tr >
                <th>$ ${response.data.change}</th>
                <th>${response.data.notes100}</th>
                <th>${response.data.notes10}</th>
                <th>${response.data.notes1}</th>
            </tr>

            `

        } catch (e) {
            console.log(e)
        }
    }

    const handleClear = ({numInit, numFinal}) => {
        const awnser = document.querySelector('[data-js="purchase"]')
        awnser.textContent = '';        
    }

    return ( 
        <>
            <Accordion className="col-12" >
                <Accordion.Header className='accordion-purchase-header'><h5>Troco de compras</h5></Accordion.Header>
                <Accordion.Body>
                    <Formik onSubmit={handleSubmit} initialValues={{productValue: '', payment: ''}} >
                        <Form className="container d-flex flex-column align-items-center gap-3">
                            <p>Informe o preço do produto e com qual valor foi realizado o pagamento: o sistema informará o valor do troco
                                e quantas notas serão retiradas do caixa.
                            </p>
                            <Container className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                                <Field
                                    className='purchase-values p-3'
                                    placeholder='Valor do produto '
                                    name='productValue'
                                    required-type='number'
                                    id='productValue'                            
                                />
                                <Field
                                    className='purchase-values p-3'
                                    placeholder='Valor do pagamento'
                                    name='payment'
                                    required-type='number'
                                    id='payment'                            
                                />
                            </Container>
                                <h5>Troco e notas:</h5>
                            <Container className="purchase-box-numbers p-3">
                                <table data-js='purchase' className="purchase-numbers container d-flex justify-content-center align-items-center">
                                
                                </table>
                            </Container>
                            <Container className="container d-flex justify-content-center align-items-center gap-3">
                                <Button className='' type="submit">Submit</Button>
                                <Button className='' onClick={handleClear}>Clear</Button>
                            </Container>
                        </Form>
                    </Formik>
                </Accordion.Body>
            </Accordion>
        </>
     );
}
 
export default Purchase
