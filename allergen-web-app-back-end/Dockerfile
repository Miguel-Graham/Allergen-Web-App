FROM gradle:7.6.1-jdk17 AS build
COPY src /usr/src/app/src
COPY build.gradle /usr/src/app
ADD . .
RUN ./gradlew  clean build

FROM openjdk:18-alpine
COPY /build/libs/allergen-web-app-0.0.1-SNAPSHOT.jar /usr/app/allergen-web-app-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/app/allergen-web-app-0.0.1-SNAPSHOT.jar"]