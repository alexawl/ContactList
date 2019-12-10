import Flux from "@4ggeksacademy/react-flux-dash";
import AddContact from "../views/AddContact";
import Contacts from "../views/Contacts";
import store from "../store/store.js";

export let AddContact = contact => {
	let contacts = store.getState("contacts");
	if (!contacts) contacts = [contact];
	else contacts.push(contact);
	Flux.dispatchEvent("contacts", contacts);
};
