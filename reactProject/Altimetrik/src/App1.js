import React, { Component } from "react";

export default class App extends Component {
    state = {
        item: "",
        data: []
    };

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    strikeHandler = (key) => {
        const newData = this.state.data.filter((item) => {
            if (item.id === key) {
                item.mark = !item.mark;
            }
            return item;
        });
        console.log(newData);
        this.setState((prevState) => ({
            data: newData
        }));
    };

    addHandler = () => {
        if (this.state.item !== "") {
            console.log("inside button");
            this.setState((prevState) => ({
                ...prevState,
                data: [
                    ...prevState.data,
                    { value: prevState.item, mark: false, id: Date.now() }
                ],
                item: ""
            }));
        }
    };

    render() {
        const length = this.state.data.filter((item) => item.mark !== "true");
        console.log("length", length);
        return (
            <>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.inputHandler}
                />
                <button type="submit" onClick={this.addHandler}>
                    Add
                </button>
                <br></br>
                <span>
                    {this.state.data.filter((item) => item.mark !== true).length}
                        remaining out of {this.state.data.length}
                </span>
                <br></br>
                <ul>
                    {this.state.data?.map((item, index) => {
                        return (
                            <li
                                key={item.id}
                                style={{ textDecoration: item.mark ? "line-through" : "none" }}
                                onClick={() => this.strikeHandler(item.id)}
                            >{item.value}
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}
