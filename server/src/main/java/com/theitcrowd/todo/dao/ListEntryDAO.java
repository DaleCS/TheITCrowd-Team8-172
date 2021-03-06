package com.theitcrowd.todo.dao;
import java.util.List;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.theitcrowd.todo.model.*;

public interface ListEntryDAO extends CrudRepository<TodoListEntry, Long>{

	 @Query(value = "SELECT * FROM todolistentries WHERE todo_list_id = ?1", nativeQuery = true)
	 List<TodoListEntry> findAllEntries(long id); 
	
	 @Modifying
	 @Query(value = "DELETE FROM todolistentries WHERE todo_list_id = ?1", nativeQuery = true)
	 void deleteList(long todo_list_id);
	 
	 @Modifying
	 @Query(value = "INSERT INTO todolistentries(title, todo_list_id, status) VALUES (?1, ?2, ?3)", nativeQuery = true)
	 void insertEntry(String title, long todolist_id, String status);
	 
	 @Modifying
	 @Query(value = "DELETE FROM todolistentries WHERE entry_id = ?1", nativeQuery = true)
	 void deleteEntry(long entry_id);

	 @Modifying
	 @Query(value = "UPDATE todolistentries SET title = ?2 WHERE entry_id = ?1", nativeQuery = true)
  	 void updateEntryTitle(long entry_id, String title);

	 @Modifying
	 @Query(value = "UPDATE todolistentries SET status = ?2 WHERE entry_id = ?1", nativeQuery = true)
	 void updateEntryStatus(long entry_id, String status); 
}
