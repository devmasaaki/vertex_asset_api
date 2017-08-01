module Api
  module V1
    class TestApiController < ApiController
      skip_before_action :auth_with_token!, only: [:index]
      def index
        render json: Asset.all
      end
      def show
      end
    end
  end
end
