class UserPressingsController < ApplicationController
  before_action :set_user_pressing, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # GET /user_pressings
  def index
  
    @user_pressings = UserPressing.where("user_id =?", session[:user_id])
    render json: @user_pressings, include: ['pressing']
  end

  # GET /user_pressings/1
  def show
    render json: @user_pressings, include: ['pressing', 'record']
  end

  # POST /user_pressings
  def create
    @user_pressing = UserPressing.create(user_pressing_params)
    render json: @user_pressing, status: :created, location: @user_pressing
  end

  # PATCH/PUT /user_pressings/1
  def update
    if @user_pressing.update(user_pressing_params)
      render json: @user_pressing
    else
      render json: @user_pressing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_pressings/1
  def destroy
    @user_pressing.destroy
    render json: {}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_pressing
      @user_pressing = UserPressing.find_by(user_id: session[:user_id])
    end

    # Only allow a list of trusted parameters through.
    def user_pressing_params
      params.permit(:user_id)
    end

    def record_not_found
      render json: { error: "Pressing not found" }, status: :not_found
    end
end
