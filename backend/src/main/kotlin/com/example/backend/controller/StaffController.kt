package com.example.backend.controller

import com.example.backend.entity.Staff
import com.example.backend.service.StaffService
import io.swagger.v3.oas.annotations.Parameter
import jakarta.validation.Valid
import org.gciatto.kt.math.BigInteger
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*


@RestController
@Validated
@CrossOrigin("http://localhost:3000")
class StaffController(
    val staffService: StaffService
) {
    @GetMapping("/api/staffs/", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun index(): ResponseEntity<Array<Staff>> {
        val staffs = staffService.findAll().toTypedArray()
        return ResponseEntity(
            staffs,
            HttpStatus.OK
        )
    }

    @GetMapping("/api/staffs/{id}/", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun show(
        @Parameter(description = "StaffのId", required = true)
        @Valid
        @PathVariable("id")
        id: BigInteger,
    ): ResponseEntity<Staff?> {
        val staff = staffService.findById(id.toLong())
        return ResponseEntity(
            staff,
            HttpStatus.OK
        )
    }

    @PostMapping("/api/staffs/", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun create(
        @Parameter(description = "新規作成するスタッフ", required = true)
        @Valid
        @RequestBody
        newStaffRequest: NewStaffRequest,
    ): ResponseEntity<Staff> {
        val newStaff = Staff(
            0,
            newStaffRequest.validatedStaff.validatedFirstName,
            newStaffRequest.validatedStaff.validatedLastName,
            newStaffRequest.validatedStaff.validatedBirthDate
        )
        staffService.save(newStaff)
        return ResponseEntity(
            newStaff,
            HttpStatus.OK
        )
    }

    @PutMapping("/api/staffs/{id}/", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun update(
        @Parameter(description = "更新するスタッフ", required = true)
        @Valid
        @PathVariable("id")
        updateStaffRequest: UpdateStaffRequest,
    ): ResponseEntity<Staff> {
        val updatedStaff = Staff(
            updateStaffRequest.validatedStaff.validatedId,
            updateStaffRequest.validatedStaff.validatedFirstName,
            updateStaffRequest.validatedStaff.validatedLastName,
            updateStaffRequest.validatedStaff.validatedBirthDate
        )
        staffService.save(updatedStaff)
        return ResponseEntity(
            updatedStaff,
            HttpStatus.OK
        )
    }

    @DeleteMapping("/api/staffs/{id}/", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun delete(
        @Parameter(description = "StaffのId", required = true)
        @Valid
        @PathVariable("id")
        id: BigInteger,
    ): ResponseEntity<Unit> {
        staffService.deleteById(id.toLong())
        return ResponseEntity(Unit, HttpStatus.OK)
    }
}
