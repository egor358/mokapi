import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
}                                          //префикс/имя переменной
export const fetchData = createAsyncThunk("postsData/fetchData" ,async(url)=>{// url приходит из dispatch(fetchData(url))
   const response = await fetch(url)
   const data = await response.json()
   return data
})
 // Получили 
// //{
//   type: "postsData/fetchData/fulfilled",
//   payload: [массив постов]
// }

const dataSlice = createSlice({

    name:"postsData",  //префикс
    initialState,      
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading = false
            state.error = null
            state.posts = action.payload //сохраняем полученные данные,состояние обновится
        }),
        builder.addCase(fetchData.pending,(state)=>{//1.pending → мгновенно срабатывает,до выполнения fetch
          state.isLoading = true
          state.error = null
        }),
        builder.addCase(fetchData.rejected,(state,action)=>{
          state.isLoading = false
          state.error = action.error.message
        })

    }
})

export const postsReducer = dataSlice.reducer
 