package com.example.backend.service

import com.example.backend.entity.Staff
import com.example.backend.repository.StaffRepository
import org.springframework.stereotype.Service
import kotlin.jvm.optionals.getOrNull

@Service
class StaffService(
    val staffRepository: StaffRepository
) {

    fun findAll(): List<Staff> {
        return staffRepository.findAll()
    }

    fun findById(id: Long): Staff? {
        return staffRepository.findById(id).getOrNull()
    }

    fun save(staff: Staff): Staff {
        return staffRepository.save(staff)
    }

    fun deleteById(id: Long) {
        staffRepository.deleteById(id)
    }

}