Rails.application.routes.draw do
  resources :tickets
  devise_for :agents
  devise_for :customers
  root to: 'spa#index'
end
