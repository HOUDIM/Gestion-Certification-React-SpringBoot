import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Certification from 'pages/Certification';
import CertificationDetail from 'pages/CertificationDetail';


// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import User from 'pages/admin/User';
import Comments from 'pages/admin/Comments';
import EditComment from 'pages/admin/EditComment';
import Project from 'pages/admin/Project';
import AddProject from 'pages/admin/AddProject';
import EditProject from 'pages/admin/EditProject';

function App() {
    return (
        <Switch   >
            <Route exact  path="/back/Users" component={User} />
            <Route exact  path="/back/Comments" component={Comments} />
            <Route exact  path="/back/Comments/:id" component={EditComment} />
            <Route exact  path="/back/Certifivations" component={Project} />
            <Route exact  path="/back/Certifivations/add" component={AddProject} />
            <Route exact  path="/back/Certifivations/:id" component={EditProject} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/certification" component={Certification} />
            <Route exact path="/certification/:id" component={CertificationDetail} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
