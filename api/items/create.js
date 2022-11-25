const handler = async (event, context) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Hello from post.js!',
      input: event.body
    })
  }
}

module.exports = { handler }