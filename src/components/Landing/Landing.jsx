import AboutMe from 'components/AboutMe/AboutMe';
import AboutProject from 'components/AboutProject/AboutProject';
import Promo from 'components/Promo/Promo';
import Techs from 'components/Techs/Techs';

import './Landing.css';

function Landing() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Landing;
