// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  "info": {
    "name":    "趣味小测试：什么样的香气最适合你",
    "main":    "<p>香气精灵是可以激发或唤醒不同的情绪记忆、心灵反应、甚至性感地带的。每个小小的香氛因子就像神奇的魔幻精油，或兴奋，或安抚，或妩媚，借着香气连结左脑与右脑、理性与感性、现实与梦想，把女人最美好的特质完美的呈现出来。</p><p>所以，为了达到完美的效果，在选择香水之前最好先认识自己的“香气EQ”，再找出最能强化或平衡它们的香氛精灵，让香水成为你整体造型的一种工具。例如，如果你是个作风中性、中偏左脑思维的女强人，不妨用感性的香水加以平衡；如果你是个过于浪漫甜腻的右脑思维者，就可以用柑苔果香调的香水加以调剂，让它不张扬的调性，在清香中透露着对梦想的渴望。总之，用香味让你的个人内格更加完美吧。</p>",
    "results": "<h5>结果</h5><p>你的“香气EQ”</p>",
    "assessments": [
      {
        "range": {"from": 21, "to": 35},
        "assessment": "<p>热情好强的享乐主义左脑思维者</p><table><tbody><tr><td>香调</td><td>应用花材</td><td>魅惑特性</td></tr><tr><td>香甜花香调</td><td>铃兰，玉兰，茉莉；再以檀香，麝香带出粉香</td><td>甜腻的脂粉香气，浓得化不开的性感诱惑，让惯于左脑思维的你更能掌握人际关系的主导权</td></tr><tr><td>柑苔动物花香调</td><td>麝香，抹香鲸，橡树香，佛手柑，依兰</td><td>浓郁强烈的香气，强度的浪温煸情魅惑，可以中和或美化你有可能过于阳刚功利的个性</td></tr></tbody></table>"},
      {
        "range": {"from": 11, "to": 20},
        "assessment": "<p>活泼开朗的务实型中偏左脑思维者</p><table><tbody><tr><td>香调</td><td>应用花材</td><td>魅惑特性</td></tr><tr><td>果蜜花香调</td><td>茉莉，玫瑰，柑橘，水蜜桃......</td><td>混合清新水果甜香和馥郁花香的欢快调性，即捉摸不定又百闻不腻；可以增加魅惑的深度，弱化像傻大姐般的直率</td></tr><tr><td>柑苔清香调</td><td>橘子，佛手柑，橡树苔，香草</td><td>清新如大自然清晨的草木香；淡定而从容，抚慰受伤、不安定的灵魂。藉此强化务实型中偏左脑思维者的善良和温柔</td></tr></tbody></table>"
      },
      {
        "range": {"from": 0, "to":10 },
        "assessment": "</p>无可救药的浪漫主义右脑思维者</p>"
      }
      
    ]
  },
  "questions": [
    { // Question 1 - Multiple Choice, Single True Answer
      "q": "你最喜欢哪种布料的衣服？",
      "a": [
        {"option": "柔软的丝质衬衫",      "score": 7},
        {"option": "帅气的细麻衬衫",     "score": 5},
        {"option": "凉爽透气的棉布",      "score": 3},
        {"option": "温暖的安哥拉毛呢",     "score": 1} // no comma here
      ],
      "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
      "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
    },
    { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
      "q": "你的化妆包中，口红多数是什么颜色？",
      "a": [
        {"option": "鲜艳的正红色", "score": 7},
        {"option": "浪漫的玫瑰色", "score": 3},
        {"option": "甜美的粉红色", "score": 1},
        {"option": "优雅的绛红色", "score": 5} // no comma here
      ],
      "select_any": true,
      "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
      "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
    },
    { // Question 3 - Multiple Choice, Multiple True Answers, Select All
      "q": "你目前的发型是？",
      "a": [
        {"option": "及肩的中长发", "score": 7},
        {"option": "长长的卷发", "score": 3},
        {"option": "露耳的短发", "score": 5},
        {"option": "飘逸的直长发", "score": 1} // no comma here
      ],
      "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
      "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
    },
    { // Question 4
      "q": "你现在穿的？没错，此时此刻穿的是？",
      "a": [
        {"option": "贴身的高领毛衣", "score": 5},
        {"option": "厚棉布上衣", "score": 7},
        {"option": "无领的厚毛衣", "score": 1},
        {"option": "印花衬衫", "score": 3} // no comma here
      ],
      "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
      "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
    },
    { // Question 4
      "q": "喜欢在卧室插什么花？",
      "a": [
        {"option": "随手摘来的不知名小花", "score": 5},
        {"option": "向日葵", "score": 7},
        {"option": "栀子花", "score": 1},
        {"option": "玫瑰花", "score": 3} // no comma here
      ],
      "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
      "multi_select": true,
      "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
    }
  ]
};
