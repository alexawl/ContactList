import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.js";
import store from "../store/store.js";
import Flux from "@4geeksacademy/react-flux-dash";

export default class Contacts extends Flux.DashView {
	constructor() {
		super();
		this.state = {
			contacts: []
		};
	}
	componentDidMount() {
		this.subscribe(store, "contacts", () => {
			this.setState({ Contacts });
		});
	}
	render() {
		const cards = this.state.contacts.map((c, i) => {
			return <ContactCard key={i} data={c} />;
		});
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					</p>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{cards}
							<ContactCard onDelete={() => this.setState({ showModal: true })} />

							<ContactCard />
							<ContactCard />
							<ContactCard />
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
