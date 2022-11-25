const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from get.js',
      input: event.body
    })
  }
}

module.exports = { handler }