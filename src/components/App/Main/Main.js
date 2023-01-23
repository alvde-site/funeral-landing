import Advertisement from "./Advertisement/Advertisement";
import Competence from "./Competence/Competence";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Working from "./Working/Working";
import Faq from "./Faq/Faq";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";
import Conditions from "./Conditions/Conditions";
import Topnav from "./Topnav/Topnav";

function Main(props) {
  return (
    <main className="content">
      <Topnav
        onToggleBurger={props.onToggleBurger}
        isToggleBurger={props.isToggleBurger}
      />
      <Advertisement />
      <Competence />
      <Services servicesData={props.servicesData}/>
      <Portfolio
        portfolioImages={props.portfolioImages}
        onImageClick={props.onImageClick}
      />
      <Working />
      <Faq
        questionsDataList={props.questionsDataList}
      />
      <About />
      <Reviews />
      <Conditions />
    </main>
  );
}

export default Main;
