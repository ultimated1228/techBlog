const router = require('express').Router();
const { Comment} = require('../../models');

router.post('/', async (req, res) => {
    //create new comment
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json({ newComment, success: true });
    } catch (err) {
        res.status(500).json({ error: 'Error processing comment' });
    }
});

router.put('/:id', async (req, res) => {
    //update a comment by it's individual ID
    try {
        const [updatedCount] = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (updatedCount === 0) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.json({ message: 'Comment updated successfully', success: true });
    } catch (err) {
        res.sendStatus(500).json({ error: 'Error processing comment update' });
    }
});

router.delete('/:id', async (req, res) => {
    // delete one comment by the ID
    try {
        const deletedCount = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        return res.status(204).json({ message: 'Comment was deleted successfully', success: true });
    } catch (err) {
        res.sendStatus(500).json({ error: 'Error deleting comment' });
    }
});

module.exports = router;