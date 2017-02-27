class PepesController < ApplicationController
  before_action :set_pepe, only: [:show, :edit, :update, :destroy]

  # GET /pepes
  # GET /pepes.json
  def index
    @pepes = Pepe.all
  end

  # GET /pepes/1
  # GET /pepes/1.json
  def show
  end

  # GET /pepes/new
  def new
    @pepe = Pepe.new
  end

  # GET /pepes/1/edit
  def edit
  end

  # POST /pepes
  # POST /pepes.json
  def create
    @pepe = Pepe.new(pepe_params)

    respond_to do |format|
      if @pepe.save
        format.html { redirect_to @pepe, notice: 'Pepe was successfully created.' }
        format.json { render :show, status: :created, location: @pepe }
      else
        format.html { render :new }
        format.json { render json: @pepe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pepes/1
  # PATCH/PUT /pepes/1.json
  def update
    respond_to do |format|
      if @pepe.update(pepe_params)
        format.html { redirect_to @pepe, notice: 'Pepe was successfully updated.' }
        format.json { render :show, status: :ok, location: @pepe }
      else
        format.html { render :edit }
        format.json { render json: @pepe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pepes/1
  # DELETE /pepes/1.json
  def destroy
    @pepe.destroy
    respond_to do |format|
      format.html { redirect_to pepes_url, notice: 'Pepe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pepe
      @pepe = Pepe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pepe_params
      params.require(:pepe).permit(:name)
    end
end
