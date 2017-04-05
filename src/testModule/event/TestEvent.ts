import FabaEvent from "@fabalous/core/FabaEvent";

export default class TestEvent extends FabaEvent {

    view:any;

    constructor() {
        super("TestEvent");
    }
}