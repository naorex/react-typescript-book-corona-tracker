import Card from '../components/Card';

const WorldPage = (props) => {
  return (
    <div>
      <Card allCountriesData={props.allCountriesData}></Card>
    </div>
  );
};

export default WorldPage;
