// op-middleware server port
export const port = process.env.PORT || 3000

export const powergateServerUri =
  process.env.POWERGATE_SERVER_URI || 'http://0.0.0.0:6002'

export const dbUri =
  process.env.DB_URI || 'mongodb://localhost:27017/op_middleware'

// Default upload path is relative to the app path
export const uploadPath = process.env.UPLOADS_PATH || 'uploads'
// Default max file size is 10MB. Note that the size is expressed in bytes
export const uploadMaxSize =
  process.env.MAX_FILE_SIZE !== undefined
    ? Number.parseInt(process.env.MAX_FILE_SIZE, 10)
    : 1024 * 1024 * 10