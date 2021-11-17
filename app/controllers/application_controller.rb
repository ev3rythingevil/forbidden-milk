class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorized
  # def authorized
  #   @current_user = User.find_by(id: session[:user_id])
  #   byebug
  #   render json: { error: "You aren't logged in bub"}, status: :unauthorized unless @current_user
  # end
end
