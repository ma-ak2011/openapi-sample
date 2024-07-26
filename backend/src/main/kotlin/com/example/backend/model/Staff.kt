package com.example.backend.model

import jakarta.persistence.*
import java.time.OffsetDateTime

@Entity
@Table(name = "staff")
class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0

    @Column(name = "first_name")
    var firstName: String = ""

    @Column(name = "last_name")
    var lastName: String = ""

    @Column(name = "birth_date")
    var birthDate: OffsetDateTime? = null
}
