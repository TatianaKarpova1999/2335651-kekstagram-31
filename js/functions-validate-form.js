
const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS_COUNT = 5;
const MAX_LENGTH_COMMENT = 140;

const checkHashtags = (value) => {
  const arrHashtags = value.split(' ');

  if (value === '') {
    return true;
  }

  for (let i = 0; i < arrHashtags.length; i++) {
    const validateHashtags = HASHTAG_PATTERN.test(arrHashtags[i]);
    if (!validateHashtags) {
      return false;
    }
  }

  return true;
};

const checkLengthHashtags = (value) => value.split(' ').filter((x) => x).length <= MAX_HASHTAGS_COUNT;

const checkRepeatHashtags = (value) => new Set(value.toLowerCase().split(' ').filter((x) => x)).size === value.split(' ').filter((x) => x).length;

const checkLengthComment = (value) => value.length <= MAX_LENGTH_COMMENT;

export{checkLengthComment, checkHashtags, checkLengthHashtags, checkRepeatHashtags};
