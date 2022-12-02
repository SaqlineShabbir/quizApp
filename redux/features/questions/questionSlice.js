import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getQuestion, postQuestion } from './questionApi';
const initialState = {
  question: {},
  isError: false,
  isLoading: false,
  error: '',
};

//async thunks
export const fetchQuestion = createAsyncThunk('quiz/fetchQuiz', async (id) => {
  const question = await getQuestion(id);
  console.log(question);
  return question;
});
export const createQuestion = createAsyncThunk(
  'quiz/createQuiz',
  async (data) => {
    const question = await postQuestion(data);
    console.log('slice', data);
    return question;
  }
);

const questionSlice = createSlice({
  name: 'question',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchQuestion.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchQuestion.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isError = false;
      state.isLoading = false;
      state.question = action.payload;
    });
    builder.addCase(fetchQuestion.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
      state.question = {};
    });
    builder.addCase(createQuestion.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(createQuestion.fulfilled, (state, action) => {
      console.log('pay', action.payload);
      state.isError = false;
      state.isLoading = false;
      state.question.push(action.payload);
    });
    builder.addCase(createQuestion.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});

export default questionSlice.reducer;
