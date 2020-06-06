import styles from './Button.module.css'
import Router from 'next/router'
import axios from 'axios'

export default function Button(props) {

    const handleClick = async (e) => {

        switch(props.action){

            case "edit":
                Router.push(`/admin/users/${props.id}`)
                break;
            case "save" :

           await axios.put(`http://localhost:3333/admin/users/${props.id}`, props.values) 

                console.log('Salvando alterações')
                break;
            case "savePass":

            await axios.put(`http://localhost:3333/admin/users/${props.id}`, props.values)                
                
                console.log('Salvando a senha')
                break;
            case "changePhoto":
                console.log('alterando a foto')
                break;
        }

    }

    if(props.action != "changePhoto"){
        return (
            <button className={styles.button} onClick={ handleClick }>{props.children}</button>
        )
    }else{
        return (
            <input type='file' name='file' className={styles.button} />
        )
    }
}