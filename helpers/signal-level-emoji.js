module.exports = level => {
  switch (true) {
    case level > -30:
      return '👍🏻'
    case level <= -30 && level > -50:
      return '😃'
    case level <= -50 && level > -70:
      return '🙂'
    case level <= -70 && level > -95:
      return '😡'
    case level <= -95 && level > -120:
      return '🤯'
    case level <= -120 && level > -160:
      return '😱'
    default:
      return '🤔'
  }
}