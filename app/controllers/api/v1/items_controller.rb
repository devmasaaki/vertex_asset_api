require 'rubygems'
require 'pdf/reader'

module Api
  module V1
    class ItemsController < JSONAPI::ResourceController
      # skip_before_action :auth_with_token!, only: [:index]
      # skip_before_action :setup_request, only: [:create]
      # skip_before_action :ensure_correct_media_type, only: [:create]

      def dragdrop_item
        category_id = JSON.parse(params[:category_id])
        dragged_id = JSON.parse(params[:dragged_id])
        dropped_id = JSON.parse(params[:dropped_id])

        puts "++++++++++++++++item drag and drop requests received from client+++++++++++++++++++++++++++"
        dragged = Item.find(dragged_id) 
        dropped = Item.find(dropped_id)        
        puts dropped.sort
        puts dragged.sort
        # drag up
        if(dragged_id == dropped_id || dragged.sort == dropped.sort)
          render_error("not allowed drag and drop for same categories", :unprocessable_entity)
        elsif(dragged.sort < dropped.sort)
          Item.where("sort > :dragged_sort and sort <= :dropped_sort and category_id = :category_id and deleted = false and assigned=true", {dropped_sort: dropped.sort, dragged_sort: dragged.sort, category_id: category_id }).order(:sort).each do |item|
            puts "drag down"
            temp = item.sort
            item.sort = dragged.sort
            if item.save
              puts "category id: " + item.id.to_s + "sort: " + item.sort.to_s + " succesfully updated."
            else
              puts "category save update failed"
              puts item.errors.full_messages[0]
              render_error(item.errors.full_messages[0], :unprocessable_entity)
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
          Item.where("sort < :dragged_sort and sort >= :dropped_sort and category_id = :category_id and deleted = false and assigned=true", {dropped_sort: dropped.sort, dragged_sort: dragged.sort, category_id: category_id }).order(sort: :desc).each do |item|
            puts "drag up"
            temp = item.sort
            item.sort = dragged.sort
            if item.save
              puts "item id: " + item.id.to_s + "sort: " + item.sort.to_s + " succesfully updated."
            else
              puts "item save update failed"
              puts item.errors.full_messages[0]
              render_error(item.errors.full_messages[0], :unprocessable_entity)
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

      def create
        puts "Hahahahahahahahah+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        puts request.content_type
        if request.content_type == "multipart/form-data"
          #Handle file upload
          puts "file upload test module ok **********************************************************"
          # puts params[item[:file]]
          pdf = Item.new(item_params)
          # Libreconv.convert(@paper.file.identifier, '/Users/daria/pdf_documents')

          #
          if pdf.save
            puts 'Item successfully created.'
            # redirect_to :back, notice: 'Paper successfully created.'   
            # save_pdf_text(pdf)
            render json: pdf, status: :created
          else 
            puts 'Something went wrong.'
            # redirect_to :back, notice: 'Something went wrong.'
            render_error(pdf.errors.full_messages[0], :unprocessable_entity)
          end 

        else #request.content_type == JSONAPI::MEDIA_TYPE
          super
        end
      end

      def item_params
        params.require(:item).permit(:title, :file, :category_id, :asset_id, :assigned)
      end

      def save_pdf_text(pdf)
        # a way to read uploaded content using CarrierWave's mount_uploader
        puts pdf.file.file
        if  !pdf.file.file.nil? then
          binary = pdf.file.file

          reader = PDF::Reader.new(binary)
          puts reader.info

          pdf_text = ""
          reader.pages.each do |page|
            puts page.text
            pdf_text += page.text
          end
        end        
      end

    end
  end
end
