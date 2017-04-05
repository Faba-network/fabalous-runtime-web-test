import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import Store from "src/common/Store";
import InitTestEvent from "src/testModule/event/InitTestEvent";
import TestView from "src/testModule/view/TestView";
import * as React from "react";


export default class TestCommand extends FabaWebCommand<Store>{
    execute(event:InitTestEvent){
        event.view = React.createElement(TestView, {msg:"teste"});
        event.callBack();
    }
}