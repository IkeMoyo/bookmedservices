# Use an official Node.js runtime as a parent image
FROM node:19-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port your app runs on (assuming your app uses port 3000)
EXPOSE 5173

# Set the startup command for the container
CMD ["npm", "run", "dev", "--host", "0.0.0.0"]
