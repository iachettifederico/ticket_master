Rails.application.routes.draw do
  resources :pepes

  root to: 'spa#dashboard'
end
