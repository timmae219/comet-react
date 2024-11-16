import { fetchPosts } from "./reducers/posts";

export class Action {
    type: string;
    payload: object;

    constructor(type: string, payload: object){
        this.type = type;
        this.payload = payload;
    }
}

export const getPopularPosts = () => (
    fetchPosts()
);