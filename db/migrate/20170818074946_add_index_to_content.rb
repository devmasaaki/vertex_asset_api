class AddIndexToContent < ActiveRecord::Migration[5.1]
  def change
    execute "-- DROP INDEX public.vertex_items_content_idx;
    
    CREATE INDEX vertex_items_content_idx
        ON public.vertex_items USING gin
        (to_tsvector('english'::regconfig, content))
        TABLESPACE pg_default;"
  end
end
