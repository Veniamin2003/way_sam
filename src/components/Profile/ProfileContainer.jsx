import React from "react";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    constructor(props) {
        super( props );
        this.state = {
            isShowMyProfile: true
        }
    }

    componentDidMount() {

        let userIdFromPath = +this.props.router.params.userId;
        let authorisedUserId = this.props.authorisedUserId;

        if (userIdFromPath) {

            this.props.getUserProfile( userIdFromPath );
            this.props.getStatus( userIdFromPath );

        } else {

            if (this.props.isAuth) {
                this.props.getUserProfile( authorisedUserId );
                this.props.getStatus( authorisedUserId );
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        let userIdFromPath = +this.props.router.params.userId;
        let authorisedUserId = this.props.authorisedUserId;
        let isShowMyProfile = this.state.isShowMyProfile;

        if (isShowMyProfile) {

            if (userIdFromPath === authorisedUserId) {
                this.setState( {isShowMyProfile: false} )
            }

            if (!userIdFromPath && this.props.isAuth) {
                this.props.getUserProfile( authorisedUserId );
                this.props.getStatus( authorisedUserId );
                this.setState( {isShowMyProfile: false} )
            }
        }
    }

    render() {

        if (!this.props.isAuth && !this.props.router.params.userId) {
            return <Navigate to={'/login'} />
        }

        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.router.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                />
            </div>
        )
    }
}

function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return <Component
            {...props}
            router={{location, navigate, params}} />;
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

const ProfileContainerCompose = compose(
    withRouter,
    connect( mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} )
)( ProfileContainer );

export default ProfileContainerCompose;