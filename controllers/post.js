import Post from "../models/post"

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().exec()
        res.json(posts)
    } catch (error) {
        res.status(400).json({
            message: "Khong co du lieu"
        })
    }
}

export const getPost = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const post = await Post.findOne(filter)
        res.json(post)
    } catch (error) {
        res.status(404).json({
            message: "Khong tim thay"
        })
    }
}

export const addPost = async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc"
        })
    }
}

export const editPost = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const post = await Post.findOneAndUpdate(id, req.body, { new: true });
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Khong the cap nhat"
        })
    }
}

export const removePost = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const post = await Post.findOneAndDelete(id);
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Khong the xoa"
        })
    }
}

export const searchPost = async (req, res) => {
    const key = req.query.q ? req.query.q : ''
    try {
        const newPost = await Post.filter((item) => {
            return item.job_name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        })
        res.render('index', {
            posts: newPost
        }).json()
    } catch (error) {
        res.status(404).json({
            message: "Khong tim thay"
        })
    }
}