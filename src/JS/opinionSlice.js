import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const opinionSlice = createSlice({
    //Name of our state
    name: 'opinions',
    initialState,
    reducers: {
        //we will write our reducer 
        //Adding Task
        addOpinion: (state, action) => {
            state.push({
                id:state.length,
                fullName:action.payload.fullName,
                description: action.payload.description,
                positionX:Math.random()*1200+400,
                positionY:Math.random()*500
            });
        },
        
        //Removing Task
        removeOpinion: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        },

        //Updating Task
        updateOpinion: (state, action) => {
            return state.map(el => (el.id === action.payload.id) ? action.payload : el)
        },
        //Task is done
        completOpinion: (state, action) => {
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        isDone: true,
                    }
                }
                return task;
            })
        }
    },
})

export const { addOpinion, removeOpinion, updateOpinion, completOpinion, } = opinionSlice.actions;
export default opinionSlice.reducer;
