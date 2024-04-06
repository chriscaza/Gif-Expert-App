import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    //Método para mostrar lo que se va escribiendo. Recibe el evento desestructurado por eso solo obtiene el target y de ahi se saca el value
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    //Método para enviar, recibe el evento
    const onSubmit = ( event ) => {
        //Es para evitar que se recargue la página cuando se envia el form
        event.preventDefault();
        //trim() quita los espacios en blanco del principio y final y si el string es mayor a 1 continua con la operación, de lo contrario se sale
        if( inputValue.trim().length <= 1 ) return;
        //Método que recibe el hijo del padre, se manda el valor del string sin espacios en blanco al principio y al final
        onNewCategory( inputValue.trim() )
        //Borra los datos del input
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type = "text"
                placeholder = "Buscar gifs" 
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form>
    )
}