# Use a small Node image
FROM node:20-alpine

# Create app directory inside the container
WORKDIR /app

# Copy package files and install deps first (better caching)
COPY package*.json ./
RUN npm install --production

# Copy the rest of your app
COPY . .

# Set environment vars
ENV NODE_ENV=production
ENV PORT=3000

# The port your Express app listens on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
