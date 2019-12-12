import Flux from "@4geeksacademy/react-flux-dash";
import store from "../stores/store";
export const AddContact = contact => {
	let contacts = store.getState("contacts");
	if (!contacts) contacts = [contact];
	else contacts.push(contact);
	Flux.dispatchEvent("contacts", contacts);
};
export const deleteContact = contact => {
	let contacts = store.getState("contacts");
	const newListOfContacts = contacts.filter(c => c.id != contact.id);
	Flux.dispatchEvent("contacts", newListOfContacts);
};
export const editContact = contact => {
	let contacts = store.getState("contacts");
	const newListOfContacts = contacts.map(c => {
		if (c.id == contact.id) return contact;
		return contact;
	});

	Flux.dispatchEvent("contacts", newListOfContacts);
};
window.AddContact = AddContact;
window.deleteContact = deleteContact;
