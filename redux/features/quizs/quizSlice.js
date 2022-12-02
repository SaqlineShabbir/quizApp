import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getQuiz, postQuiz } from './quizApi';
const initialState = {
  allQuiz: [],
  isError: false,
  isLoading: false,
  error: '',
};

//async thunks
export const fetchQuiz = createAsyncThunk('quiz/fetchQuiz', async () => {
  const quizs = await getQuiz();

  return quizs;
});
export const createQuiz = createAsyncThunk('quiz/createQuiz', async (data) => {
  const quiz = await postQuiz(data);

  return quiz;
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchQuiz.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchQuiz.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isError = false;
      state.isLoading = false;
      state.allQuiz = action.payload;
    });
    builder.addCase(fetchQuiz.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
      state.allQuiz = [];
    });
    builder.addCase(createQuiz.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(createQuiz.fulfilled, (state, action) => {
      console.log('pay', action.payload);
      state.isError = false;
      state.isLoading = false;
      state.allQuiz.push(action.payload);
    });
    builder.addCase(createQuiz.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});

export default quizSlice.reducer;
