const stories = require('../models/stories')

module.exports.getStories = () => {
  return stories
}

module.exports.getStory = (id) => {
  for(let i = 0; i < stories.length; i++) {
    if (stories[i].id === id) {
      return stories[i]
    }
  }
}