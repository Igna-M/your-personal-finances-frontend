import React from 'react';
// import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom'


const EditOperation = () => {
    // const [todos, setTodos] = useState('');

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     addTodo(todos)
    //     setTodos('')
    // }

    console.log('UserParams', useParams());
    let id = useParams().id
    console.log(id);
    let url = 'http://localhost:3001/editOperation/' + id
    console.log('url', url);
    return <Redirect to={url} />
    
    
    // return (
        
    //     // console.log(useParams()),
    //     // console.log(id),
        
    //     <div>

    //         {id}

    //     </div>
    //     // <form onSubmit={handleSubmit}>
    //     //     <label htmlFor='todo'>To do:</label>
    //     //     <input type="text" value={todos} onChange={(e) => setTodos(e.target.value)} />
    //     //     <input type="submit"></input>
    //     // </form>
    // )
}



// class EditOperation extends React.Component {
//     state = {
//       redirect: true,
//       id: useParams().id
//     }
  
//     // handleSubmit () {
//     //   axios.post(/**/)
//     //     .then(() => this.setState({ redirect: true }));
//     // }
  
//     render () {
//       const { redirect } = this.state;
  
//        if (redirect) {
//          return <Redirect to={'http://localhost:3001/editOperation/' + this.state.id} />;
//        }
  
//     //    return <RenderYourForm/>;
//   }
// }

export default EditOperation;