package com.todo.todolist.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todolist.exception.ResourceNotFoundExcption;
import com.todo.todolist.model.Todo;
import com.todo.todolist.repository.TodoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TodoController {

	@Autowired
	private TodoRepository repository;

	@GetMapping("/todos")
	public List<Todo> getAllTodos() {

		return repository.findAll();
	}

	@PostMapping("/todos")
	public Todo createTodo(@RequestBody Todo todo) {
		return repository.save(todo);
	}

	@GetMapping("/todos/{id}")
	public ResponseEntity<Todo> getTodoById(@PathVariable long id) {

		Todo todo = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcption("Todo not exist with id: " + id));

		return ResponseEntity.ok(todo);
	}

	@PutMapping("/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo todoDetails) {

		Todo todo = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcption("Todo not exist with id :" + id));
		todo.setTodo(todoDetails.getTodo());
		todo.setDescription(todoDetails.getDescription());

		Todo updatedTodo = repository.save(todo);
		return ResponseEntity.ok(updatedTodo);

	}

	
	@DeleteMapping("/todos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTodo(@PathVariable Long id) {
		Todo todo = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcption("Todo not exist with id :" + id));

		repository.delete(todo);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
