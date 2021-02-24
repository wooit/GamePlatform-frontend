let PROG_WORDS = [
    "python",
    "javascript",
    "lua",
    "jquery",
    "mysql",
    "php",
    "react",
    "perl",
    "ruby",
    "css",
    "html",
    "symfony",
    "laravel",
    "angular",
    "vuejs",
    "ember",
    'backbone',
    'django',
    'nodejs',
    'express'
  ];
  
  function randomWord() {
    return PROG_WORDS[Math.floor(Math.random() * PROG_WORDS.length)];
  }
  
  export { randomWord };
  