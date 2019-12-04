package com.springbootauthandprivilege.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class UserServiceImpl implements UserService {
    public ResponseEntity<Object> test(String hello) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
