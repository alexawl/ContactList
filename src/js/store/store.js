import Flux from "@4ggeksacademy/react-flux-dash";

class Store extends Flux.DashStore{
    constructor(){
        super();
        this.addEvent("contacts", (data)=>{
            return data;
        });
    }
}

export default new Store();