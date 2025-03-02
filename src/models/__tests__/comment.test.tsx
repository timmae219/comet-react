import Comment from "../comment";

describe("Comment Model", () => {
  it("should create a Comment instance with correct properties", () => {
    const comment = new Comment(
      "https://example.com/profile.jpg",
      "testUser",
      "This is a comment",
    );

    expect(comment.userProfilePictureUri).toBe(
      "https://example.com/profile.jpg",
    );
    expect(comment.userName).toBe("testUser");
    expect(comment.commentText).toBe("This is a comment");
  });
});
