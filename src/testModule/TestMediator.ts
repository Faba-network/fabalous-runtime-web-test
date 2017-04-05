import FabaRuntimeWebMediator from "@fabalous/runtime-web/FabaRuntimeWebMediator";
import InitTestEvent from "src/testModule/event/InitTestEvent";
import TestCommand from "src/testModule/command/TestCommand";

export default class TestMediator extends FabaRuntimeWebMediator{
    registerCommands(){
        this.addCommand(InitTestEvent, TestCommand)
    }
}