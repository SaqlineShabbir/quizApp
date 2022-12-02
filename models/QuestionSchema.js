import mongoose from 'mongoose';
const QuestionSchema = new mongoose.Schema({
  quizId: {
    type: String,
    required: true,
  },
  questions: [
    {
      title: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      options: [
        {
          title: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});
QuestionSchema.virtual('Quiz', {
  ref: 'Quiz',
  localField: ['quizId'],
  foreignField: ['quizId'],
});

export default mongoose.models.Question ||
  mongoose.model('Question', QuestionSchema);
