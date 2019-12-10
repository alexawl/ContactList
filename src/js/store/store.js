import Flux from "@4geeksacademy/react-flux-dash";
class Store extends Flux.DashStore {
	constructor() {
		super();
		this.addEvent("contacts", (data) => {
			//transform the data
			return data;
		});
	}
}

export default new Store();
