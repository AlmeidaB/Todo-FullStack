package com.todo.todolist.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todo")
public class Todo {
		
		@Id
		@GeneratedValue(strategy= GenerationType.IDENTITY)
		private Long id;
		@Column(name="todo")
		private String todo;
		@Column(name="description")
		private String description;
		@Column(name="status")
		private Status status;
		
		public Todo(){}	
		
		public Todo(Long id, String todo, String description, Status status) {
			super();
			this.id = id;
			this.todo = todo;
			this.description = description;
			this.status = status;
		}
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getTodo() {
			return todo;
		}
		public void setTodo(String todo) {
			this.todo = todo;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public Status getStatus() {
			return status;
		}
		public void setStatus(Status status) {
			this.status = status;
		}
		
		
}
