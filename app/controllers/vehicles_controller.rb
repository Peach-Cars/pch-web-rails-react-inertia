class VehiclesController < ApplicationController
    before_action :set_vehicle, except: %i[index create new]
  
    def index
      @vehicles = Vehicle.all
      render inertia: 'Vehicles', props: {
        vehicles: @vehicles
      }
    end
  
    def edit
    end
  
    def update
    end
  
    def show
      render inertia: 'Vehicle', props:{
        vehicle: @vehicle
      }
    end
  
    def new
    end
  
    def create
    end
  
    def destroy
    end
  
    private
  
    def set_vehicle
      @vehicle = Vehicle.find(params[:id])
    end
  
    def vehicle_params
      params.require(:vehicle).permit(:registration_number, :make, :model, :chassis_number, :price)
    end
  end
  