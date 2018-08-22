import React from 'react';
import Courses from '../Courses/Courses';
import Users from '../Users/Users';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import NoMatch from '../../component/NoMatch/NoMatch';

const Main = (props) => (
<BrowserRouter>
    <div>
        <header>
        <ul>
            <li>
                <NavLink to="/courses">Courses</NavLink></li>
            <li>
                <NavLink to="/users">Users</NavLink></li>
        </ul>
    </header>
        <main>
            <Switch>
                <Route path='/users' component={Users}/>
                <Route path='/courses' component={Courses}/>
                <Redirect from="/all-courses" to="/courses" />
                <Route component={NoMatch}/>

            </Switch>
        </main>
    </div>
</BrowserRouter>
)


// class Main extends Component {

//     render () {
//         return (
//             <div>
//                 <nav>
//                     <ul>
//                         <li><Link to="/">Courses</Link></li>
//                         <li><Link to="/users">Users</Link></li>
//                     </ul>
//                 </nav>
//                     <Route path="/" exact component={Courses} />
//                     <Route path="/users" exact component={Users} />
//             </div>
//         )
//     };
// }

export default Main;