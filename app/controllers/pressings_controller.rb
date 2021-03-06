class PressingsController < ApplicationController
  before_action :set_pressing, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # GET /pressings
  def index
    @pressings = Pressing.all

    render json: @pressings, include: ["user_pressings"]
  end

  # GET /pressings/1
  def show
    render json: @pressing
  end

  def show_user
    user_pressing_id = UserPressing.find_by(:p)
    @user_records = Pressing.where("id = ?", user_pressing_id.ids)
    render json: @user_records
  end

  # POST /pressings
  def create
    @pressing = Pressing.create(pressing_params)
    UserPressing.create(user_id: session[:user_id], pressing_id: @pressing.id)
    render json: @pressing, status: :created
  end

  # PATCH/PUT /pressings/1
  def update
    if @pressing.update(pressing_params)
      render json: @pressing
    else
      render json: @pressing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pressings/1
  def destroy
    @pressing.destroy
    render json: {}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pressing
      @pressing = Pressing.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pressing_params
      params.permit(:record_id, :weight, :color, :label)
    end

    def record_not_found
      render json: { error: "Pressing not found" }, status: :not_found
    end
end
