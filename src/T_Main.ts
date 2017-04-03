import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaImmutableStore from "@fabalous/core/store/FabaImmutableStore";

class T_Main extends FabaRuntimeWeb{
    constructor(store){
        super(store);
    }
}

new T_Main(new FabaImmutableStore({}));