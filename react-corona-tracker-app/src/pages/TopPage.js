import Header from '../components/Header';
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';

const TopPage = (props) => {
  return (
    <div className="top-page-container">
      <div>
        <Header></Header>
        <Title></Title>
        <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData}></Selector>
        <Results countryData={props.countryData}></Results>
      </div>
    </div>
  );
};

export default TopPage;
