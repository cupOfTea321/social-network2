import React from "react";


class ProfileStatus extends React.Component  {

    state = {
        editMode: false,
        status: this.props.status
    }
    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value,
        })
    }
    activateEditMode () {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {

        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    render() {
        return(
            <div>
                {!this.state.editMode &&
                    <p onDoubleClick={() => {this.activateEditMode()} } className="grey_text">{this.props.status || "----"} </p>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => {this.deactivateEditMode()} } value={this.state.status}/>
                }

            </div>

        )
    }


}
export default ProfileStatus;
