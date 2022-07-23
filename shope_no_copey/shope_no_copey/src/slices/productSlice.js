import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const feakeFetch = createAsyncThunk("feakeFetch/add", async () => {
  return (await axios.get('https://jsonplaceholder.typicode.com/photos/')).data.slice(0, 5)// мы забираем 5-ть элементов с этого масива
    .map(data => {
      return { // раскладываем методом СПРЕД эдлемент масива и добавляем новые поля перезаписывае перезаписывая масим через метод .map
        ...data,
        details: [
          "Круглая мыльница в стиле загородного дома. Чашу переворачивали вручную. После поворота чашу обжигали и глазировали. После остекления происходит 2-й пожар при температуре около 1220 градусов."
          ,
          "Для того, чтобы вода стекала из мыльницы, в середину было встроено большое отверстие. Поэтому мыло всегда остается красивым и сухим."
          ,

        ],
        material: "Глина и глазурь",
        math: "около 11 см в диаметре",
        name: "Мыльниа",
        price: 2300 
      }
    })

})

const postsAdapter = createEntityAdapter({

  sortComparer: (a, b) => a.date = (b)
})

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
})




const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {

  },
  extraReducers: {

    [feakeFetch.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      postsAdapter.upsertMany(state, action.payload)


    }
  }
})


export default productSlice.reducer

export const allProduct = (state) => state


