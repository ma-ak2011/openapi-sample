plugins {
    id("org.springframework.boot") version "3.3.2"
    id("io.spring.dependency-management") version "1.1.6"
    kotlin("jvm") version "1.9.24"
    kotlin("plugin.spring") version "1.9.24"
    kotlin("plugin.jpa") version "1.9.24"
    id("org.springdoc.openapi-gradle-plugin") version "1.9.0"
    id("io.gitlab.arturbosch.detekt").version("1.23.6")
}

configurations.matching { it.name == "detekt" }.all {
    resolutionStrategy.eachDependency {
        if (requested.group == "org.jetbrains.kotlin") {
            useVersion("1.9.23")
        }
    }
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}

repositories {
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven")
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    runtimeOnly("com.mysql:mysql-connector-j")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.6.0")
    implementation("io.arrow-kt:arrow-core:1.2.4")
    implementation("io.arrow-kt:arrow-fx-coroutines:1.2.4")
    detektPlugins("io.gitlab.arturbosch.detekt:detekt-formatting:1.23.6")
    testImplementation("org.assertj:assertj-core:3.26.3")
    testImplementation("net.jqwik:jqwik:1.9.0")
    testImplementation("net.jqwik:jqwik-kotlin:1.9.0")
    implementation("com.github.database-rider:rider-core:1.44.0")
    implementation("com.github.database-rider:rider-spring:1.44.0")
    testImplementation("com.github.database-rider:rider-junit5:1.44.0")
}

kotlin {
    compilerOptions {
        freeCompilerArgs.addAll("-Xjsr305=strict")
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

openApi {
    apiDocsUrl.set("http://localhost:8080/v3/api-docs.yaml")
    outputDir.set(project.rootDir.parentFile.resolve("openapi"))
    outputFileName.set("openapi.yaml")
}

detekt {
    config.setFrom(
        "$projectDir/config/detekt/detekt.yml",
        "$projectDir/config/detekt/detekt-override.yml",
    )
}
