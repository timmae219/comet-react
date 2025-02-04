import PostService from "../postService";

// Mock the fetch API globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
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
  } as Response)
);

describe("PostService", () => {
  let postService: PostService;

  beforeEach(() => {
    postService = new PostService();
  });

  it("should fetch popular posts and return an array of posts", async () => {
    const posts = await postService.getPopularPosts();
    
    expect(posts).toHaveLength(1);
    expect(posts[0].title).toBe("Test Post");
    expect(posts[0].authorUserName).toBe("user");
    expect(posts[0].votingScore).toBe(10);
  });

  it("should handle errors when the fetch fails", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("Failed to fetch")));
    await expect(postService.getPopularPosts()).rejects.toThrow("Failed to fetch");
  });
});
