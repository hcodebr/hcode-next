import styles from './Button.module.css'
import Router  from 'next/router'
import axios from 'axios'

export default function Button(props) {
    const handleClick = async (e)=>{
        //e.preventDefault()
        switch(props.action){
            case "edit":
                Router.push(`/admin/users/${props.id}`)
                break;
            case "save":

await axios.put(`http://localhost:3333/admin/users/${props.id}`, props.values )
                console.log('salvar')
                // Router.push(`/admin/users/${props.id}.js`)
                break;
            case "savePass":
await axios.put(`http://localhost:3333/admin/users/${props.id}`, props.values )
                console.log('salvar Senha')
                // Router.push(`/admin/users/${props.id}.js`)
                break;
            case "changePhoto":

            console.log(props.file)
            const formData = new FormData()
            
            //const imagefile = e.target.value
// await axios.post(`http://localhost:3333/admin/users/${props.id}/uploads`, props.values )                
                // localhost:3333/admin/users/3/uploads
                // Router.push(`/admin/users/${props.id}.js`)
                break;
        }
     }

     if(props.action !="changePhoto"){
    return (
            <button className={styles.button} onClick={handleClick} >{props.children}</button>
    )
}else{
    return (
        <input type='file' name='file' className={styles.button} onChange={handleClick}  />
    )}

}