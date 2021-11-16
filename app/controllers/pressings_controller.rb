class PressingsController < ApplicationController
  before_action :set_pressing, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # GET /pressings
  def index
    @pressings = Pressing.all

    render json: @pressings
  end

  # GET /pressings/1
  def show
    render json: @pressing
  end

  # POST /pressings
  def create
    @pressing = Pressing.new(pressing_params)

    if @pressing.save
      render json: @pressing, status: :created, location: @pressing
    else
      render json: @pressing.errors, status: :unprocessable_entity
    end
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
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pressing
      @pressing = Pressing.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pressing_params
      params.require(:pressing).permit(:record_id, :weight, :color, :label)
    end

    def record_not_found
      render json: { error: "Pressing not found" }, status: :not_found
    end
end
