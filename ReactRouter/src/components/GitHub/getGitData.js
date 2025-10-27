const getGitData = async () => {
  const response = await fetch("https://api.github.com/users/kaushik-597");
  return response.json();
};

export default getGitData;
