import { GET_POPULAR_POSTS } from "./actionTypes";

export class Action {
    type: string;
    payload: object;

    constructor(type: string, payload: object){
        this.type = type;
        this.payload = payload;
    }
}

export const getPopularPosts: () => Action = () => (
    new Action(GET_POPULAR_POSTS, {})
);