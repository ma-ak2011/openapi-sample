package com.example.backend.controller

import com.example.backend.entity.Staff
import com.example.backend.generated.controller.StaffControllerApi
import com.example.backend.generated.model.NewStaffRequest
import com.example.backend.generated.model.NullableStaff
import com.example.backend.generated.model.StaffForClient
import com.example.backend.generated.model.UpdateStaffRequest
import com.example.backend.service.StaffService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RestController


@RestController
@Validated
@CrossOrigin("http://localhost:3000")
class StaffController(
    val staffService: StaffService
) : StaffControllerApi {

    override fun index(): ResponseEntity<List<StaffForClient>> {
        val staffs = staffService.findAll().toTypedArray()
        val staffsForClient = staffs.map {
            StaffForClient(
                it.id.toString(),
                it.firstName,
                it.lastName,
                it.birthDate,
                it.email,
                it.contractStartDate,
                it.contractEndDate
            )
        }.toList()
        return ResponseEntity(
            staffsForClient,
            HttpStatus.OK
        )
    }

    override fun show(
        id: String,
    ): ResponseEntity<NullableStaff> {
        val staff = staffService.findById(id.toLong())
        val staffForClient = staff?.let {
            StaffForClient(
                it.id.toString(),
                it.firstName,
                it.lastName,
                it.birthDate,
                it.email,
                it.contractStartDate,
                it.contractEndDate
            )
        }
        return ResponseEntity(
            NullableStaff(staffForClient),
            HttpStatus.OK
        )
    }

    override fun create(
        newStaffRequest: NewStaffRequest,
    ): ResponseEntity<StaffForClient> {
        val newStaff = Staff(
            0,
            newStaffRequest.staff.firstName,
            newStaffRequest.staff.lastName,
            newStaffRequest.staff.birthDate,
            newStaffRequest.staff.email,
        )
        staffService.save(newStaff)
        val staffForClient = StaffForClient(
            newStaff.id.toString(),
            newStaff.firstName,
            newStaff.lastName,
            newStaff.birthDate,
            newStaff.email,
            newStaff.contractStartDate,
            newStaff.contractEndDate
        )
        return ResponseEntity(
            staffForClient,
            HttpStatus.OK
        )
    }

    override fun update(
        updateStaffRequest: UpdateStaffRequest,
    ): ResponseEntity<StaffForClient> {
        val updatedStaff = Staff(
            updateStaffRequest.staff.id.toLong(),
            updateStaffRequest.staff.firstName,
            updateStaffRequest.staff.lastName,
            updateStaffRequest.staff.birthDate,
            updateStaffRequest.staff.email,
        )
        updatedStaff.contractStartDate = updateStaffRequest.staff.contractStartDate
        updatedStaff.contractEndDate = updateStaffRequest.staff.contractEndDate
        staffService.save(updatedStaff)
        val staffForClient = StaffForClient(
            updatedStaff.id.toString(),
            updatedStaff.firstName,
            updatedStaff.lastName,
            updatedStaff.birthDate,
            updatedStaff.email,
            updatedStaff.contractStartDate!!,
            updatedStaff.contractEndDate!!
        )
        return ResponseEntity(
            staffForClient,
            HttpStatus.OK
        )
    }

    override fun delete(
        id: String,
    ): ResponseEntity<Any> {
        staffService.deleteById(id.toLong())
        return ResponseEntity(HttpStatus.OK)
    }
}
