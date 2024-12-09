// let data = {
//     name: '식당',
//     category:'western',
//     address:{
//       city:'daegu',
//       detail:'somwhere',
//       zipCode:21344
//     },
//     menu:[{name:"pasta", price:20000, category:"pasta"},{name:"steak", price:30000, category:"meat"}]
//   }

export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[]
}

export type Address = {
    city:string;
    detail:string;
    zipCode:number;
}

export type Menu = {
    name:string;
        price:number;
        category:string;
}

export type AddressWithoutZipCode = Omit<Address, 'zipCode'>
export type RestaurantOnlyCategory = Pick<Restaurant,'category'>

export type ApiResponse<T> = {
    data:T[],
    totalPage:number,
    page:number,
}

export type RestaurantResoponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>