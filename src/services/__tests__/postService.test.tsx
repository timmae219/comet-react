import PostService from "../postService";
import Post from "../../models/post";

// TODO: fix this unit test

// Mock the Post class and its fromJson method correctly
jest.mock("../../models/post", () => {
  return {
    default: {
      fromJson: jest.fn().mockImplementation((rawPost: any) => {
        return {
          title: rawPost.data.title,
          authorUserName: rawPost.data.author,
          subreddit: rawPost.data.subreddit_name_prefixed,
          text: rawPost.data.selftext_html,
          previewMediaUri: rawPost.data.preview ? rawPost.data.preview.images[0].source.url : null,
          votingScore: rawPost.data.ups,
          comments: [],
        };
      }),
    },
  };
});

// Mock the fetch API globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,  // indicates that the response is successful
    status: 200, // HTTP status code
    json: () =>
      Promise.resolve({
        data: {
          children: [
            {
              data: {
                title: "Test Post",
                author: "user",
                subreddit_name_prefixed: "r/test",
                selftext_html: "Test content",
                preview: { images: [{ source: { url: "http://example.com/image.jpg" } }] },
                ups: 10,
              },
            },
          ],
        },
      }),
  } as Response) // Cast to `Response` type
);

describe("PostService", () => {
  let postService: PostService;

  beforeEach(() => {
    postService = new PostService();
  });

  it("should fetch popular posts and return an array of posts", async () => {
    const posts = await postService.getPopularPosts();
    
    // Now we are expecting one post with the correct structure
    expect(posts).toHaveLength(1);
    expect(posts[0].title).toBe("Test Post");
    expect(posts[0].authorUserName).toBe("user");
    expect(posts[0].subreddit).toBe("r/test");
    expect(posts[0].votingScore).toBe(10);
  });

  it("should handle errors when the fetch fails", async () => {
    // Mock a failed fetch request
    global.fetch = jest.fn(() => Promise.reject(new Error("Failed to fetch")));

    await expect(postService.getPopularPosts()).rejects.toThrow("Failed to fetch");
  });
});
