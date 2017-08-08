module Api
  module V1
    class CategoriesController < JSONAPI::ResourceController
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