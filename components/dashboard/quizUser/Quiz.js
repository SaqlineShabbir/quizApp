import Image from 'next/image';
import Link from 'next/link';

const Quiz = ({ quizCategory }) => {
  return (
    <div className="p-3 relative">
      <Link href={`/dashboard/quiz-test/${quizCategory._id}`}>
        {quizCategory?.postImage && (
          <div className="">
            <Image
              className="rounded-xl "
              height={230}
              width={255}
              src={quizCategory?.postImage}
              alt=""
            />
          </div>
        )}
      </Link>
      <p className=" font-bold text-sm   cursor-pointer absolute  bottom-11 left-8">
        {quizCategory?.name}
      </p>
    </div>
  );
};

export default Quiz;
