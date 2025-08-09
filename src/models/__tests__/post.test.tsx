import Post from "../post";
import Comment from "../comment";

describe("Post Model", () => {
  it("should create a Post instance with correct properties", () => {
    const comments = [
      new Comment("https://example.com/profile.jpg", "testUser", "Great post!"),
    ];
    const post = new Post(
      "Test Title",
      "authorUser",
      "r/testSubreddit",
      "This is the post text",
      "https://example.com/image.jpg",
      123,
      comments,
    );

    expect(post.title).toBe("Test Title");
    expect(post.authorUserName).toBe("authorUser");
    expect(post.subreddit).toBe("r/testSubreddit");
    expect(post.text).toBe("This is the post text");
    expect(post.previewMediaUri).toBe("https://example.com/image.jpg");
    expect(post.votingScore).toBe(123);
    expect(post.comments).toEqual(comments);
  });

  describe("fromJson", () => {
    it("should parse JSON data and create a Post instance", () => {
      const jsonData = {
        data: {
          title: "Sample Post Title",
          author: "sampleUser",
          subreddit_name_prefixed: "r/sampleSubreddit",
          selftext_html: "<p>Sample post content</p>",
          preview: {
            images: [{ source: { url: "https://example.com/sample.jpg" } }],
          },
          ups: 42,
        },
      };

      const post = Post.fromJson(jsonData.data);

      expect(post.title).toBe("Sample Post Title");
      expect(post.authorUserName).toBe("sampleUser");
      expect(post.subreddit).toBe("r/sampleSubreddit");
      expect(post.text).toBe("<p>Sample post content</p>");
      expect(post.previewMediaUri).toBe("https://example.com/sample.jpg");
      expect(post.votingScore).toBe(42);
      expect(post.comments).toEqual([]);
    });

    it("should handle missing preview image gracefully", () => {
      const jsonData = {
        data: {
          title: "Title without Image",
          author: "userWithoutImage",
          subreddit_name_prefixed: "r/noImageSubreddit",
          selftext_html: "<p>No image content</p>",
          ups: 15,
        },
      };

      const post = Post.fromJson(jsonData.data);

      expect(post.title).toBe("Title without Image");
      expect(post.authorUserName).toBe("userWithoutImage");
      expect(post.subreddit).toBe("r/noImageSubreddit");
      expect(post.text).toBe("<p>No image content</p>");
      expect(post.previewMediaUri).toBeNull();
      expect(post.votingScore).toBe(15);
      expect(post.comments).toEqual([]);
    });
  });
});
