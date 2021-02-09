const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');


// /api/comment/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comment/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);



module.exports = router;