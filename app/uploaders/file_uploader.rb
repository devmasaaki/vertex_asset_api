# encoding: utf-8

class FileUploader < CarrierWave::Uploader::Base

  delegate :identifier, to: :file

  storage :file

  process :store_file_attributes

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
    %w(pdf)
  end 

  def content_type_whitelist
    %w(application/pdf application/x-pdf)
  end

  private

  def store_file_attributes
    if file && model
      model.file_size = File.size(file.file)
      model.human_size = ::ApplicationController.helpers.number_to_human_size(model.file_size)
    end
  end

end
