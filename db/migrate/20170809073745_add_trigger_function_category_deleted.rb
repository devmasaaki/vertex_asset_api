class AddTriggerFunctionCategoryDeleted < ActiveRecord::Migration[5.1]
  def change
    execute "-- FUNCTION: public.func1()
-- DROP FUNCTION public.func1();

CREATE FUNCTION public.func1()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100.0
    VOLATILE NOT LEAKPROOF 
AS $BODY$
begin
if NEW.deleted<>OLD.deleted then
 if(new.categorytype = 0) then
       update vertex_categories set assigned = false
       where parent_id = new.id;   
    end if;
    /* update items' assign flags to false */
 update vertex_items set assigned = false where category_id = new.id;     
end if;
return new;
end;

$BODY$;

ALTER FUNCTION public.func1()
    OWNER TO postgres;


-- Trigger: category_deleted

-- DROP TRIGGER category_deleted ON public.vertex_categories;

CREATE TRIGGER category_deleted
    BEFORE UPDATE 
    ON public.vertex_categories
    FOR EACH ROW
    EXECUTE PROCEDURE public.func1();"

  end
end
