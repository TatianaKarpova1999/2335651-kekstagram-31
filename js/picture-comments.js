const COMMENTS_COUNT = 5;

const buttonLoaderCommentsNode = document.querySelector('.social__comments-loader');
const commentsListNode = document.querySelector('.social__comments');
const commentTemplateNode = document.querySelector('.social__comment');
const commentAvatarNode = commentTemplateNode.querySelector('.social__picture');
const commentTextNode = commentTemplateNode.querySelector('.social__text');
const shownCommentsCountNode = document.querySelector('.social__comment-shown-count');

const addCommentsList = (arr, id) => {
  const commentDescription = arr.find((element) => element.id === parseInt(id, 10));
  commentsListNode.innerHTML = '';

  commentDescription.comments.forEach((comment) => {
    commentAvatarNode.src = comment.avatar;
    commentAvatarNode.alt = comment.name;
    commentTextNode.textContent = comment.message;

    const commentData = commentTemplateNode.cloneNode(true);

    commentsListNode.appendChild(commentData);
  });
};

const onCommentsPartlyLoad = () => {
  const hiddenCommentsList = commentsListNode.getElementsByClassName('hidden');

  let numberLoadedComments = COMMENTS_COUNT;

  if (hiddenCommentsList.length <= COMMENTS_COUNT) {
    numberLoadedComments = hiddenCommentsList.length;
    buttonLoaderCommentsNode.classList.add('hidden');
  }

  for (let i = 0; i < numberLoadedComments; i++) {
    hiddenCommentsList[0].classList.remove('hidden');
  }
  shownCommentsCountNode.textContent = commentsListNode.children.length - commentsListNode.getElementsByClassName('hidden').length;
};

const commentsLoad = () => {
  onCommentsPartlyLoad();
  buttonLoaderCommentsNode.addEventListener ('click', onCommentsPartlyLoad);
};

export{commentsLoad, addCommentsList, onCommentsPartlyLoad};
