FROM gradle:7.6.1-jdk17 AS build
COPY src /usr/src/app/src
COPY build.gradle /usr/src/app
WORKDIR /usr/src/app
RUN gradle clean build

FROM openjdk:18-alpine
COPY --from=build /usr/src/app/build/libs/*.jar /usr/app/allergen-web-app-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/app/allergen-web-app-0.0.1-SNAPSHOT.jar"]