
// import Nav from './components/nav'
// import Section from './components/section'
// import Footer from './components/footer'
// import Comp from './components/comp'
// import Profiles from './Profiles/Profiles'

import List from './components/lists/list'
import Leslie from '../public/Leslie-Alexander.jpg'
import Michael from '../public/Michael-Foster.jpg'
import Dries from '../public/Dries-Vincent.jpg'
import Lindsay from '../public/Lindsay-Walton.jpg'
import Coutney from '../public/Courtney-Henry.jpg'
import Tom from '../public/tom-cook.jpg'

import './App.css'

function App() {

  return (
    <>
    {/* <Nav/>
    <Section/>
    <Footer/>
    <button>View All</button>
    <Comp text="confirm" word="Hey, You!"/> */}
     <div>
     
    <List image={Leslie} name="Leslie Alexander" email="leslie.alexander@gmail.com" position="Co-Founder / CEO" time="Last seen 3 hrs ago"/>
    <List image={Michael} name="Michael Foster" email="michael.foster@gmail.com" position="Co-Founder / CTO" time="Last seen 3 hrs ago"/>
    <List image={Dries} name="Dries Vicent" email="dries.vicent@gmail.com" position="Business Relations" time="Online"/>
    <List image={Lindsay} name="Lindsay Walton" email="lindsay.walton@gmail.com" position="Front-End Developer" time="Last seen 3 hrs ago"/>
    <List image={Coutney} name="Courtney Henry" email="courtney.henry@gmail.com" position="Designer" time="Last seen 3 hr ago"/>
    <List image={Tom} name="Tom Cook" email="tom.cook@gmail.com" position="Director of Product" time="online"/>
    </div>
    </>
  )
}

export default App
