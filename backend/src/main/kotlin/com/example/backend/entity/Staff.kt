package com.example.backend.entity

import jakarta.persistence.*
import java.time.OffsetDateTime

@Entity
@Table(name = "staff")
class Staff(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long,
    @Column(name = "first_name") var firstName: String, @Column(name = "last_name") var lastName: String,
    @Column(name = "birth_date") var birthDate: OffsetDateTime,
    @Column(name = "email") var email: String
)
