import styles from "./App.module.scss"
import Phone from "./assets/images/phone.png"
import {stepData} from "./data"
function App() {
  return (
    <div className={styles.App}>
      <section></section>
      <section className={styles.App_sectionTwo}>
        <div className={styles.App_sectionTwoHeader}>
        <h2>Whichride brings together multiple ride hailing providers and local taxi firms in one app</h2>
        <p>Allowing riders to select the provider that offers the best price, service or travel time, then seamlessly book within the app</p>
        </div>
        <div className={styles.App_sectionTwoContent}>
          <div>
            {/* <Phone /> */}
            <img src={Phone}/>
          </div>
          <div>
            {
              stepData && stepData.map((e, i) => (
                <div className={styles.App_sectionTwoContentStepItem} key={e.title}>
                  <div className={styles.indicator}><p>{`Step ${i+1} `}</p> </div>
                <div className={styles.App_sectionTwoContentStepItemInfo} >
                  <h3>{e.title}</h3>
                  <p>{e.subTitle}</p>
                 </div> 
                 </div>
              ))
            }
          </div>
        </div>
  
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default App;
