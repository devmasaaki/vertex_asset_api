module Api
  module V1
    class ItemsController < JSONAPI::ResourceController
      # skip_before_action :auth_with_token!, only: [:index]
    end
  end
end
