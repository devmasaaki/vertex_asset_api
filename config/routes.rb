require 'api_constraints.rb'

Rails.application.routes.draw do
  # For details on the DSL available within this file,
  # see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  # Api definition
  scope module: :api , defaults:{ format: :json} do
    scope module: :v1, constraints: ApiConstraints.new(version: 1,
                                                       default: true) do
      get    'v1/versions/state'       => 'versions#state'
      post   'users/login'          => 'sessions#create'
      delete 'users/logout'         => 'sessions#destroy'
      post   'users/reset_password' => 'users#reset_password'
      resources :users, only: [:create, :destroy]
      resources :notes
    end
  end

  get 'users/confirm/:token',        to: 'users#confirm', as: 'users_confirm'
  get 'users/confirm_reset/:token',  to: 'users#confirm_reset',
                                     as: 'users_confirm_reset'
  get 'privacy',                     to: 'pages#privacy'
  get 'terms',                       to: 'pages#terms'
  get 'users/regist',                to: 'users#regist'

  # vertex api
  namespace :api do
    namespace :v1 do
      jsonapi_resources :assets      
      jsonapi_resources :categories
      jsonapi_resources :items

      post 'dragdrop/category'  => 'categories#dragdrop_category', defaults: {format: :json}
      post 'dragdrop/subcategory'  => 'categories#dragdrop_subcategory', defaults: {format: :json}
      post 'dragdrop/item'  => 'items#dragdrop_item', defaults: {format: :json}
    end
  end
end
