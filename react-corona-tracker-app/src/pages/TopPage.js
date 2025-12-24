import Header from '../components/Header';
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';

const TopPage = ({ countriesJson, setCountry, getCountryData, countryData }) => {
  return (
    <div className="top-page-container">
      <div>
        <Header></Header>
        <Title></Title>
        <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}></Selector>
        <Results countryData={countryData}></Results>
      </div>
    </div>
  );
};

export default TopPage;
