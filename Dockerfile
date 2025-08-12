# Use official Node.js image
FROM node:21-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --force

# Install webpack globally (optional, but ensures webpack is available)
RUN npm install -g webpack webpack-cli webpack-dev-server

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Start the development server
CMD ["npm", "run", "dev"]
