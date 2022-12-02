// import mongoose from 'mongoose';
import Quiz from '../../models/QuizSchema';
import dbConnect from '../../util/mongo';
export default async function handler(req, res) {
  const { method } = req;

  const body = req.body;
  await dbConnect();
  // await mongoose.connect(MONGO_URL, opts);
  if (method === 'GET') {
    try {
      const allQuiz = await Quiz.find();
      res.status(200).json(allQuiz);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'POST') {
    try {
      const quiz = await Quiz.create(req.body);
      console.log('api', req.body);
      res.status(201).json(quiz);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
