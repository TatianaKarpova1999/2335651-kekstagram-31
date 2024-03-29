
const buttonLoaderComments = document.querySelector('.social__comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentPicture = commentTemplate.querySelector('.social__picture');
const commentText = commentTemplate.querySelector('.social__text');
const commentShownCount = document.querySelector('.social__comment-shown-count');

const addСommentsList = (arr, id) => {
  const commentDescription = arr.find((element) => element.id === parseInt(id, 10));
  commentsList.innerHTML = '';

  commentDescription.comments.forEach((comment) => {
    commentPicture.src = comment.avatar;
    commentPicture.alt = comment.name;
    commentText.textContent = comment.message;

    const commentData = commentTemplate.cloneNode(true);

    commentsList.appendChild(commentData);
  });
};

const loadCommentsPartly = () => {
  const hiddenCommentsList = commentsList.getElementsByClassName('hidden');

  let commentsCount = 5;

  if (hiddenCommentsList.length <= 5) {
    commentsCount = hiddenCommentsList.length;
    buttonLoaderComments.classList.add('hidden');
  }

  for (let i = 0; i < commentsCount; i++) {
    hiddenCommentsList[0].classList.remove('hidden');
  }
  commentShownCount.textContent = commentsList.children.length - commentsList.getElementsByClassName('hidden').length;
};

const onCommentsLoad = () => {
  loadCommentsPartly();
  buttonLoaderComments.addEventListener ('click', loadCommentsPartly);
};

export{onCommentsLoad, addСommentsList, loadCommentsPartly};
