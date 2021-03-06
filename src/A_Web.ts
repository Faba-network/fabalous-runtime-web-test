import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaImmutableStore from "@fabalous/core/store/FabaImmutableStore";
import Routes from "src/common/Routes";
import Store from "src/common/Store";
import RootLayout from "src/common/RootLaylout";


class A_Web extends FabaRuntimeWeb{
    constructor(store, module){
        super(store, Routes, RootLayout, module);
    }
}

new A_Web(new FabaImmutableStore(new Store()), module);