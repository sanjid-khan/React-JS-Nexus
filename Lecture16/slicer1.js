import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit"


// createAsyncThunk

// {type: 'Coin/fetch/pending', payload: undefined}
// {type: 'Coin/fetch/fullfiled', payload:data}
// {type: 'Coin/fetch/rejected', payload:"error_message"}

// uporer 3 da dispatch automatically create korbe createAsyncThunk

// FetchData(20);


const FetchData = createAsyncThunk(

    // Action: type : payload
    'Coin/fetch',

    async (args, thunkAPI)=>{

        try{
           const response= await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)

           if (!response.ok) {
               return thunkAPI.rejectWithValue("Failed to fetch data");
              }

           const data= await response.json();
           return data;
        }
        catch (error){
              return thunkAPI.rejectWithValue(error.message || "Something went wrong");
        }
    }

)



const slicer1= createSlice ({
    name:'slice1',
    initialState: {data:[], loading:false, error:null},
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(FetchData.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(FetchData.fulfilled ,(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(FetchData.rejected ,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        })
    }
})



// type: "Coin/Fetch/pending"
// type: "Coin/Fetch/fulfilled"
// type: "Coin/Fetch/rejected"


export default slicer1.reducer;
export {FetchData};



// async (args, thunkAPI)
// args → dispatch করার সময় পাঠানো value
// dispatch(FetchData(20))

// 👉 এখানে args = 20
// thunkAPI → extra power (dispatch, getState ইত্যাদি)


// ✔️ extraReducers
// → slice-এর বাইরের action (asyncThunk) handle করার জন্য

// ✔️ dispatch(FetchData())
// → slice নাম লাগে না
// → কারণ Redux action type match করে, slice নাম না

