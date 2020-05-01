import React, { Component } from 'react';

class InputBox extends Component {
    state = {
        input: ""
    }


    handleInputChange = (e) => {
        this.setState(
            {
                input: e.currentTarget.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.input === "") {
            return;
        }
        this.props.addTask(this.state.input);
        this.setState({ input: "" });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="inputBox"></label>

                <input type="text" placeholder="TASK" id="Name"
                    onChange={this.handleInputChange}
                    value={this.state.input} />
            </form>
        )
    }
}

export default InputBox;