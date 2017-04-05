import * as React from "react";

import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface ITestViewProps{
    msg:string;
}

export default class TestView extends FabaWebBaseComponent<ITestViewProps>{
    constructor(props:ITestViewProps){
        super(props);
        console.log(props);
    }

    render():React.ReactElement<ITestViewProps> {
        console.log("render");
        return(
           <div>{this.props.msg}</div>
        )
    }
}