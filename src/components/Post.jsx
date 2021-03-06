import React from "react";
import Card from "./UI/Card";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            };
        });
    }

    render() {
        return (
            <Card>
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-code"></i>
                </div>
                <h2 className="fs-4 fw-bold">{this.props.title}</h2>
                <p className="mb-0">{this.props.about}</p>
                <p>Like: {this.state.counter}</p>
                <button onClick={this.handleLike}>Like</button>
            </Card>
        );
    }
}

export default Post;
