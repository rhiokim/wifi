module.exports = level => {
  switch (true) {
    case level > -30:
      return '👍🏻'
    case level <= -30 && level > -50:
      return '🙂'
    case level <= -50 && level > -70:
      return '😡'
    case level <= -70 && level > -90:
      return '🤯'
    case level <= -90 && level > -100:
      return '😱'
    default:
      return '🤔'
  }
}