import PostService from "../../services/postService";
import { GET_POPULAR_POSTS } from "../actionTypes";
import { Action } from "../actions";

const initialState = {
    posts: []
};

const postService = new PostService();

export default async function(state = initialState, action: Action){
    switch(action.type){
        case GET_POPULAR_POSTS: {
            const popular_posts = await postService.getPopularPosts();
            return {
                posts: popular_posts
            }
        }
    }
}