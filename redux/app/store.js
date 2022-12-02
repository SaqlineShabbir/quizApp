import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../features/questions/questionSlice';
import quizReducer from '../features/quizs/quizSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
    question: questionReducer,
  },
});
