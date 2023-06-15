# Dockerfile
# Sonarscanner stage
FROM sonarsource/sonar-scanner-cli:latest as sonarscanner-stage
ENV SONAR_USER_HOME=".sonar"
ENV GIT_DEPTH="0"
ENV SONAR_TOKEN="sqp_d9dea3ca75e6ae387aedf3d869497a3956955c2b"
COPY . .
RUN sonar-scanner -Dsonar.projectKey=nsmall-ui-mo-fo-debug -Dsonar.sources=src -Dsonar.host.url=https://nsm-cloud-sonar.nsmall.com; exit 0
#CMD ["sonar-scanner","-Dsonar.projectKey=nsmall-ui-mo-fo","-Dsonar.sources=src","-Dsonar.host.url=https://nsm-cloud-sonar.nsmall.com"]

# build stage
#FROM node:16.16 as build
#FROM v2-zcr.cloudzcp.io/cloudzcp-public/node:18 as build
FROM node:20 as build
RUN npm install -g npm@9.6.6
RUN npm install -g pnpm
RUN node -v
RUN npm -v
RUN pnpm --version
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
RUN ls -al

# production stage
#FROM nginx:stable-alpine as production-stage
#FROM v2-zcr.cloudzcp.io/cloudzcp-public/nginx:latest as production-stage
FROM nginx:latest as production-stage
RUN mkdir -p /app
COPY --from=build /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]
