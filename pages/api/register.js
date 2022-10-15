// import mongoose from 'mongoose';
import User from '../../models/UserSchema';
import dbConnect from '../../util/mongo';
export default async function handler(req, res) {
  const { method } = req;

  const body = req.body;
  await dbConnect();
  // await mongoose.connect(MONGO_URL, opts);
  if (method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'POST') {
    try {
      const user = await User.findOne({ email: body.email });
      if (user) {
        res.status(200).json({ message: 'Email already used' });
        return;
      }
      const finalUser = await User.create(req.body);
      res.status(201).json(finalUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
