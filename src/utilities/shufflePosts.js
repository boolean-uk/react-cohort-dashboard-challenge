// Shuffle function to randomize the order of an array
function shufflePosts(array) {
  const shuffledPosts = [...array];
  for (let i = shuffledPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPosts[i], shuffledPosts[j]] = [shuffledPosts[j], shuffledPosts[i]];
  }
  return shuffledPosts;
}

export default shufflePosts;