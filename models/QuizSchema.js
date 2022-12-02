import mongoose from 'mongoose';
const QuizSchema = new mongoose.Schema({
  quizId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
