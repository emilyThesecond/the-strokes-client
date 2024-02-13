// import React from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import Client from '../services/api'

// const EditPost = () => {
//     const navigate = useNavigate()
//     const {id} = useParams()
//     console.log(id)
//     const[formData, setFormData] = useState({
//         entry: ''
//     })

//     useEffect(() => {
//         const fetchPostDetails = async () => {
//             try {
//                 const response = await Client.get(`/boards/${boardId}/posts/${postId}`)
//                 const postDetails = response.data
//                 setFormData({
//                     title: post.title || ''  
//                 })
//             } catch(error) {
//                 console.error('Error fetching post details')
//             }
//         }
//         fetchPostDetails()
//     }, [id])

//     const handleInputChange = (e) => {
//         const { name, value } = e.target 

//         setFormData({
//             ...formData,
//             [name]: value,
//         })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         try{
//             await Client.put(`/pet/${id}`, formData)
//             navigate('/profile')
//         } catch (error) {
//             console.error('Error editing pet:', error)
//         }
//     }

//     const formatDate = (dateString) => {
//         return new Date(dateString).toISOString().split('T')[0];
//     };
//   return (
//     <div>
//         <h2>Edit Post</h2>

      
//     </div>
//   )
// }

// export default EditPost
