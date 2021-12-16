import React from "react";
import { HackerNewsServiceConsumer } from "../components/hacker-news-service-context";

const withHackerNewsService = () => (Wrapped) => {
    return (props) => {
        return (
            <HackerNewsServiceConsumer>
                {
                    (hackerNewsService) => {
                        return (<Wrapped {...props}
                            hackerNewsService={hackerNewsService} />)
                    }
                }
            </HackerNewsServiceConsumer>
        )
    }
}

export default withHackerNewsService