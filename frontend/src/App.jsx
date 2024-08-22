import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AddComplaint from './comStu/AddComplaint';
import Settings from './comStu/Settings';
import SignUp from './SignUp';
import Admin from './Admin';

function App(){
 return(

    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Student_Dashboard" element={<Dashboard />} />
        <Route path="/Admin_Dashboard" element={<Admin />} />
        <Route path="/add" element={<AddComplaint />} />
        <Route path="/settings" element={<Settings />} />
        </Routes>
    </Router>
 );
}

export default App;
