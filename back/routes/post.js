const express = require('express');
// require = import

const router = express.Router();

// 생성
router.post('/',  (req, res)=>{ // POST /post
  res.json({ id: 1, content: 'hello' });
});

// 삭제
router.delete('/',  (req, res)=>{ //DELETE /post
  res.json({ id: 1 });
});

module.exports = router;
// export = module.exports
