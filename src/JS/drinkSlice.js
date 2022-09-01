import { createSlice } from '@reduxjs/toolkit'

export const drinkSlice = createSlice({
    name: 'drinks',
    initialState: [{
        title: 'Orange Juice',
        price: '$12',
        type: 'juice',
    },
    {
        title: 'Srawberry Juice',
        price: '$15',
        type: 'juice',
    },
    {
        title: 'Pineaple Juice',
        price: '$15',
        type: 'juice'
    },
    {
        title: 'Cherry Juice',
        price: '$21',
        type: 'juice'
    },
    {
        title: 'Kiwi Juice',
        price: '$21',
        type: 'juice'
    },
    {
        title: 'Manga Juice',
        price: '$15',
        type: 'juice'
    },
    /*softdrinks */
    {
        title: 'Cola',
        price: '$12',
        type: 'juice',
    },
    {
        title: 'Cola zero',
        price: '$12',
        type: 'juice',
    },
    {
        title: 'Pepsi',
        price: '$12',
        type: 'juice'
    },
    {
        title: 'Sprite',
        price: '$11',
        type: 'softdrink'
    },
    {
        title: 'Fanta',
        price: '$10',
        type: 'softdrink'
    },
    {
        title: 'Schweppes',
        price: '$13',
        type: 'softdrink'
    },
    {
        title: 'Boga Menthe',
        price: '$10',
        type: 'softdrink'
    },
    {
        title: 'Water',
        price: '$20',
        type: 'softdrink'
    }
],
    reducers: {
        addDrink: (state, action) => {
            state.push({
                title: state.length,
                price: action.payload.description
            });
        },
        deleteDrink: (state, action) => {
            state.filter(drink => drink.title!==action.payload)
        },
    }
})


export const { addDrink } = drinkSlice.actions

export default drinkSlice.reducer