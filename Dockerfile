FROM nginx:alpine

# Copy the static website
COPY site/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
