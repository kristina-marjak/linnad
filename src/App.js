import Linn from './Linn';
import piltViin from './images/vienna.png';
import piltSydney from './images/sydney.png';
import piltPariis from './images/paris.jpg';

import './App.css';

const LINNAD = [
  {
    nimi: 'Vienna',
    kirjeldus: 'Vienna, Austria’s capital, lies in the country’s east on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart, Beethoven and Sigmund Freud. The city is also known for its Imperial palaces, including Schönbrunn, the Habsburgs’ summer residence. In the MuseumsQuartier district, historic and contemporary buildings display works by Egon Schiele, Gustav Klimt and other artists.',
    pilt: piltViin
  },
  {
    nimi: 'Sydney',
    kirjeldus: 'Sydney, capital of New South Wales and one of Australia’s largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360 - degree views of the city and suburbs.',
    pilt: piltSydney
  }
  ,
  {
    nimi: 'Paris',
    kirjeldus: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    pilt: piltPariis
  }
];

const App = () => (
  <div className='App'>
    {LINNAD.map(linn => (
      <Linn andmed={linn} />
    ))}
  </div>
);


export default App;
