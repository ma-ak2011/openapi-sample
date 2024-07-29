package com.example.backend.controller

import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.Valid
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import org.hibernate.validator.constraints.Length
import java.time.OffsetDateTime


data class NewStaff(
    @Schema(example = "new-staff-first-name", required = true, description = "名")
    @field:Valid
    @field:NotBlank
    @field:Length(min = 0, max = 200)
    @field:JsonProperty("firstName", required = true)
    private val firstName: String? = null,

    @Schema(example = "new-staff-last-name", required = true, description = "性")
    @field:Valid
    @field:NotBlank
    @field:Length(min = 0, max = 200)
    @field:JsonProperty("lastName", required = true)
    private val lastName: String? = null,

    @Schema(example = "new-staff-birth-date", required = true, description = "生年月日")
    @field:Valid
    @field:NotNull
    @field:JsonProperty("birthDate", required = true)
    private val birthDate: OffsetDateTime? = null,
) {
    @get:Schema(hidden = true)
    val validatedFirstName: String
        get() = firstName!!

    @get:Schema(hidden = true)
    val validatedLastName: String
        get() = lastName!!

    @get:Schema(hidden = true)
    val validatedBirthDate: OffsetDateTime
        get() = birthDate!!
}

data class NewStaffRequest(
    @field:Valid
    @Schema(required = true, description = "")
    @field:NotNull
    @field:JsonProperty("staff", required = true)
    private val staff: NewStaff? = null,
) {
    @get:Schema(hidden = true)
    val validatedStaff: NewStaff
        get() = staff!!
}

data class UpdateStaff(
    @Schema(example = "update-staff-id", required = true, description = "ID")
    @field:Valid
    @field:NotBlank
    @field:JsonProperty("id", required = true)
    private val id: Long? = null,

    @Schema(example = "update-staff-first-name", required = true, description = "名")
    @field:Valid
    @field:NotBlank
    @field:Length(min = 0, max = 200)
    @field:JsonProperty("firstName", required = true)
    private val firstName: String? = null,

    @Schema(example = "update-staff-last-name", required = true, description = "性")
    @field:Valid
    @field:NotBlank
    @field:Length(min = 0, max = 200)
    @field:JsonProperty("lastName", required = true)
    private val lastName: String? = null,

    @Schema(example = "update-staff-birth-date", required = true, description = "生年月日")
    @field:Valid
    @field:NotNull
    @field:JsonProperty("birthDate", required = true)
    private val birthDate: OffsetDateTime? = null,
) {
    @get:Schema(hidden = true)
    val validatedId: Long
        get() = id!!

    @get:Schema(hidden = true)
    val validatedFirstName: String
        get() = firstName!!

    @get:Schema(hidden = true)
    val validatedLastName: String
        get() = lastName!!

    @get:Schema(hidden = true)
    val validatedBirthDate: OffsetDateTime
        get() = birthDate!!
}

data class UpdateStaffRequest(
    @field:Valid
    @Schema(example = "null", required = true, description = "")
    @field:NotNull
    @field:JsonProperty("staff", required = true)
    private val staff: UpdateStaff? = null
) {
    @get:Schema(hidden = true)
    val validatedStaff: UpdateStaff
        get() = staff!!
}
