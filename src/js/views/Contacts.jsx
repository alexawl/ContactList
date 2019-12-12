import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";
import store from "../stores/store";
import * as actions from "../actions/actions";
import Flux from "@4geeksacademy/react-flux-dash";

export default class Contacts extends Flux.DashView {
	constructor() {
		super();
		this.state = {
			contacts: []
		};
	}
	componentDidMount() {
		let contacts = store.getState("contacts");
		if (contacts) this.setState({ Contacts });
		this.subscribe(store, "contacts", contacts => {
			this.setState({ Contacts });
		});
	}
	render() {
		const cards = this.state.contacts.map((c, i) => {
			return <ContactCard key={i} data={c} onDelete={contact => actions.deleteContact(contact)} />;
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
