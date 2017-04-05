import * as React from "react";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface IRootLayoutProps{
    childs:any;
}

export default class RootLayout extends FabaWebBaseComponent<IRootLayoutProps>{
    constructor(props:IRootLayoutProps){
        super(props);
    }

    render(): React.ReactElement<IRootLayoutProps>{
        return(
            <div>
                {this.props.childs}
            </div>
        )
    }
}