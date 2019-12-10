import React from "react";
import Flux from "@4ggeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import * as actions from "../actions/actions";
import store from "../store/store";
export default class Contacts extends Flux.DashView {
	constructor() {
		super();
		this.state = {
			full_name: ""
		};
	}
	componentDidMount() {
		this.subscribe(store, "contacts", () => {
			this.props.hiatory.push("/");
		});
	}
	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={e =>
									this.setState({
										full_name: e.target.value
									})
								}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Enter email" />
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="phone" className="form-control" placeholder="Enter phone" />
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter address" />
						</div>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() =>
								actions.AddContact({
									full_name: this.state.full_name
								})
							}>
							save
						</button>
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</form>
				</div>
			</div>
		);
	}
}
