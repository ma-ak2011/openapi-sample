/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.7.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
*/
package com.example.backend.generated.controller

import com.example.backend.generated.model.NewStaffRequest
import com.example.backend.generated.model.NullableStaff
import com.example.backend.generated.model.StaffForClient
import com.example.backend.generated.model.UpdateStaffRequest
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity

import org.springframework.web.bind.annotation.*
import org.springframework.validation.annotation.Validated
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.beans.factory.annotation.Autowired

import jakarta.validation.constraints.DecimalMax
import jakarta.validation.constraints.DecimalMin
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.Max
import jakarta.validation.constraints.Min
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Pattern
import jakarta.validation.constraints.Size
import jakarta.validation.Valid

import kotlin.collections.List
import kotlin.collections.Map

@Validated
interface StaffControllerApi {


    @RequestMapping(
            method = [RequestMethod.POST],
            value = ["/api/staffs/"],
            produces = ["application/json"],
            consumes = ["application/json"]
    )
    fun create( @Valid @RequestBody newStaffRequest: NewStaffRequest): ResponseEntity<StaffForClient> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }


    @RequestMapping(
            method = [RequestMethod.DELETE],
            value = ["/api/staffs/{id}/"],
            produces = ["application/json"]
    )
    fun delete( @PathVariable("id") id: kotlin.String): ResponseEntity<kotlin.Any> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }


    @RequestMapping(
            method = [RequestMethod.GET],
            value = ["/api/staffs/"],
            produces = ["application/json"]
    )
    fun index(): ResponseEntity<List<StaffForClient>> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }


    @RequestMapping(
            method = [RequestMethod.GET],
            value = ["/api/staffs/{id}/"],
            produces = ["application/json"]
    )
    fun show( @PathVariable("id") id: kotlin.String): ResponseEntity<NullableStaff> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }


    @RequestMapping(
            method = [RequestMethod.PUT],
            value = ["/api/staffs/{id}/"],
            produces = ["application/json"]
    )
    fun update( @PathVariable("id") id: UpdateStaffRequest): ResponseEntity<StaffForClient> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }
}
