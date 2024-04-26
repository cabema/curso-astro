import {useState} from 'react'
import { toast } from 'react-toastify';

function Button(){

    const [subscribe, setSubscribe] = useState(false)

    return (
        <button
            onClick={() =>{ 
                toast.success(subscribe ? 'Ya estas suscrito' : 'Suscribete')
                setSubscribe(!subscribe)
            }}
        >
            {subscribe ? 'Ya estas suscrito' : 'Suscribete'}
        </button>
    )
}

export default Button