import React from "react";

const {
    Provider: HackerNewsServiceProvider,
    Consumer: HackerNewsServiceConsumer
} = React.createContext()

export {
    HackerNewsServiceProvider,
    HackerNewsServiceConsumer
}