module.exports = {
  '*.{js,json,md}': 'prettier --write',
  '*.js': 'eslint --fix',
  '**': 'cspell --no-must-find-files',
};
