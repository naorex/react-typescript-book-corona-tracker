import Card from '../components/Card';

const WorldPage = (props) => {
  return (
    <div>
      <Card getAllCountriesData={props.getAllCountriesData} allCountriesData={props.allCountriesData}></Card>
    </div>
  );
};

export default WorldPage;
