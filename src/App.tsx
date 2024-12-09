import React,{useState} from 'react';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';


let data:Restaurant = {
  name: '식당',
  category:'western',
  address:{
    city:'daegu',
    detail:'somwhere',
    zipCode:21344
  },
  menu:[{name:"pasta", price:20000, category:"pasta"},{name:"steak", price:30000, category:"meat"}]
}
const App:React.FC = ()=> {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress =(address:Address)=>{
    setMyRestaurant({...myRestaurant,address:address})
  }
const showBestMenuName = (name:string) =>{
  return name
}
  return (
    <div className="App">
    <Store info={myRestaurant} changeAddress={changeAddress}/>
    <BestMenu name="불고기 피자" category='피자' showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
