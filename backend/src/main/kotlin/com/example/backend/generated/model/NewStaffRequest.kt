package com.example.backend.generated.model

import java.util.Objects
import com.example.backend.generated.model.NewStaff
import com.fasterxml.jackson.annotation.JsonProperty
import jakarta.validation.constraints.DecimalMax
import jakarta.validation.constraints.DecimalMin
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.Max
import jakarta.validation.constraints.Min
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Pattern
import jakarta.validation.constraints.Size
import jakarta.validation.Valid

/**
 * 新規作成するスタッフ
 * @param staff 
 */
data class NewStaffRequest(

    @field:Valid
    @get:JsonProperty("staff", required = true) val staff: NewStaff
) {

}

