# Use official Node image
FROM node:22-alpine as backend

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all backend files
COPY . .

# Expose backend port
EXPOSE 8000

# Start the backend
CMD ["npm", "start"]
