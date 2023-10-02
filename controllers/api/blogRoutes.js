const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

router.post('/', async (req, res) => {
    //create new blog
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json({ newBlog, success: true });
    } catch (err) {
        res.status(500).json({ error: 'Error processing blog post' });
    }
});

router.put('/:id', async (req, res) => {
    //update a post by it's individual ID
    try {
        const [updatedCount] = await Blog.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (updatedCount === 0) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        res.status(200).json({ message: 'Blog post updated successfully', success: true });
    } catch (err) {
        res.sendStatus(500).json({ error: 'Error processing blog update' });
    }
});

router.delete('/:id', async (req, res) => {
    // delete one blog by its `id` value
    try {
        const deletedCount = await Blog.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        return res.status(204).json({ message: 'Blog post was deleted successfully', success: true });
    } catch (err) {
        res.sendStatus(500).json({ error: 'Error deleting blog post' });
    }
});

module.exports = router;