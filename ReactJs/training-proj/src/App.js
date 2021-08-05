import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PropTypes from 'prop-types';
import LifeCycle from './components/LifeCycle';
import DemoUseEffect from './components/DemoUseEffect';
import DemoForm from './components/DemoForm';

function App(props) {
  // let greet = "Welcome Back";
  // let address = "Brillio jpnagar Bengluru";
  // let username = {fname:'Kru', lname:"vasant"};
  return(
    <div className='App'>
      <h1 className="Heading">Welcome to My first react project</h1>
      {/* <Home userName={username.fname + " " + username.lname} />
      <AboutUs greet={greet} org="Brillio" />
      <ContactUs address={props.mobile} /> */}
      {/* <LifeCycle/> */}

      {/* <DemoUseEffect /> */}

      <DemoForm />
    </div>
  );
}

// proptypes is for validated the data only  -npm i prop-types
App.propTypes={
  mobile:PropTypes.number,
  country:PropTypes.string
}

App.defaultProps={
  mobile:99876689,
  country:"India"
}

export default App;
