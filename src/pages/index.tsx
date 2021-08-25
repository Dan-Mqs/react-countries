import Country from "../components/Country"
import { api } from "../services/api"
import { currenciesToString } from "../utils/currenciesToString";
import { formatTimezones } from "../utils/formatTimezones";
import { getCoordinatesLat } from "../utils/getCoordinatesLat";
import { getCoordinatesLong } from "../utils/getCoordinatesLong";
import styles from '../styles/Home.module.scss'; 


export default function Home(props) {
  
  return (
    <div className={styles.contentArea}>
      {props.countries.map( country => {
        return (
          <Country country={country}/>
        )
      })}
      
    </div>
  )
}


export const getStaticProps = async () => {
    const { data } = await api.get('all');

    const countries = data.map(country => {
      return {
        name: country.name,
        code: country.alpha3Code,
        flag: country.flag,
        capital: country.capital,
        population: country.population.toLocaleString() ,
        timezones: formatTimezones(country),
        currenciesName: currenciesToString(country),
        latitude: getCoordinatesLat(country),
        longitude: getCoordinatesLong(country)
      }
    })

    return {
      props: {
        countries: countries,
      }, revalidate: 60 * 60 * 24,
    }
}