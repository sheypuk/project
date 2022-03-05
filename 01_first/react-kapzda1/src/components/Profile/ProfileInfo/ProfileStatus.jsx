import React, {Component} from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditNode= ()=> {
        this.setState({
            editMode: true
        })
    }
    deactivateEditNode= ()=> {
        this.setState({
            editMode: false
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditNode} > {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditNode.bind(this)} value={this.props.staus}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
