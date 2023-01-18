import Image from 'next/image';
import Link from 'next/link';

const Quiz = ({ quizCategory }) => {
  console.log(quizCategory);
  return (
    <div className="p-3 relative">
      <Link href={`/userDashBoard/quiz-test/${quizCategory._id}`}>
        {quizCategory?.postImage && (
          <Image
            className="rounded-xl "
            height={130}
            width={155}
            src={quizCategory?.postImage}
            alt=""
          />
        )}
      </Link>
      <p className=" font-bold cursor-pointer absolute  bottom-8 left-8">
        {quizCategory?.name}
      </p>
    </div>
  );
};

export default Quiz;
