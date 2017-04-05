export interface IRoutes {
    route: string;
    module: any;
    view?: string;
}

export default class Routes {
    static INDEX: IRoutes = {
        route: "/", module: async(): Promise<void> => {
            if (process.env.FABALOUS_DEBUG > 0){
                console.log("Load Route Index");
            }
            if (process.env.FABALOUS_RUNTIME == "web"){
                return System.import("./../testModule");
            }
        }
    };

    static getRoutes() {
        let routes = [
            Routes.INDEX
        ];

        return routes;
    }
}