class Item < ApplicationRecord
  # has_many :categories
  belongs_to :category
  belongs_to :asset
  
  validates :file, presence: true, on: :create
  validates :title, presence: true

  mount_uploader :file, FileUploader

  # after_create :reload
  after_update :reload

  def pdf_to_text
    # a way to read uploaded content using CarrierWave's mount_uploader
    if  !self.file.file.nil? then
      begin 
        self.content = Pdftotext.text(self.file.file.path)
        # puts "extracted text from pdf file : " + self.file.file.path
        # puts "content : "
        # puts self.content
        self.save!
      rescue Exception => e
        puts "convert pdf to text failed/n Item id:#{self.id}"
        puts e.message
        false
      end
    end   
    true
  end

  def update_filesize_0819_migration
    self.file_size = File.size(self.file.file.path)
    self.human_size = ::ApplicationController.helpers.number_to_human_size(self.file_size)
    self.save!
  end
end
