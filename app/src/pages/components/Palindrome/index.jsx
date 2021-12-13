import React from 'react';
import './styles.scss';
import api from '../../../services/api'
import { Accordion, Button, Container } from 'react-bootstrap'
import { Field, Formik, Form } from 'formik';


const Palindrome = () => {

    const handleSubmit = async ({numInit, numFinal}) => {

        try {
            const response = await api.get(`/palindrome/${numInit}/${numFinal}`)
            const palindrome = document.querySelector('[data-js="palindrome"]')
            if(!!palindrome.textContent) {
                palindrome.textContent = ''
            }      
            response.data.map( (number, idx) => {
                if(idx + 1 === response.data.length) {
                    return palindrome.innerHTML += `
                        ${number}
                    `;
                }
                return palindrome.innerHTML += `
                        ${number} -
                    `;
            })
        } catch (e) {
            console.log(e)
        }
    }

    const handleClear = ({numInit, numFinal}) => {
        const awnser = document.querySelector('[data-js="palindrome"]')
        awnser.textContent = '';        
    }
    
    return ( 
        <>
            <Accordion className="col-12 " >
                <Accordion.Header className='accordion-palindrome-header d-flex justify-content-center aligm-items-center shadow-none' ><h5>Palíndromo de números</h5></Accordion.Header>
                <Accordion.Body>
                    <Formik onSubmit={handleSubmit} initialValues={{initNum: '', finalNum: ''}} >
                        <Form className="container d-flex flex-column align-items-center gap-3">
                            <p>Informe dois números e o sistema verificará todos os números palíndromos entre eles.</p>
                            <Container className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                                <Field
                                    className='palindrome-values p-3'
                                    placeholder='Valor inicial'
                                    name='numInit'
                                    required-type='number'
                                    id='numInit'                            
                                />
                                <Field
                                    className='palindrome-values p-3'
                                    placeholder='Valor final'
                                    name='numFinal'
                                    required-type='number'
                                    id='numFinal'                            
                                />
                            </Container>
                                <h5>Lista de números:</h5>
                            <Container className="palindrome-box-numbers p-3">
                                <table data-js='palindrome' className="palindrome-numbers">
                                
                                </table>
                            </Container>
                            <Container className="container d-flex justify-content-center align-items-center gap-3">
                                <Button className='' type="submit">Submit</Button>
                                <Button className='' onClick={handleClear} >Clear</Button>
                            </Container>
                        </Form>
                    </Formik>
                </Accordion.Body>
            </Accordion>
        </>
     );
}
 
export default Palindrome;