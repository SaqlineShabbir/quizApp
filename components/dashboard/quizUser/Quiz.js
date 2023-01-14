import Link from 'next/link';

const Quiz = ({ quizCategory }) => {
  console.log(quizCategory);
  return (
    <div className="p-3">
      <Link href={`/userDashBoard/${quizCategory._id}`}>
        {/* <Image
          className="rounded-xl "
          height={200}
          width={172}
          src={img}
          alt=""
        /> */}

        <p className=" font-bold cursor-pointer">{quizCategory?.name}</p>
      </Link>
    </div>
  );
};

export default Quiz;
