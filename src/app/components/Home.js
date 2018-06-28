import React from "react";
// import PropTypes from "prop-types";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.age,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    onMakeOlder = () => {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeNameLink = () => {
        console.log(this.state.homeLink);
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange = (event) => {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <p>In a new Component</p>
                    <p>Your name is {this.props.user.Name}, your age is {this.state.age}</p>
                    <p>Status : {this.state.status} </p>
                    <hr />
                    <button onClick={() => this.onMakeOlder()} className="btn btn-primary"> Make me Older </button>
                    <hr />
                    <button onClick={this.props.greet} className="btn btn-primary"> Greetings! </button>
                    <hr />
                    <input type="text" 
                           value={this.state.homeLink} 
                           onChange={(event) => this.onHandleChange(event)}
                           
                           />
                    <button onClick={this.onChangeNameLink.bind(this)} className="btn btn-success"> Change Header Link </button>

                </div>

                {/* <h2> {this.props.title} </h2>
                <p>{this.props.user.Name}</p>
                <p>{this.props.user.Age}</p>
                <p>{this.props.user.Position}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.Hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children} */}
            </div>
        );
    }
}
// Home.propTypes = {
//     title: React.PropTypes.string,
//     user: React.PropTypes.object
// };