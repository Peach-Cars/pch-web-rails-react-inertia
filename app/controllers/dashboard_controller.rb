class DashboardController < ApplicationController
  def index
    render inertia: 'Dashboard', props: {
      name: 'Welcome'
    }
  end
end
