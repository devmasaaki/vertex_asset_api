-- func1 test

-- category

	-- check data

	select * from vertex_categories where categorytype = 0 order by 1
	
	select id, name, assigned, sort from vertex_categories where parent_id = 2 order by 1
	
	select id, title, assigned, sort from vertex_items where category_id = 2 order by 1

	-- test
	update vertex_categories set deleted = true where id = 2

  -- recover
	update vertex_categories set assigned = true where parent_id = 2
	update vertex_items set assigned = true where category_id = 2


-- sub category
	-- check data
	select id, name, assigned, deleted, sort from vertex_categories where parent_id = 2 order by 1
	
	select id, title, assigned, sort from vertex_items where category_id = 16 order by 1
	
	select id, title, assigned, sort from vertex_items where category_id = 2 order by 1

	-- test
	update vertex_categories set deleted = true where id = 16


-- unassigned 
	-- check data
	select id, name, assigned, deleted, sort from vertex_categories where parent_id = 2 order by 1
	
	select id, title, assigned, sort from vertex_items where category_id = 16 order by 1
	
	select id, title, assigned, sort from vertex_items where category_id = 2 order by 1

	-- test
		-- del category
		update vertex_categories set deleted = true where id = 2
			-- check changed
			select id, name, assigned, deleted from vertex_categories where id = 2
			select id, name, assigned, deleted, sort from vertex_categories where parent_id = 2 order by 1
			select id, title, assigned, sort from vertex_items where category_id = 2 order by 1
			
			-- choose unassigned category
			select id, name, assigned, deleted, sort from vertex_categories where parent_id = 2 order by 1
			select id, title, assigned, sort from vertex_items where category_id = 17 order by 1			
			
		
		-- del unassigned subcategory
		update vertex_categories set deleted = true where id = 17
			-- check changed
			select id, name, assigned, deleted from vertex_categories where id = 17
			select id, title, assigned, sort from vertex_items where category_id = 17 order by 1
			