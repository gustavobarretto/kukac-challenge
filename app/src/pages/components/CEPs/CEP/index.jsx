import React from 'react'
import {Button} from 'react-bootstrap'
import Swal from 'sweetalert2';


const CEP = ({cep, uf, cidade, logradouro, bairro}) => {

    const handleClickAddress = () => {Swal.fire( {
        title: 'Endereço',
        html: 
        `
            Cidade: ${cidade} </br>
            Logradouro: ${logradouro} </br>
            Bairro: ${bairro} </br>
            UF: ${uf}
            
        `,
        showCloseButton: true,
        showConfirmButton: false

      })

    }

    return ( 
        <> 
            <Button onClick={handleClickAddress}>Endereço {cep}</Button>
        </>
     );
}
 
export default CEP;