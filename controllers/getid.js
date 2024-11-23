import { Post } from "../models/post.js"

export const getPost = async (req, res) => {
    const id = req.params.id
    const findPost = await Post.findById({ _id: id });
    if (!findPost) {
        res.status(404).json({ msg: "No se pudo encontrar el post" })
        return
    }
    res.json(findPost)
}