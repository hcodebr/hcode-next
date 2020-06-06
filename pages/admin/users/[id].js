
import { useState } from 'react'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import Card from '../../../components/admin/Card'
import styles from '../../../components/admin/UserEdit.module.css'
import Button from '../../../components/admin/Button'
import Layout from '../../../components/admin/Layout'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const token = cookies.get('token')
const config = {
    header: {Authorization: `Bearer ${token}`}
}
export default function Users(props) {
    
    let date_at = new Date(props.user.birth_at).toISOString().split('T')[0]
    
    const [values, setValues] = useState({name:props.user.name, email: props.user.email, password:props.user.password, birth_at:date_at,level:props.user.level, photo:props.user.photo })

    
    //console.log(props.user)
    //user.data.map(field => setValue({...values, [field]:value}))
    
    let [nameInput, setNameInput] = useState('')
    let [newPassInput, setNewPassInput] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [photo, setPhoto] = useState('')

    const handleInputBlur = e =>{
        const { name, value } = e.target
        setValues({...values, [name]:value})
        console.log(name, value)
    }
    const currentPass = async e =>{
        e.preventDefault()
        let pass = e.target.value
        const values = {email: props.user.email, password:pass}
        let passValid = false;
        let error =''
        await axios.post('http://localhost:3333/auths', values)
        .then(
            (res)=> {
                passValid = true;
            }).catch(err => {
                passValid = false;
                error = err.message
            })
        if(!passValid){
            console.log('Senhas atual incorreta!');
            console.log(error)
            //nameInput.focus()
            return
        }
        
    }

    const newPass = e =>{
        newPassword = e.target.value
        console.log(newPassword)
    }

    const confirmPass = e =>{
        setConfirmPassword(e.target.value)
        if(confirmPassword != newPassword){
            alert('Senhas não conferem');
            newPassInput.focus()
        }
        console.log(newPassword, confirmPassword)
        
    }

    const foto = e=>{
        setPhoto(e.target.value)
        return photo
    }
/*
    for(let campo in user){
        let value = user[campo]
        if(campo != 'id' && campo != 'created_at' && campo != 'updated_at'){
    
            setValues({...values, [campo]:value})
            console.log(campo, user[campo])
        }
    }
    */
    return (
        <Layout>
                
            <HeaderTitle text="Editar Usuário" /> {/* Esse código poderá ser adicionado depois, se desejar */}

            <section className={styles.cards}>

                <Card actions={  <Button id={props.id} action="save" values={values}>Salvar</Button>} className={styles.card}>

                    <div className={styles.header}>

                        <h2>Dados Pessoais</h2>

                        <button className="button-reset">
                            <svg id="Grupo_112" data-name="Grupo 112" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="more_vert-black-18dp" transform="translate(4.017 4.05)">
                                    <path id="Caminho_236" data-name="Caminho 236" d="M0,0H24V24H0Z" fill="none"/>
                                    <path id="Caminho_237" data-name="Caminho 237" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" fill="#666"/>
                                </g>
                                <rect id="Retângulo_73" data-name="Retângulo 73" width="32" height="32" fill="none"/>
                            </svg>
                        </button>

                    </div>
                    
                    <form className={`${styles['form-user-data']} ${styles.form}`}>

                        <input type="text" placeholder="Nome Completo"  defaultValue={values.name} name="name" onBlur={handleInputBlur} />

                        <input type="email" placeholder="E-mail" onBlur={handleInputBlur} name="email" defaultValue={values.email}/>

                        <input type="date" placeholder="Data de Nascimento" onBlur={handleInputBlur} name="birth_at" defaultValue={values.birth_at}/>

                    </form>
                  
                </Card>

                <Card actions={<Button id={props.id} action="savePass">Alterar</Button>}>

                    <div className={styles.header}>
                    
                        <h2>Senha</h2>

                    </div>
                    
                <form className={styles.form} encType="multipart/form-data">

                        <input type="password" placeholder="Senha Atual" onBlur={currentPass} ref={inputPass => setNameInput(inputPass) }/>

                        <input type="password" placeholder="Nova Senha"  onBlur={newPass} ref={newPassInput => setNewPassInput(newPassInput) } />

                        <input type="password" placeholder="Confirme a Nova Senha"onBlur={confirmPass}name="password" onChange={handleInputBlur}  />

                    </form>

                </Card>

                <Card actions={<Button id={props.id} action="changePhoto" file={foto}>Escolher Foto</Button>}>

                    <div className={styles.header}>

                        <h2>Avatar</h2>

                    </div>

                    <img src={`http://localhost:3333/admin/users/${props.id}/photo`} className={styles.avatar} />

                </Card>

            </section>

        </Layout>
    )

}


Users.getInitialProps = async ({query}) =>{
    
    const { id } = query 
    let user = []
   user = await axios.get(`http://localhost:3333/admin/users/${id}`, config)
  
   
   return {
    "user": user.data,
    "id": id
    }
}