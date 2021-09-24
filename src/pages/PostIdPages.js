import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPages = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostByID, isLoading, error] = useFetching( async (id)=> {
    const response = await PostService.getByID(id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, comError] = useFetching( async (id)=> {
    const response = await PostService.getCommentsByPostID(id)
    setComments(response.data)
  })

  useEffect( () => {
    fetchPostByID(params.id)
    fetchComments(params.id)
  }, [])

  return ( 
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div>
      }    
      <h1>Комментарии</h1>  
      {isLoading
        ? <Loader />
        : <div>
            {comments.map(comm => 
              <div style={{marginTop: '15px'}} key={comm.id}>
                <h3>{comm.email}</h3>
                <div>{comm.body}</div>
              </div>  
            )}
          </div>
      }    
    </div>    
   );
}
 
export default PostIdPages;