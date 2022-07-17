const express = require('express');
const router = express.Router();

const Article = require('../Models/articles')

// router.get('/:id',(req,res){})

router.post('/', async(req, res) => {
    // res.send('List of articles')
    const article = new Article({
      title: req.body.title,
      description: req.body.description,
      markdown:req.body.markdown,
    })
    try{
      const newArticle = await article.save()
      res.redirect(`/articles/${article.id}`, res.status = 200)
    }catch(err){
      res.redirect('/articles/new', {article: article})
      throw err
    }
  })

router.get('/new', (req, res) => {
    res.render('../views/articles/new')
  })

module.exports = router;