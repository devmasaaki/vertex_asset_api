require 'rubygems'
require 'pdf/reader'

module Api
  module V1
    class ItemsController < JSONAPI::ResourceController
      # skip_before_action :auth_with_token!, only: [:index]
      # skip_before_action :setup_request, only: [:create]
      # skip_before_action :ensure_correct_media_type, only: [:create]

      def create
        puts "Hahahahahahahahah+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        puts request.content_type
        if request.content_type == "multipart/form-data"
          #Handle file upload
          puts "file upload test module ok **********************************************************"

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
        params.require(:item).permit(:title, :file, :category_id)
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
