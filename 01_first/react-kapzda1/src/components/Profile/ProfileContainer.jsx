import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {usersAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId= this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile (userId)

    }

    render() {


        return (<div>
                <Profile {...this.props} profile = {this.props.profile}/>

            </div>
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

});

export default compose (
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
   // withAuthRedirect
) (ProfileContainer)