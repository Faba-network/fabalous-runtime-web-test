import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaImmutableStore from "@fabalous/core/store/FabaImmutableStore";
import Routes from "src/common/Routes";
import Store from "src/common/Store";
import RootLayout from "src/common/RootLaylout";


class T_Main extends FabaRuntimeWeb{
    constructor(store, module){
        super(store, Routes, RootLayout, module);
    }
}

new T_Main(new FabaImmutableStore(new Store()), module);