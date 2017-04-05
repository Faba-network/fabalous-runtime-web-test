import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitTestEvent extends FabaEvent {

    view:any;

    constructor() {
        super("InitTestEvent");
    }
}