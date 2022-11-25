const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from list.js!'
    })
  }
}

module.exports = { handler }