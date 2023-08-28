export function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}
export function getRandomUserId() {
    return Math.floor(Math.random() * 10) + 1;
}

export function findById(array, id) {
    return array.find((user) => user.id ===  Number(id));
}



export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }


export function getInitials(fullName) {
  const names = fullName.split(' ');
  const initials = names.map(name => name.charAt(0).toUpperCase()).join('');
  return initials;
}

// TODO: Delete these two functions
let postIdCounter = 100;
export const generatePostId = () => {
  postIdCounter++;
  return postIdCounter;
};

let commentIdCounter = 500; 
export const generateCommentId = () => {
  commentIdCounter++;
  return commentIdCounter;
};