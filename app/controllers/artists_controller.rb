class ArtistsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :force_json, only: :search_bar
  # GET /artists
  def index
    artists = Artist.all

    render json: artists, include: ['records', 'records.pressings', 'records.pressings.user_pressings']  
  end

  def search_bar
    @q = Artist.ransack(params[:q])
    @artists = @q.result(distinct: true)
  end

  # GET /artists/1
  def show
    artist = Artist.find(params[:id])
    render json: artist, include: :records
  end


  # POST /artists
  def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render json: @artist, status: :created, location: @artist
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artists/1
  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artists/1
  def destroy
    @artist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artist
      @artist = Artist.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def artist_params
      params.require(:artist).permit(:name, :genre)
    end

    def record_not_found
      render json: { error: "Artist not found" }, status: :not_found
    end

    def force_json
      request.format = :json
    end
end
