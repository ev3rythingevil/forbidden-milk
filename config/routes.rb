Rails.application.routes.draw do
  resources :user_pressings, only: [:index, :create, :show, :destroy, :update]
  resources :pressings
  resources :records
  resources :artists do
    resources :records, only: [:show]
  end
  resources :users, only: [:create, :show, :destroy, :update]

  # login logic
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
