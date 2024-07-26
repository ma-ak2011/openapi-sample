package com.example.backend.controller

import io.swagger.v3.oas.annotations.Parameter
import jakarta.validation.Valid
import org.gciatto.kt.math.BigInteger
import org.springframework.http.MediaType
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*

@RestController
@Validated
class StaffController {

    @GetMapping("/api/staffs/{id}", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun get(
        @Parameter(description = "StaffのId", required = true)
        @Valid
        @PathVariable("id")
        id: BigInteger,
    ): String {
        return "Hello World!"
    }

    @PostMapping("/api/staffs", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun create(
        @Parameter(description = "StaffのId", required = true)
        @Valid
        @RequestBody
        createStaffRequest: String,
    ): String {
        return "Hello World!"
    }
}
