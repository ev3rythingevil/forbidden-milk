class UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  # skip_before_action :authorized, only: [:create]
  # GET /users/1
  def show
    
    user = User.find(session[:user_id])
    render json: user
  end

  # POST /users
  def create
    user = User.create(user_params)
    if user.valid?
      render json: {user: UserSerializer.new(@user)}, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end

    def record_not_found
      render json: { error: "User not found" }, status: :not_found
    end
end
