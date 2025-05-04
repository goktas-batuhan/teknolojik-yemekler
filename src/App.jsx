import { Route,Switch } from 'react-router-dom'
import Order from './Pages/Order'
import Success from './Pages/Success'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/success">
          <Success></Success>
        </Route>
      </Switch>



    </>
  )
}

export default App
