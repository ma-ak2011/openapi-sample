package com.example.backend.generated.model

import java.util.Objects
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
 * 
 * @param firstName 名
 * @param lastName 性
 * @param birthDate 生年月日
 * @param email メールアドレス
 */
data class NewStaff(

    @get:Size(min=0,max=200)
    @get:JsonProperty("firstName", required = true) val firstName: kotlin.String,

    @get:Size(min=0,max=200)
    @get:JsonProperty("lastName", required = true) val lastName: kotlin.String,

    @get:JsonProperty("birthDate", required = true) val birthDate: java.time.OffsetDateTime,

    @get:JsonProperty("email", required = true) val email: kotlin.String
) {

}

