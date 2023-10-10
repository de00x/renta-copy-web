FROM node:18.17.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force
#RUN npm audit fix --force
#RUN npm start
COPY . .
#COPY api.tsx ./src/shared/api/
#COPY MessagePage.tsx ./src/pages/Message/ui/
CMD ["pnpm", "run dev"]
