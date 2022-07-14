import React, {useState, useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import moment from 'moment';

//  FIREBASE
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../../firebase/FirebaseConfig'

//  COMPONENTS
import './ShopForm.css'
import {ItemContext} from '../../components/item_context/ItemContext'
import SuccessAlert from '../../components/success_alert/SuccessAlert';

const ShopForm = () => {

    const initialForm = {name:'',phone:'',mail:''}

    const date = moment().format('LLL')

    const initialPurchase = { buyer: {name:'',phone:'',mail:''}, 
                              items: [{ id:'', name:'', price:'', cant:'' }], 
                              date:'', total:''}

    const [formData, setFormData] = useState(initialForm)

    // eslint-disable-next-line
    const [cart, setCart, cantidad, setCantidad, totalCompra, setTotalCompra] = useContext(ItemContext)

    const [purchaseData, setPurchaseData] = useState(initialPurchase)
    
    const [idCompra, setIdCompra] = useState('')

    const handleOnChange = (e) => {
        const { value, name } = e.target;
		setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setPurchaseData({...purchaseData, buyer : {name: formData.name , phone: formData.phone ,mail: formData.mail }, 
                                          items: [cart.map((item) => ({id: item.id, name: item.name, price: item.price, cant: item.cant}))],
                                          date: date, total: totalCompra
                        })
        console.log(purchaseData);

        toDatabase();   //  ESTA LINEA ESTA COMENTADA PARA QUE NO ESCRIBA EN FIREBASE
    }

    const toDatabase = async () => {
        const docRef = await addDoc(collection(db, 'pedidos'), {
			purchaseData,
		});
        setIdCompra(docRef.id)
        setFormData(initialForm)
        setCart([]);
        setCantidad(0);

    }

  return (
    <div>
        <form className='form'>
			<TextField
                className='textfield'
                style={{ margin: 20}}
				placeholder='Nombre Completo'
				name='name'
				value={formData.name}
                onChange={handleOnChange}
			/>
			<TextField
                className='textfield'
                style={{ margin: 20}}
				placeholder='Teléfono'
				name='phone'
				value={formData.phone}
                onChange={handleOnChange}
			/>
			<TextField
                className='textfield'
                style={{ margin: 20}}
				placeholder='E-Mail'
				name='mail'
				value={formData.mail}
                onChange={handleOnChange}
			/>
			<Button variant="contained" className='textfield' onClick={onSubmit}>Realizar Pedido</Button>
		</form>
        {idCompra && <SuccessAlert idCompra={idCompra} />}
    </div>
  )
}

export default ShopForm