import './App.css' 
import OrderedReceipt from './features/OrderedReceipt'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IceCreamView'
import { UserView } from './features/user/UserView'

function App() {

  return (
    <div className='App'>
    <CakeView/>
    <IcecreamView/>
    <OrderedReceipt />
    <UserView/>
    </div>
  )
}


export default App
