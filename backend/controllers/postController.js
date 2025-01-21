export const createPost = async (req, res) => {
    res.json({ message: "Post created" });
};

export const getPosts = async (req, res) => {
    res.json({ message: "Fetching posts" });
};

export const updatePost = async (req, res) => {
    res.json({ message: "Post updated" });
};

export const deletePost = async (req, res) => {
    res.json({ message: "Post deleted" });
};
