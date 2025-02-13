FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the static website
COPY ./site/* /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
