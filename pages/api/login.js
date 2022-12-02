// import mongoose from 'mongoose';
import User from '../../models/UserSchema';
import dbConnect from '../../util/mongo';
export default async function handler(req, res) {
  const { email, password } = req.body;

  await dbConnect();

  try {
    const user = await User.findOne({ email, password });
    // if (user) {
    //   res.setHeader(
    //     'Set-Cookie',
    //     cookie.serialize('token', process.env.TOKEN, {
    //       maxAge: 60 * 60,
    //       sameSite: 'strict',
    //       path: '/',
    //     })
    //   );
    // }
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}
