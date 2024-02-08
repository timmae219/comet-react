import Post from "../models/post";

export default class PostService {

    async getPopularPosts() : Promise<Array<Post>> {

        const rawJsonResponse: string = await (await fetch('https://www.api.reddit.com/hot')).json();
        const responseObject: any = JSON.parse(rawJsonResponse);
        const rawPostsArray: Array<any> = responseObject['data']['children'];

        const popularPosts = rawPostsArray.map((rawPost) => {
            return Post.fromJson(rawPost);
        });

        return popularPosts;
    }
}