import styles from "./App.module.scss"
import Phone from "./assets/images/phone.png"
import { stepData, navData, bottomData, choices} from "./data"
import ReactLogo from "./logo.svg"
//import Car from "./car.svg"
//import clock from "./clock.svg"
//import list from "./list.svg"
//import safety from "./safety.svg"
import Phones from "./assets/images/phones.png"

const Choice = ({icon, heading, subHeading}) => {
  return (
    <div className={styles.choice}>
    <div className={styles.choice_icon}>
    <img src={icon} alt={icon} />
    </div>
    <h4 className={styles.choice_heading}>{heading}</h4>
    <p  className={styles.choice_subHeading}>{subHeading}</p>
   </div>
  )
}
function App() {
  return (
    <div className={styles.App}>
      <section className={styles.App_sectionOneNav}>
        <nav className={styles.App_sectionOneNav__Navigation}>
          <div className={styles.App_sectionOneNav__NavigationLogo}>
            <img src={ReactLogo} alt="logo" /></div>
          <div className={styles.App_sectionOneNav__NavigationLinks}>
            {
              navData && navData.map((e) => (
                <p key={e}>{e}</p>
              ))
            }
          </div>
        </nav>
        <div className={styles.App_sectionOneMain} >
          <div>
            <div className={styles.App_sectionOneMain__Header}>
              <h1>
                Compare & book
                <br></br>
                ride-hailing providers
              </h1>
            </div>
            <div className={styles.App_sectionOneMain__Paragraph}>
              <p>
                Save money and time with WhichRide.
                Think Compare the market but for taxis.
              </p>
            </div>
          </div>
          <div className={styles.App_sectionOneMain__Phones}>
            <img src={Phones} alt="phones" />
          </div>
        </div>

      </section>

      <section className={styles.App_sectionTwo}>
        <div className={styles.App_sectionTwoHeader}>
          <h2>Whichride brings together multiple ride hailing providers and local taxi firms in one app</h2>
          <p>Allowing riders to select the provider that offers the best price, service or travel time, then seamlessly book within the app</p>
        </div>
        <div className={styles.App_sectionTwoContent}>
          <div>
            {/* <Phone /> */}
            <img src={Phone} alt="phone" />
          </div>
          <div>
            {
              stepData && stepData.map((e, i) => (
                <div className={styles.App_sectionTwoContentStepItem} key={e.title}>
                  <div className={styles.indicator}><p>{`Step ${i + 1} `}</p> </div>
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

      <section className={styles.App_sectionThree}>

          <div className={styles.App_sectionThree__MainHeader}>
            <h3 >Why WhichRide</h3>
           </div>
           <div className={styles.App_sectionThree__Content}>
          {
            choices && choices.map((e, i) => (
              <Choice heading={e.heading} icon={e.icon} subHeading={e.subHeading} />
            ))
          }  
             </div>
      </section>

      <section className={styles.App_sectionFour}>
        <div className={styles.App_sectionFour__Content}>
          <div className={styles.App_sectionFour__Header4}>
            <h2>
              Sign up to our beta form
            </h2>
            <div className={styles.App_sectionFour__Paragraph4}>
              <p>Sign up to our mailing list to find out more information and keep up to date about our activities
              </p>
            </div>
          </div>
          <div className={styles.App_sectionFour__Email}>
            <input type="email" id="email" placeholder="email" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </section>

      <section className={styles.App_sectionFive}>
        <div className={styles.App_sectionFive__BottomContent}>
          <p>© 2020 Whichride - All rights reserved </p>

          <div className={styles.App_sectionFive__BottomLinks}>{

            bottomData && bottomData.map((e) => (

              <p key={e}> {e}</p>
            ))
          }
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
