class RecordsController < ApplicationController
  before_action :set_record, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # GET /records
  def index
    @records = Record.all

    render json: @records, include: ['pressings', 'pressings.user_pressings']
  end

  # GET /records/1
  def show
    render json: @record, include: ['pressings', 'pressings.user_pressings']
  end

  def only_user
    @user_things = Record.includes(:user_pressings)
    .where(user_pressings: {user_id: session[:user_id]})
    byebug
    # @user_stuff = @user_things.where(user_id: session[:user_id])
    render json: @user_things, include: ['pressings', 'pressings.user_pressings']
  end

  # POST /records
  def create
    @record = Record.new(record_params)

    if @record.save
      render json: @record, status: :created, location: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /records/1
  def update
    if @record.update(record_params)
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /records/1
  def destroy
    @record.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_record
      @record = Record.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def record_params
      params.require(:record).permit(:artist_id, :title, :year)
    end
    
    def record_not_found
      render json: { error: "Record not found" }, status: :not_found
    end
end
