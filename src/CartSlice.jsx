import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {    
        
       const{ name, image, cost } = action.payload;              
       
       const existingItem = state.items.find(item => item.name == name);
       if (existingItem) {
         existingItem.quantity++;
       } else {
        state.items.push( {name, image,cost, quantity:1} );
       }
    },

    
    removeItem: (state, action) => {      
       
      const{ name,image,cost } = action.payload;
      
      //to scan the state for existing items
      const existingItem = state.items.find(item => item.name == name);

      if (existingItem) {  //if item exist in state, then remove it
        state.items = state.items.filter(item => item.name !== name); 
      };
    },

    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload
      const existingItem = state.items.find(item => item.name == name);
      existingItem.quantity=quantity;
    },
  },
});


export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
