import { configureStore } from '@reduxjs/toolkit'
import drinkSlice from './drinkSlice'
import foodSlice from './foodSlice'
import opinionSlice from './opinionSlice'

export default configureStore({
    reducer: {
        drinks: drinkSlice,
        plates: foodSlice,
        opinions: opinionSlice,
    },
})