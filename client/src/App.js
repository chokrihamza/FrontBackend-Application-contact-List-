import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import ContactList from './Components/ContactList';
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';

import { toggleFalse } from './js/actions/edit';
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
        <h2>work shop mern Application</h2>
        <Link to='/add'>
          <Button inverted color='blue' onClick={() => dispatch(toggleFalse())}>
            Add Contact
      </Button></Link>
        <Link to='/'>
          <Button inverted color='blue'>
            Contact List
      </Button></Link>
      </div>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>

    </div>
  );
}

export default App;
