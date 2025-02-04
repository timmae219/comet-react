import Post from "../models/post";

export default class PostService {

    async getPopularPosts() : Promise<Array<Post>> {

        const rawJsonResponse: any = await (await fetch('https://api.reddit.com/hot')).json();
        const rawPostsArray: Array<any> = rawJsonResponse['data']['children'];

        const popularPosts = rawPostsArray.map((rawPost) => {
            return Post.fromJson(rawPost);
        });

        console.log(`Popular posts: ${JSON.stringify(popularPosts)}`);

        return popularPosts;
    }
}