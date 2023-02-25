import axios from 'axios';
import DashboardLayout from '../../../components/dashboard/layout';
import QuizHome from '../../../components/dashboard/quizUser/QuizHome';

const QuizTest = ({ categoryData }) => {
  return (
    <>
      <DashboardLayout>
        <QuizHome categoryData={categoryData} />
      </DashboardLayout>
    </>
  );
};

export default QuizTest;
export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await axios.get(
    'https://quiz-app-backend-blond.vercel.app/category/all'
  );
  const categoryData = data;

  // Pass data to the page via props
  return { props: { categoryData } };
}
