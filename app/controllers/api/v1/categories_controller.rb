module Api
  module V1
    class CategoriesController < JSONAPI::ResourceController
      def dragdrop_category
        asset_id = params[:asset_id].to_i
        dragged_id = params[:dragged_id].to_i
        dropped_id = params[:dropped_id].to_i

        puts "++++++++++++++++drag and drop requests received from client+++++++++++++++++++++++++++"
        dragged = Category.find(dragged_id) 
        dropped = Category.find(dropped_id)        
        puts dropped.sort
        puts dragged.sort
        # drag up
        if(dragged_id == dropped_id || dragged.sort == dropped.sort)
          render_error("not allowed drag and drop for same categories", :unprocessable_entity)
        elsif(dragged.sort < dropped.sort)
          Category.where("sort > :dragged_sort and sort <= :dropped_sort and asset_id = :asset_id and categorytype = 0 and deleted = false", {dropped_sort: dropped.sort, dragged_sort: dragged.sort, asset_id: asset_id }).order(:sort).each do |cat|
            puts "drag down"
            temp = cat.sort
            cat.sort = dragged.sort
            if cat.save
              puts "category id: " + cat.id.to_s + "sort: " + cat.sort.to_s + " succesfully updated."
            else
              puts "category save update failed"
              puts cat.errors.full_messages[0]
              render_error(cat.errors.full_messages[0], :unprocessable_entity)
            end
            dragged.sort = temp
          end
          if dragged.save
            render json: dragged, status: :ok
          else
            render_error(dragged.errors.full_messages[0], :unprocessable_entity)
          end
        else # dragged.sort > dropped.sort
          # drag up
          Category.where("sort >= :dropped_sort and sort < :dragged_sort and asset_id = :asset_id and categorytype = 0 and deleted = false", {dropped_sort: dropped.sort, dragged_sort: dragged.sort, asset_id: asset_id }).order(sort: :desc).each do |cat|
            puts "hahah"
            temp = cat.sort
            cat.sort = dragged.sort
            if cat.save
              puts "category id: " + cat.id.to_s + "sort: " + cat.sort.to_s + " succesfully updated."
            else
              puts "category save update failed"
              puts cat.errors.full_messages[0]
              render_error(cat.errors.full_messages[0], :unprocessable_entity)
            end
            dragged.sort = temp
          end

          if dragged.save
            render json: dragged, status: :created
          else
            render_error(dragged.errors.full_messages[0], :unprocessable_entity)
          end
        end
      end

      def dragdrop_subcategory
        parent_id = params[:parent_id].to_i
        dragged_id = params[:dragged_id].to_i
        dropped_id = params[:dropped_id].to_i

        puts "++++++++++++++++drag and drop requests received from client+++++++++++++++++++++++++++"
        dragged = Category.find(dragged_id) 
        dropped = Category.find(dropped_id)        
        puts dropped.sort
        puts dragged.sort
        # drag up
        if(dragged_id == dropped_id || dragged.sort == dropped.sort)
          render_error("not allowed drag and drop for same categories", :unprocessable_entity)
        elsif(dragged.sort < dropped.sort)
          Category.where("sort > :dragged_sort and sort <= :dropped_sort and parent_id = :parent_id and categorytype = 1 and deleted = false and assigned=true", {dropped_sort: dropped.sort, dragged_sort: dragged.sort, parent_id: parent_id }).order(:sort).each do |subcat|
            puts "drag down"
            temp = subcat.sort
            subcat.sort = dragged.sort
            if subcat.save
              puts "category id: " + subcat.id.to_s + "sort: " + subcat.sort.to_s + " succesfully updated."
            else
              puts "category save update failed"
              puts subcat.errors.full_messages[0]
              render_error(subcat.errors.full_messages[0], :unprocessable_entity)
            end
            dragged.sort = temp
          end
          if dragged.save
            render json: dragged, status: :ok
          else
            render_error(dragged.errors.full_messages[0], :unprocessable_entity)
          end
        else # dragged.sort > dropped.sort
          # drag up
          Category.where("sort < :dragged_sort and sort >= :dropped_sort and parent_id = :parent_id and categorytype = 1 and deleted = false and assigned=true", {dropped_sort: dropped.sort, dragged_sort: dragged.sort, parent_id: parent_id }).order(sort: :desc).each do |subcat|
            puts "drag up"
            temp = subcat.sort
            subcat.sort = dragged.sort
            if subcat.save
              puts "category id: " + subcat.id.to_s + "sort: " + subcat.sort.to_s + " succesfully updated."
            else
              puts "category save update failed"
              puts subcat.errors.full_messages[0]
              render_error(subcat.errors.full_messages[0], :unprocessable_entity)
            end
            dragged.sort = temp
          end
          if dragged.save
            render json: dragged, status: :ok
          else
            render_error(dragged.errors.full_messages[0], :unprocessable_entity)
          end
        end
      end
      # def category_dragdrop_params
      #   params.require(:user).permit(:email, :password, :password_confirmation,
      #                                :new_password, :new_password_confirmation)
      # end
    end

    class CategoriesProcessor < JSONAPI::Processor
      after_find do
        unless @result.is_a?(JSONAPI::ErrorsOperationResult)
          @result.meta[:total_records_found] = @result.record_count
        end
      end
    end
  end
end