import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<div> <Preloader /> </div>}>
                        <Routes>

                            <Route path='/profile/:userId'
                                   element={<ProfileContainer/>}/>

                            {<Route path='/profile'
                                    element={<ProfileContainer/>}/>}

                            <Route path='/dialogs/*'
                                   element={<DialogsContainer/>}/>

                            <Route path='/users'
                                   element={<UsersContainer/>}/>

                            <Route path='/news' element={<News/>}/>

                            <Route path='/music' element={<Music/>}/>

                            <Route path='/settings' element={<Settings/>}/>

                            <Route path='/login' element={<LoginPage/>}/>

                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

let SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp;