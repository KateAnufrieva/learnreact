import React from "react"

class Users extends React.Component {  //компонент
   constructor(props){
    
   }
    render(){
        if(this.users.length > 0)
    return(<div>
        {this.users.map((el) => (<div className="user" key={el.id}>
            <h3>{el.firstname} {el.lastname}</h3>
            <p>{el.bio}</p>
            <b>{el.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
        </div>))}
    </div>)
    else
    return(<div className="user"> 
        <h3>Пользователей нет</h3>
    </div>)
   }
}

export default Users