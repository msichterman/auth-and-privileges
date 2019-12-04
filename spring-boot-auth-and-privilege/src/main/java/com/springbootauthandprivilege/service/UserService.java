package com.springbootauthandprivilege.service;

import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<Object> test(String hello);
}
