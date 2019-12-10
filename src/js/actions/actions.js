import Flux from "@4ggeksacademy/react-flux-dash";
import AddContact from "../views/AddContact";
import Contacts from "../views/Contacts";
import store from "../store/store.js";

export let AddContact = contacts => {
	let contacts = store.getEvent("contacts");
	if (!contacts) contacts = [contacts];
	else contacts.push(contacts);
	Flux.dispatchEvent("contacts", contacts);
};
