class Api::MenuItemsController < ApplicationController
  def index
    render json: MenuItem.all
  end

end
