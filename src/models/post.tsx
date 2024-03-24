import Comment from "./comment";

export default class Post {
    title: string;
    authorUserName: string;
    subreddit: string;
    text: string;
    previewMediaUri: string | null;
    votingScore: number;
    comments: Array<Comment>;

    constructor(
        title: string,
        authorUserName: string,
        authorProfilePictureUri: string,
        text: string,
        previewMediaUri: string | null,
        votingScore: number,
        comments: Array<Comment>
        ) {
        this.title = title;
        this.authorUserName = authorUserName;
        this.subreddit = authorProfilePictureUri;
        this.text = text;
        this.previewMediaUri = previewMediaUri;
        this.votingScore = votingScore;
        this.comments = comments;
    }

    static fromJson(json: any): Post {
        // TODO: parse comments
        console.log(json);
        return new Post(
            json['data']['title'],
            json['data']['author'],
            json['data']['subreddit_name_prefixed'],
            json['data']['selftext_html'],
            json['data']['preview'] ? json['data']['preview']['images'][0]['source']['url'] : null,
            json['data']['ups'],
            []
        );
    }
}