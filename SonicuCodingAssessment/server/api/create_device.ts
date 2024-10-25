// Import MySQL wrapper
// Use MySQL.createDevice() and passes data along to wrapper
// Returns success or failure to frontend


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    return {
      body
    }
  })