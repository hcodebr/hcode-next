import axios from 'axios'
import Router from 'next/router'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const serverUrl = 'http://localhost:3333'

export async  function handleAuthSSR(ctx) {
    
    let token = null
    
    if(ctx.req) {
        token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        
    }else {
        token = cookies.get('token')
    }

   

    try{

        const config = {
            header: {Authorization: `Bearer ${token}`}
        }

       await axios.get(serverUrl + '/admin/users', config)
       .then(res =>{ return 'deu certo'})
       .catch(err => { return 'deu erro'})
    }catch (err) {
        //console.log('Usuário sem permissão, redirecionando!')

        if(ctx.res){
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        }else {
            Router.push('/')
        }
    }
}
