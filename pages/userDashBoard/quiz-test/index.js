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
  const res = await fetch(
    'https://quiz-app-backend-production-f258.up.railway.app/category/all'
  );
  const categoryData = await res.json();

  // Pass data to the page via props
  return { props: { categoryData } };
}
