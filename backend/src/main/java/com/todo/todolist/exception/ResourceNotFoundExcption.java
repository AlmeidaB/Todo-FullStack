package com.todo.todolist.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundExcption extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundExcption(String message) {
		super(message);
	}

}
