import Comment from "./comment";

export default class Post {
    title: string;
    authorUserName: string;
    authorProfilePictureUri: string;
    text: string;
    previewMediaUri: string;
    votingScore: number;
    comments: Array<Comment>;

    constructor(
        title: string,
        authorUserName: string,
        authorProfilePictureUri: string,
        text: string,
        previewMediaUri: string,
        votingScore: number,
        comments: Array<Comment>
        ) {
        this.title = title;
        this.authorUserName = authorUserName;
        this.authorProfilePictureUri = authorProfilePictureUri;
        this.text = text;
        this.previewMediaUri = previewMediaUri;
        this.votingScore = votingScore;
        this.comments = comments;
    }
}