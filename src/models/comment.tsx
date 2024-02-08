export default class Comment {
    userProfilePictureUri: string;
    userName: string;
    commentText: string;

    constructor(userProfilePictureUri: string, userName: string, commentText: string){
        this.userProfilePictureUri = userProfilePictureUri;
        this.userName = userName;
        this.commentText = commentText;
    }
}