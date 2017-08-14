class AddSortSequence < ActiveRecord::Migration[5.1]
  def change
    # 1. create a sequence for sort
    execute "
    DROP SEQUENCE IF EXISTS public.vertex_sort_seq CASCADE;
    CREATE SEQUENCE public.vertex_sort_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;"

    # 2. update existing data
    Category.order(:id).each do |cat|
      # cat.sort = 
      # ActiveRecord::Base.connection.execute("SELECT nextval('vertex_sort_seq')")
      execute "update vertex_categories set sort = nextval('vertex_sort_seq') where id = #{cat.id}"
    end

    Item.order(:id).each do |pdf|
      # cat.sort = 
      # ActiveRecord::Base.connection.execute("SELECT nextval('vertex_sort_seq')")
      execute "update vertex_items set sort = nextval('vertex_sort_seq') where id = #{pdf.id}"
    end

    # 3. change default value of sort
    execute "
    ALTER TABLE public.vertex_categories
    ALTER COLUMN sort SET DEFAULT nextval('vertex_sort_seq'::regclass);
    
    ALTER TABLE public.vertex_items
    ALTER COLUMN sort SET DEFAULT nextval('vertex_sort_seq'::regclass);"

  end
end
