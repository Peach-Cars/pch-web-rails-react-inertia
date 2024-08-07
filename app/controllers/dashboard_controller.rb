class DashboardController < ApplicationController
  def index
    render inertia: 'Dashboard', props: {
      name: 'Peach product team'
    }
  end
end
