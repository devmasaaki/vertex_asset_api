class AddTriggerToCategory < ActiveRecord::Migration[5.1]
  def change
    # 4. create trigger to set new sort value when parent of sub category changing
    execute "
            -- DROP FUNCTION public.func1();

        CREATE OR REPLACE FUNCTION public.func2()
            RETURNS trigger
            LANGUAGE 'plpgsql'
            COST 100.0
            VOLATILE NOT LEAKPROOF 
        AS $BODY$

        begin
        if NEW.parent_id<>OLD.parent_id then
          -- update sort valude
            NEW.sort := nextval('vertex_sort_seq');
        end if;
        return new;
        end;

        $BODY$;

        DROP TRIGGER IF EXISTS category_parent_changed ON public.vertex_categories;
        CREATE TRIGGER category_parent_changed
            BEFORE UPDATE 
            ON public.vertex_categories
            FOR EACH ROW
            EXECUTE PROCEDURE public.func2();
    "

    #5. create trigger to set new sort value when category of item changing
    execute "
-- FUNCTION: public.func2()

-- DROP FUNCTION public.func2();

CREATE OR REPLACE  FUNCTION public.func3()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100.0
    VOLATILE NOT LEAKPROOF 
AS $BODY$

begin
if NEW.category_id<>OLD.category_id then
	-- update sort valude
    NEW.sort := nextval('vertex_sort_seq');
end if;
return new;
end;

$BODY$;

DROP TRIGGER IF EXISTS item_category_changed ON public.vertex_items;
CREATE TRIGGER item_category_changed
    BEFORE UPDATE 
    ON public.vertex_items
    FOR EACH ROW
    EXECUTE PROCEDURE public.func3();

  "
    # 6. -- udpated category delete function func1()
    execute "
    
-- FUNCTION: public.func1()

-- DROP FUNCTION public.func1();

CREATE OR REPLACE FUNCTION public.func1()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100.0
    VOLATILE NOT LEAKPROOF 
AS $BODY$

declare 
cat_id vertex_categories.id%TYPE;
i RECORD;
begin
if NEW.deleted<>OLD.deleted and new.deleted = true then

	/* Delete category */
    if(new.categorytype = 0) then
        update vertex_categories set assigned = false where parent_id = new.id;   
        
        /* update included item's assign flags to false */
        update vertex_items set assigned = false where category_id = new.id;   
    end if;
              
    /* Delete sub category which has items */
    if(new.categorytype = 1 and new.assigned = true) then
    	if( new.parent_id is not null) then
            cat_id := new.parent_id;
            /* update items' category_id to the parent_id of deleted sub category */
            for i in (select id from vertex_items where deleted = false and category_id = new.id order by sort) loop
            	update vertex_items set category_id = cat_id where id = i.id;
            end loop;
        end if;
    end if;
    
    /* Delete sub category in the anssigned */
    if(new.categorytype = 1 and new.assigned = false) then
    	/* update included item's assign flags to false */
        update vertex_items set assigned = false where category_id = new.id;   
    end if;    

 end if;
 
return new;
end;

$BODY$;
    "
  end
end
