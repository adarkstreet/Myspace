class Api::PeopleController < ApplicationController
    before_action :authenticate_user!
  def index
    render json: 
  end

  def show
    render json: @Person
  end

  def update
  end
end
