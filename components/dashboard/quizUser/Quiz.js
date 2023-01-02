import Image from 'next/image';
import Link from 'next/link';
import img from '../../../assets/images/Cap.PNG';
const Quiz = ({ quiz }) => {
  return (
    <div className="p-3">
      <Link href={`/userDashBoard/${quiz.quizId}`}>
        <Image
          className="rounded-xl "
          height={200}
          width={172}
          src={img}
          alt=""
        />
      </Link>
      <p className=" font-bold">{quiz?.title}</p>
    </div>
  );
};

export default Quiz;
