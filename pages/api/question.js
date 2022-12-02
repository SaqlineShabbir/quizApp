// import mongoose from 'mongoose';
import Question from '../../models/QuestionSchema';
import dbConnect from '../../util/mongo';
export default async function handler(req, res) {
  const { method } = req;

  const {} = req.body;
  const { quizId } = req.query;
  console.log(quizId);
  await dbConnect();
  // await mongoose.connect(MONGO_URL, opts);
  if (method === 'GET') {
    try {
      const allQuestion = await Question.find({ quizId })
        .populate({
          path: 'Quiz',
          select: ['questions'],
        })
        .lean();
      res.status(200).json(allQuestion);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'POST') {
    try {
      const question = await Question.create(req.body);
      console.log('api', req.body);
      res.status(201).json(question);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
