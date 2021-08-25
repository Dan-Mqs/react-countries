import styles from './styles.module.scss';

export default function Country(props) {
    const coordinates = `https://www.google.com.br/maps/@${props.country.latitude},${props.country.longitude},7z?hl=pt-BR`

    return (
        <div className={styles.countryCard}>
            <header className={styles.countryHeader}>
                <h1>{props.country.name}</h1>
                <img src={props.country.flag} alt="Flag"/>
            </header>
            <article>
                <ul>
                    <li>
                        <span className={styles.infoLeft}>Abreviação</span>
                        <span className={styles.lineWrapper}/>
                        <span className={styles.infoRight}>{props.country.code}</span>
                    </li>
                    <li>
                        <span className={styles.infoLeft}>Capital</span>
                        <span className={styles.lineWrapper}/>
                        <span className={styles.infoRight}>{props.country.capital}</span>
                    </li>
                    <li>
                        <span className={styles.infoLeft}>População</span>
                        <span className={styles.lineWrapper}/>
                        <span className={styles.infoRight}>{props.country.population}</span>
                    </li>
                    <li>
                        <span className={styles.infoLeft}>Fuso horário</span>
                        <span className={styles.lineWrapper}/>
                        <span className={styles.timezones}>{props.country.timezones}</span>
                    </li>
                    <li>
                        <span className={styles.infoLeft}>Moeda</span>
                        <span className={styles.lineWrapper}/>
                        <span className={styles.infoRight}>
                           {props.country.currenciesName}
                        </span>
                    </li>
                </ul>
                <div className={styles.mapButton}>
                    <a href={coordinates}><img src="/map.svg" alt="Map"/></a>
                </div>
                <p>{props.country.coordinates}</p>
            </article>
        </div>
    );
}