package com.example.backend.service

import com.example.backend.entity.Staff
import com.example.backend.repository.StaffRepository
import org.springframework.stereotype.Service

@Service
class StaffService(
    val staffRepository: StaffRepository
) {

    fun findAll(): List<Staff> {
        return staffRepository.findAll()
    }

    fun findById(id: Long): Staff {
        return staffRepository.findById(id).get()
    }

    fun save(staff: Staff): Staff {
        return staffRepository.save(staff)
    }

    fun deleteById(id: Long) {
        staffRepository.deleteById(id)
    }

}