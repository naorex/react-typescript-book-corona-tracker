import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';

const WorldPage = ({ allCountriesData }) => {
  return (
    <div className="world-page-container">
      <Header></Header>
      <Title></Title>
      <Card allCountriesData={allCountriesData}></Card>
    </div>
  );
};

export default WorldPage;
