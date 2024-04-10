const COMMENTS_COUNT = 5;

const buttonLoaderComments = document.querySelector('.social__comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentAvatar = commentTemplate.querySelector('.social__picture');
const commentText = commentTemplate.querySelector('.social__text');
const commentShownCount = document.querySelector('.social__comment-shown-count');

const addCommentsList = (arr, id) => {
  const commentDescription = arr.find((element) => element.id === parseInt(id, 10));
  commentsList.innerHTML = '';

  commentDescription.comments.forEach((comment) => {
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentText.textContent = comment.message;

    const commentData = commentTemplate.cloneNode(true);

    commentsList.appendChild(commentData);
  });
};

const onCommentsPartlyLoad = () => {
  const hiddenCommentsList = commentsList.getElementsByClassName('hidden');

  let numberLoadedComments = COMMENTS_COUNT;

  if (hiddenCommentsList.length <= COMMENTS_COUNT) {
    numberLoadedComments = hiddenCommentsList.length;
    buttonLoaderComments.classList.add('hidden');
  }

  for (let i = 0; i < numberLoadedComments; i++) {
    hiddenCommentsList[0].classList.remove('hidden');
  }
  commentShownCount.textContent = commentsList.children.length - commentsList.getElementsByClassName('hidden').length;
};

const commentsLoad = () => {
  onCommentsPartlyLoad();
  buttonLoaderComments.addEventListener ('click', onCommentsPartlyLoad);
};

export{commentsLoad, addCommentsList, onCommentsPartlyLoad};
