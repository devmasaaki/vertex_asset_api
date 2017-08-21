class ExtractContentFromPdFfiles < ActiveRecord::Migration[5.1]
  def change
    total = Item.where("content is NULL").size
    failed = 0
    Item.where("content is NULL").each do |pdf|
      if !pdf.pdf_to_text
        failed += 1
      end
    end
    puts "Extracting finished."
    puts "Total = " + total.to_s
    puts "Success = " + (total-failed).to_s
    puts "Failed = " + failed.to_s
  end
end
