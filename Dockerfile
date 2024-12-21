# Use an official Node.js image
FROM node:20 AS base

# Set working directory in the container
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

ENV HUSKY=0

# Install dependencies
RUN npm install


# Copy the rest of the application code
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Specify the default command for the container
CMD ["npm", "run", "dev"]
