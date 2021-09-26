const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    })
    .catch(() => new Error ('Deu ruim'));
};

test('Pegando lista de nomes do repositorio da trybe', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  return getRepos(url).then((reposNames) => {
    expect(reposNames).toContain('sd-01-week4-5-project-todo-list');
    expect(reposNames).toContain('sd-01-week4-5-project-meme-generator');
  });
});