FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the static website
COPY site /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Debug: List contents of html directory
RUN ls -la /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
