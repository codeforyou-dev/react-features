import { createSlice } from "@reduxjs/toolkit"
const cartSlice =createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        addItemToCart(state, action) {
            console.log('addItemToCart:',state,action);
            state.totalQuantity++;
            state.changed = true;
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem?.id,
                    price: newItem?.price || 0,
                    quantity: 1,
                    totalPrice: newItem?.price || 1,
                    name: newItem?.title || 'No title',
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        }
    }
});
export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;