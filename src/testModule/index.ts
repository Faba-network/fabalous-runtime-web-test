if (process.env.FABALOUS_RUNTIME == "web"){
    module.exports.default = {
        mediator: require("./TestMediator").default,
        initEvent: require("./event/InitTestEvent").default
    };
}