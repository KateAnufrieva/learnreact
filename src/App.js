import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"

class App extends React.Component { 
  

    helpText = "HelpText!"
    render() {
        return (<div>
            <Header title="Список пользователей"/>
            <main>
                <Users />
            </main>
            <aside></aside>
        </div>)
    }
}

export default App