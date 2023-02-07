const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  console.log('comments in');
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: ['title', 'post_content', 'user_id'],
        },
        {
        model: User,
        attributes: ['username', 'github']
        }
      ],
    });
    const comment = commentData.get({ plain: true });

    res.render('singlePost', {
      ...comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/:id', withAuth, async (req, res) => {
//   console.log('comment in');
//   try {
//     const commentData = await Post.findByPk(req.params.id,  {
//       include: [
//         {
//           model: Comment,
//           attributes: ['comment'],
//         },
//         {
//         model: User,
//         attributes: ['username', 'github']
//         }
//       ],
//     });
//     const comment = commentData.get({ plain: true });
//     console.log(comment);
//     res.render('singlePost', {
//       ...comment,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;