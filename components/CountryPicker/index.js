import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { SelectCountryIcon } from "./CountryIconSelector";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  flex: 1;
  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 10px);
    margin-bottom: 10px;
    justify-content: center;
  }
`;

const CountryItem = styled.button`
  margin: 5px;
  width: 200px;
  height: 200px;
  border-radius: 10%;
  text-align: center;
  transition: transform 0.2s;
  @media (max-width: 450px) {
    width: 140px;
    height: 180px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 0px 6px -1px;
    z-index: 2;
  }
`;

const StyledCountryIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const StyledCountryName = styled.p``;

const CountryPicker = ({ availableCountries, setSelectedCountry }) => {
  const { t } = useTranslation();

  const countries = availableCountries.map(({ name, code }) => (
    <CountryItem
      key={code}
      className="bg-blue-ukraine"
      onClick={() => setSelectedCountry(code)}
    >
      <StyledCountryIcon
        src={SelectCountryIcon[code]}
        alt={t(name)}
        width={40}
        className="cursor-pointer mt-4"
      />
      <StyledCountryName className="text-white text-lg upper m4 mt-4">
        {t(name)}
      </StyledCountryName>
    </CountryItem>
  ));

  return <StyledContainer>{countries}</StyledContainer>;
};

export default CountryPicker;
