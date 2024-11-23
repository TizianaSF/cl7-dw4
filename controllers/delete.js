import { Post } from "../models/post.js"

// export const updatePost = async (req, res) => {
//     const id = req.params.id

//     const findPost = await Post.findById({ _id: id });

//     if (!findPost) {
//         const error = new Error("Post no encontrado");
//         return res.send(404).json({ msg: error.message });
//     }

//     try {
//         await Post.findByIdAndDelete(id);
//         res.json({ msg: "findPost eliminado correctamente" });
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

export const deletePost = async ()=> {
    await Post.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.error('Error al eliminar el usuario:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.send('Usuario eliminado exitosamente');
        }
    })
}