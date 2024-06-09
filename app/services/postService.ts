import api from './api';
import {Post} from '../context/posts';	

const getPosts = async ():Promise<Post[]> =>{
    const responce = await api.get<Post[]>("posts")  
    
    return responce.data;
}

export default {getPosts}