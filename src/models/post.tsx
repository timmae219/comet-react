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
    comments: Array<Comment>,
  ) {
    this.title = title;
    this.authorUserName = authorUserName;
    this.subreddit = authorProfilePictureUri;
    this.text = text;
    this.previewMediaUri = previewMediaUri;
    this.votingScore = votingScore;
    this.comments = comments;
  }

  static fromJson(json: PostJson): Post {
    // TODO: parse comments
    return new Post(
      json.title ? json.title : "No title",
      json.author,
      json.subreddit_name_prefixed,
      json.selftext_html,
      json.preview ? json.preview.images[0].source.url : null,
      json.ups,
      [],
    );
  }
}

export interface PostJson {
  title: string;
  author: string;
  subreddit_name_prefixed: string;
  selftext_html: string;
  preview?: { images: { source: { url: string } }[] };
  ups: number;
}
